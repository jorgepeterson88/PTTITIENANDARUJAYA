import { NextRequest, NextResponse } from "next/server";
import ZAI from 'z-ai-web-dev-sdk';

// Contact form submission handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, subject = "General Inquiry" } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation to customer
    
    // For now, we'll just log and return success
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We'll contact you soon.",
      data: {
        name,
        email,
        subject,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}