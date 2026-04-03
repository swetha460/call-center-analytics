export async function GET() {
  return Response.json({
    status: "success",
    message: "Call Center Analytics API ✅",
    ready: true
  });
}
