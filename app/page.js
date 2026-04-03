export default function Home() {
  return (
    <main style={{
      padding: 40,
      background: '#667eea',
      minHeight: '100vh',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: 48, marginBottom: 20 }}>
        🎤 Call Center Analytics
      </h1>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: 30,
        borderRadius: 20,
        maxWidth: 600,
        margin: '0 auto'
      }}>
        <h2>✅ LIVE - Hackathon Ready</h2>
        <pre style={{
          background: 'black',
          padding: 20,
          borderRadius: 10,
          margin: 20,
          fontFamily: 'monospace'
        }}>
POST /api/analyze {"audioUrl": "test.mp3"}
        </pre>
        <a href="/api/health" style={{
          padding: '15px 30px',
          background: '#10b981',
          color: 'white',
          textDecoration: 'none',
          borderRadius: 10,
          display: 'inline-block'
        }}>
          🧪 Test API
        </a>
      </div>
    </main>
  );
}
