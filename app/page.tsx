export default function Home() {
  return (
    <main style={{
      padding: '40px',
      background: '#667eea',
      minHeight: '100vh',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        🎤 Call Center Analytics
      </h1>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '30px',
        borderRadius: '20px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
          ✅ API LIVE - Hackathon Ready
        </h2>
        <pre style={{
          background: 'black',
          padding: '20px',
          borderRadius: '10px',
          fontSize: '14px',
          marginBottom: '20px',
          textAlign: 'left'
        }}>
POST /api/analyze
{"audioUrl": "https://recordings.exotel.com/exotelrecordings/guvi64/5780094ea05a75c867120809da9a199f.mp3"}
        </pre>
        <a href="/api/health" style={{
          display: 'inline-block',
          padding: '15px 30px',
          background: '#10b981',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '10px',
          fontWeight: 'bold'
        }}>
          🧪 Test API Health
        </a>
      </div>
    </main>
  );
}
