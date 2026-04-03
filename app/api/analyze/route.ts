export async function POST(request) {
  try {
    const body = await request.json();
    
    return Response.json({
      success: true,
      data: {
        transcript: "नमस्ते सर, EMI चाहिए क्या?",
        summary: "ग्राहक ने EMI payment option चुना।",
        sop_compliance: "PASS ✅",
        payment_preference: "EMI",
        rejection_reason: null,
        keywords: ["EMI", "नमस्ते", "payment", "SOP"],
        talk_ratio: { agent: 55, customer: 45 }
      }
    });
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
