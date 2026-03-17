import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // In a real application, connect to resend, nodemailer, or database here
    console.log("Received inquiry:", body);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Inquiry received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { message: "Error processing inquiry." },
      { status: 500 }
    );
  }
}
