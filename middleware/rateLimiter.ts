import { NextApiRequest, NextApiResponse } from "next";

// Define the structure of the rate limit data for each IP
interface RateLimitData {
  count: number;
  lastReset: number;
}

// Map to store rate limit data for each IP
const rateLimitMap = new Map<string, RateLimitData>();

// The rate limit middleware
export default function rateLimitMiddleware(
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    // Extract the IP address from the request headers or connection object
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    if (!ip || typeof ip !== "string") {
      return res.status(400).send("Bad Request");
    }

    const limit = 5; // Limiting requests to 5 per minute per IP
    const windowMs = 60 * 1000; // 1 hour in milliseconds

    // Initialize rate limit data if it doesn't exist for the IP
    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, {
        count: 0,
        lastReset: Date.now(),
      });
    }

    // Get the current rate limit data for the IP
    const ipData = rateLimitMap.get(ip)!;

    // Reset the count if the window has expired
    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0;
      ipData.lastReset = Date.now();
    }

    // If the rate limit is exceeded, respond with a 429 status
    if (ipData.count >= limit) {
      return res.status(429).send("Too Many Requests");
    }

    // Increment the request count for this IP
    ipData.count += 1;

    // Call the handler if rate limit is not exceeded
    return handler(req, res);
  };
}
