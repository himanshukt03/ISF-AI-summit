export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import mongoose from "mongoose";

// MongoDB connection setup
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ MONGODB_URI is missing from environment variables");
}

let isConnected = false;

async function connectToDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI as string, {
      dbName: "ISF-summit-2025",
    });
    isConnected = true;
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}

// Define Schema and Model
const registrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    organization: { type: String, required: true },
    designation: { type: String, required: true },
  },
  { timestamps: true }
);

const Registration =
  mongoose.models.Registration || mongoose.model("Registration", registrationSchema);

// Handle POST request
export async function POST(req: Request) {
  try {
    console.log("Received a new request at /api/register");

    // Ensure DB is connected
    await connectToDB();

    // Parse incoming data
    const data = await req.json();
    console.log("Data received:", data);

    // Check for duplicate email
    const existingUser = await Registration.findOne({ email: data.email });
    if (existingUser) {
        console.log("Duplicate entry detected");
        return NextResponse.json(
          { message: "You have already registered" }, 
          { status: 409 } 
        );
      }

    // Save to database
    const newRegistration = new Registration(data);
    await newRegistration.save();

    console.log("Data saved successfully");
    return NextResponse.json({ message: "Registration successful" }, { status: 201 });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json(
      { message: "Error saving data", error: (error as Error).message },
      { status: 500 }
    );
  }
}
