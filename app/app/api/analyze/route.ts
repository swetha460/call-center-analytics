import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { audioUrl } = await request.json();

  return NextResponse.json({
    success: true,
    data: {
      transcript: "Namaste sir, EMI chahiye kya?",
      summary: "Customer requested EMI payment option.",
      sop_compliance: "PASS ✅",
      payment_preference: "EMI",
      rejection_reason: null,
      keywords: ["EMI", "namaste", "payment", "SOP", "verification"],
      talk_ratio: { agent: 55, customer: 45 }
    }
  });
}
