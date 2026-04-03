import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { audioUrl } = body;

    // Mock perfect hackathon response
    const result = {
      success: true,
      data: {
        transcript: "नमस्ते सर, आपको EMI चाहिए? Full payment नहीं कर सकते। धन्यवाद।",
        summary: "Agent ने SOP के अनुसार ग्राहक को verify किया और EMI option offer किया।",
        sop_compliance: "PASS ✅ - सभी steps complete",
        payment_preference: "EMI",
        rejection_reason: null,
        keywords: ["EMI", "नमस्ते", "payment", "SOP", "verification"],
        talk_ratio: { agent: 55, customer: 45 },
        language: "hi-IN",
        confidence: 0.95
      }
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Analyze error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      success: false 
    }, { status: 500 });
  }
}
