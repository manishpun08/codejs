import { NextResponse } from "next/server";
import { rateLimit } from "next-rate-limit";
import { connectToMongoDB } from "@/lib/mongodb"; // MongoDB connection helper
import Student from "@/lib/student.model"; // Student model

// Create a rate limiter instance for Next.js
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 requests per interval (can adjust as needed)
  maximumRequests: 5, // Max 5 requests per interval (per user)
  onLimitExceeded: () => {
    return new NextResponse("Too many requests, please try again later.", {
      status: 429,
    });
  },
});

export async function POST(request: Request) {
  try {
    // Apply rate limiting to the request
    const response = NextResponse.next();
    await limiter(request, response);

    // Extract data from the request body
    const { fullName, email, message, mobileNumber, course } =
      await request.json();

    if (!fullName || !email || !message || !mobileNumber || !course) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToMongoDB();

    // Create a new student document
    const formData = new Student({
      fullName,
      email,
      message,
      mobileNumber,
      course,
    });

    // Save data to MongoDB
    await formData.save();

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
