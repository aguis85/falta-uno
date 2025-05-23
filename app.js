
const { useState } = React;

function FaltaUnoApp() {
  const [step, setStep] = useState("registro");
  const [form, setForm] = useState({ nombre: "", alias: "", barrios: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("rol");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Football_%28soccer_ball%29_icon.svg/1024px-Football_%28soccer_ball%29_icon.svg.png" alt="Logo Falta Uno" style={{ width: 80, height: 80, marginBottom: 10 }} />
      <div style={{ fontSize: "32px", fontWeight: "bold", color: "#1e3a8a", marginBottom: 20 }}>Falta Uno</div>

      {step === "registro" && (
        <div style={{ background: "white", padding: 30, borderRadius: 16, maxWidth: 400, width: "100%", textAlign: "center" }}>
          <form onSubmit={handleSubmit}>
            <input placeholder="Tu nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
            <input placeholder="Tu apodo o alias" value={form.alias} onChange={(e) => setForm({ ...form, alias: e.target.value })} required />
            <input placeholder="Tus barrios preferidos (ej: Caballito, Palermo)" value={form.barrios} onChange={(e) => setForm({ ...form, barrios: e.target.value })} required />
            <button type="submit" style={{ marginTop: 10 }}>Continuar</button>
          </form>
        </div>
      )}

      {step === "rol" && (
        <div style={{ background: "white", padding: 30, borderRadius: 16, maxWidth: 400, width: "100%", textAlign: "center" }}>
          <h2 style={{ color: '#1e3a8a' }}>Hola {form.alias}, ¿qué querés hacer hoy?</h2>
          <button onClick={() => alert('Crear partido')} style={{ backgroundColor: '#10b981', marginTop: 12, padding: 10, borderRadius: 8, color: 'white', border: 'none' }}>
            Organizar un partido
          </button>
          <button onClick={() => alert('Buscar partidos')} style={{ backgroundColor: '#facc15', marginTop: 12, padding: 10, borderRadius: 8, color: 'black', border: 'none' }}>
            Unirme a un partido
          </button>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<FaltaUnoApp />);
