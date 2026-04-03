import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { audioUrl } = body;

    return NextResponse.json({
      success: true,
      data: {
        transcript: "Namaste sir, EMI chahiye kya?",
        summary: "Customer requested EMI payment option after proper greeting.",
        sop_compliance: "PASS ✅",
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
