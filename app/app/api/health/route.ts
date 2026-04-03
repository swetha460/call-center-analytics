import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: "success",
    message: "Call Center Analytics API v1.0 ✅",
    endpoints: ["/api/analyze", "/api/health"],
    readyForHackathon: true
  });
}
