export default function Home() {
  return (
    <main style={{padding: 40, background: '#667eea', minHeight: '100vh', color: 'white'}}>
      <h1 style={{fontSize: 48}}>🎤 Call Center Analytics API</h1>
      <div style={{background: 'rgba(255,255,255,0.1)', padding: 30, borderRadius: 20}}>
        <h2>✅ LIVE & READY</h2>
        <pre style={{background: 'black', padding: 20, borderRadius: 10}}>
POST /api/analyze {"audioUrl": "sample.mp3"}
        </pre>
      </div>
    </main>
  );
}
