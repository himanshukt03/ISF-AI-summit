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
    throw error;
  }
}

// Define registrationTypes
const registrationTypes = [
  "One-Day Conference Delegate (Junicorn Summit)",
  "One-Day Conference Delegate (AI Summit)",
  "Two-Day Conference Delegate (Junicorn + AI Summit)",
  "Speaker",
  "Mentor",
  "Sponsor",
  "Exhibitor",
  "Organizer",
  "Special Invitee / VIP",
  "Crew Member",
  "Junicorn (Full Tour/Expedition)",
  "Junicorn (Conference + Exhibition only)"
];

// Schema
const registrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true }, // Ensure this is 'fullName', not 'name'
    email: { 
      type: String, 
      required: true, 
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    mobile: { type: String, required: true, trim: true },
    organization: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    registrationType: { 
      type: String, 
      required: true,
      enum: registrationTypes,
    },
    arrivalFrom: { type: String, required: true, trim: true },
    otherArrivalLocation: { 
      type: String, 
      trim: true,
      required: function() { return this.arrivalFrom === "other"; }
    },
    arrivalDate: { 
      type: Date, 
      required: true 
    },
    departureDate: { 
      type: Date, 
      required: true,
      validate: {
        validator: function(this: any, v: Date) {
          return v >= this.arrivalDate;
        },
        message: "Departure date must be on or after arrival date"
      }
    },
    specialRequests: { 
      type: String, 
      default: "",
      trim: true 
    }
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

registrationSchema.index({ email: 1 });
registrationSchema.index({ registrationType: 1 });

// Drop existing model to force schema update (optional, for debugging)
if (mongoose.models.Registration) {
  delete (mongoose.models as any).Registration;
}

const Registration = mongoose.model("Registration", registrationSchema);

export async function POST(req: Request) {
  try {
    console.log("Received a new request at /api/register");
    await connectToDB();

    const formData = await req.json();
    console.log("Data received:", formData);

    // Validate and convert dates
    const arrivalDate = new Date(formData.arrivalDate);
    const departureDate = new Date(formData.departureDate);

    if (isNaN(arrivalDate.getTime())) {
      return NextResponse.json({ message: "Invalid arrival date format" }, { status: 400 });
    }
    if (isNaN(departureDate.getTime())) {
      return NextResponse.json({ message: "Invalid departure date format" }, { status: 400 });
    }

    const data = {
      ...formData,
      arrivalDate,
      departureDate,
    };

    const existingUser = await Registration.findOne({ email: data.email });
    if (existingUser) {
      console.log("Duplicate entry detected for email:", data.email);
      return NextResponse.json({ message: "This email is already registered" }, { status: 409 });
    }

    const requiredFields = [
      'fullName', 'email', 'mobile', 'organization', 'designation',
      'city', 'country', 'registrationType', 'arrivalFrom',
      'arrivalDate', 'departureDate'
    ];

    for (const field of requiredFields) {
      if (!data[field] || (typeof data[field] === 'string' && !data[field].trim())) {
        console.log(`Validation failed: ${field} is missing or empty`);
        return NextResponse.json(
          { message: `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').trim()} is required` },
          { status: 400 }
        );
      }
    }

    if (data.arrivalFrom === "other" && (!data.otherArrivalLocation || !data.otherArrivalLocation.trim())) {
      console.log("Validation failed: otherArrivalLocation is required when arrivalFrom is 'other'");
      return NextResponse.json({ message: "Please specify other arrival location" }, { status: 400 });
    }

    const newRegistration = new Registration(data);
    await newRegistration.save();

    console.log("Registration saved successfully:", newRegistration);
    return NextResponse.json(
      { 
        message: "Registration successful",
        registrationId: newRegistration._id 
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing registration:", error);

    if (error instanceof mongoose.Error.ValidationError) {
      const errors = Object.entries(error.errors).map(([field, err]) => ({
        field,
        message: err.message
      }));
      console.log("Validation errors:", errors);
      return NextResponse.json(
        { 
          message: "Validation failed",
          errors 
        },
        { status: 400 }
      );
    }

    if (error instanceof mongoose.mongo.MongoServerError && error.code === 11000) {
      return NextResponse.json({ message: "Duplicate registration detected" }, { status: 409 });
    }

    return NextResponse.json(
      { 
        message: "Error processing registration",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({ message: "Registration API is operational" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Database connection failed" }, { status: 500 });
  }
}