import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { audioUrl } = await request.json();

    return NextResponse.json({
      success: true,
      data: {
        transcript: "Namaste sir, aapko EMI chahiye? Full payment nahi kar sakte.",
        summary: "Agent greeted customer properly and offered EMI payment options.",
        sop_compliance: "PASS ✅ - All SOP steps followed",
        payment_preference: "EMI",
        rejection_reason: null,
        keywords: ["EMI", "namaste", "payment", "SOP", "verification"],
        talk_ratio: { agent: 55, customer: 45 }
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
