import { NextResponse } from "next/server";
import { sendConfirmationEmail } from "@/utils/sendEmail";

export async function POST(req: Request) {
  try {
    const { to, name } = await req.json();

    if (!to || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    const response = await sendConfirmationEmail(to, name);
    
    return NextResponse.json(
      { message: "Confirmation email sent successfully", response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
