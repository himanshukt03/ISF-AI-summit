export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import { sendConfirmationEmail } from "@/utils/sendEmail";

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
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
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
  "Junicorn (Conference + Exhibition only)",
  "Metaverse Only"
];

// Schema
const registrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
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
    arrivalFrom: { type: String, trim: true }, 
    otherArrivalLocation: { 
      type: String, 
      trim: true,
      required: function() { return this.arrivalFrom === "other"; }
    },
    arrivalDate: { type: Date },
    departureDate: { 
      type: Date,
      validate: {
        validator: function(this: any, v: Date) {
          // Only validate if both dates exist
          if (!this.arrivalDate || !v) return true;
          return v >= this.arrivalDate;
        },
        message: "Departure date must be on or after arrival date"
      }
    },
    specialRequests: { type: String, default: "", trim: true },
    // emailSent: { type: Boolean, default: false }
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Add indexes for faster queries
registrationSchema.index({ email: 1 });
registrationSchema.index({ registrationType: 1 });
registrationSchema.index({ createdAt: 1 });

// Drop existing model to force schema update (optional, for debugging)
if (mongoose.models.Registration) {
  delete (mongoose.models as any).Registration;
}

const Registration = mongoose.model("Registration", registrationSchema);

// Helper function for date validation
function isValidDate(date: any): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

export async function POST(req: Request) {
  try {
    console.log("Received new registration request");
    await connectToDB();

    const formData = await req.json();
    
    // Only parse dates if they exist and are not empty strings
    const arrivalDate = formData.arrivalDate ? new Date(formData.arrivalDate) : undefined;
    const departureDate = formData.departureDate ? new Date(formData.departureDate) : undefined;

    // Validate dates only if they were provided
    if (arrivalDate && !isValidDate(arrivalDate)) {
      return NextResponse.json(
        { message: "Invalid arrival date format" }, 
        { status: 400 }
      );
    }
    if (departureDate && !isValidDate(departureDate)) {
      return NextResponse.json(
        { message: "Invalid departure date format" }, 
        { status: 400 }
      );
    }

    // Only validate date order if both dates were provided
    if (arrivalDate && departureDate && departureDate < arrivalDate) {
      return NextResponse.json(
        { message: "Departure date must be on or after arrival date" }, 
        { status: 400 }
      );
    }

    const data = {
      ...formData,
      arrivalDate: arrivalDate || undefined,
      departureDate: departureDate || undefined,
    };

    // Check for existing registration
    const existingUser = await Registration.findOne({ email: data.email });
    if (existingUser) {
      console.log("Duplicate registration attempt for:", data.email);
      return NextResponse.json(
        { message: "This email is already registered" }, 
        { status: 409 }
      );
    }

    // Validate required fields (excluding arrivalFrom and dates)
    const requiredFields = [
      'fullName', 'email', 'mobile', 'organization', 'designation',
      'city', 'country', 'registrationType'
    ];

    for (const field of requiredFields) {
      if (!data[field] || (typeof data[field] === 'string' && !data[field].trim())) {
        const fieldName = field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').trim();
        return NextResponse.json(
          { message: `${fieldName} is required` },
          { status: 400 }
        );
      }
    }

    // Validate otherArrivalLocation only if arrivalFrom is "other"
    if (data.arrivalFrom === "other" && (!data.otherArrivalLocation || !data.otherArrivalLocation.trim())) {
      return NextResponse.json(
        { message: "Please specify other arrival location" }, 
        { status: 400 }
      );
    }

    // Save registration
    const newRegistration = new Registration(data);
    await newRegistration.save();

    console.log("Registration saved successfully. ID:", newRegistration._id);

    // Send confirmation email asynchronously
    /*
    sendConfirmationEmail(data.email, data.fullName)
      .then(async () => {
        await Registration.updateOne(
          { _id: newRegistration._id },
          { $set: { emailSent: true } }
        );
        console.log("Confirmation email sent to:", data.email);
      })
      .catch(error => {
        console.error("Failed to send confirmation email:", error);
      });
    */

    return NextResponse.json(
      { 
        message: "Registration successful",
        registrationId: newRegistration._id 
      }, 
      { status: 201 }
    );

  } catch (error) {
    console.error("Registration processing error:", error);

    if (error instanceof mongoose.Error.ValidationError) {
      const errors = Object.entries(error.errors).map(([field, err]) => ({
        field,
        message: err.message
      }));
      return NextResponse.json(
        { message: "Validation failed", errors },
        { status: 400 }
      );
    }

    if (error instanceof mongoose.mongo.MongoServerError && error.code === 11000) {
      return NextResponse.json(
        { message: "Duplicate registration detected" }, 
        { status: 409 }
      );
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
    return NextResponse.json(
      { message: "Registration API is operational" }, 
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Database connection failed" }, 
      { status: 500 }
    );
  }
}