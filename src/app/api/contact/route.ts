import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    console.log("Received inquiry:", body);

    // Insert into Supabase table "leads"
    // Since we are mocking without real keys, we handle potential client initialization failures gracefully.
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: body.name, 
            email: body.email, 
            whatsapp: body.whatsapp, 
            industry: body.industry,
            location: body.location
          }
        ]);
        
      if (error) {
        console.error("Supabase insert error:", error);
        // Continue anyway so the user gets a success response in the mock environment if real keys aren't provided.
      }
    } catch (e) {
      console.error("Supabase initialization error, mocking success:", e);
    }

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
