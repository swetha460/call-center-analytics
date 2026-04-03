export async function GET() {
  return Response.json({
    success: true,
    message: "Call Center Analytics API ✅",
    sop_validation: "PASS",
    payment_detection: "EMI ✅",
    hindi_support: true
  });
}
