import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: "success",
    version: "1.0.0",
    message: "Call Center Analytics API - Hackathon Ready ✅",
    features: [
      "Hindi/Hinglish & Tamil/Tanglish support",
      "SOP compliance validation",
      "EMI/Full/Down payment detection",
      "Rejection reason extraction",
      "Keyword analysis"
    ],
    endpoints: {
      analyze: "POST /api/analyze",
      health: "GET /api/health"
    },
    testAudio: "https://recordings.exotel.com/exotelrecordings/guvi64/5780094ea05a75c867120809da9a199f.mp3"
  });
}
