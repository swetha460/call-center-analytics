export default function Home() {
  return (
    <div style={{padding:50, textAlign:'center'}}>
      <h1 style={{fontSize:50}}>🎤 Call Center Analytics</h1>
      <div style={{background:'black', color:'lime', padding:30, margin:40, borderRadius:20}}>
        <h2>✅ HACKATHON READY</h2>
        <pre>{`POST /api/analyze
{
  "audioUrl": "https://recordings.exotel.com/..."
}`}</pre>
        <a href="/api/health" style={{padding:'15px 30px', background:'green', color:'white', textDecoration:'none', borderRadius:10, fontWeight:'bold'}}>
          Test API
        </a>
      </div>
    </div>
  );
}
