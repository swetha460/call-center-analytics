export default function Home() {
  return (
    <main style={{
      padding: '40px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '48px', 
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        🎤 Call Center Analytics
      </h1>
      <div style={{
        background: 'rgba(255,255,255,0.15)',
        padding: '40px',
        borderRadius: '24px',
        maxWidth: '700px',
        margin: '0 auto',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>
          ✅ LIVE - Hackathon Ready
        </h2>
        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
          <pre style={{
            background: 'rgba(0,0,0,0.4)',
            padding: '25px',
            borderRadius: '16px',
            fontSize: '15px',
            fontFamily: 'monospace',
            overflow: 'auto'
          }}>
<span style={{color: '#10b981'}}>POST</span> /api/analyze
{"audioUrl": "https://recordings.exotel.com/exotelrecordings/guvi64/5780094ea05a75c867120809da9a199f.mp3"}
          </pre>
        </div>
        <a href="/api/health" style={{
          display: 'inline-block',
          padding: '18px 36px',
          background: '#10b981',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '16px',
          fontWeight: 'bold',
          fontSize: '18px',
          boxShadow: '0 8px 32px rgba(16,185,129,0.4)'
        }}>
          🧪 Test API Health
        </a>
        <p style={{ marginTop: '30px', fontSize: '16px', opacity: 0.9 }}>
          Hindi/Hinglish • Tamil/Tanglish • SOP Validation • EMI Detection
        </p>
      </div>
    </main>
  );
}
