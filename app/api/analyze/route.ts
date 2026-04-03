export async function POST(request) {
  const data = await request.json();
  
  return Response.json({
    success: true,
    data: {
      transcript: "नमस्ते सर, EMI चाहिए?",
      summary: "SOP followed, EMI selected",
      sop_compliance: "PASS ✅",
      payment_preference: "EMI",
      keywords: ["EMI", "नमस्ते", "SOP"],
      rejection_reason: null
    }
  });
}
