import { courses } from "@/constants/general.constant";
import mongoose, { Document, Model } from "mongoose";

export interface IStudent {
  fullName: string;
  email: string;
  course: string;
  mobileNumber: string;
  message: string;
}

// Merging ITodo interface with mongoose's Document interface to create
// a new interface that represents a todo document in MongoDB
export interface IStudentDocument extends IStudent, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the todo document, specifying the types
// and constraints
const studentSchema = new mongoose.Schema<IStudentDocument>(
  {
    fullName: {
      type: String,
      maxlength: 100,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    course: {
      type: String,
      required: true,
      trim: true,
      enum: courses,
    },
    mobileNumber: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the todo document
const Student: Model<IStudentDocument> =
  mongoose.models?.Student || mongoose.model("Student", studentSchema);

export default Student;
