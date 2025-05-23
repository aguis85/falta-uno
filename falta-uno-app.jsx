
// Inicio del prototipo de la app Falta Uno
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, UserPlus } from 'lucide-react';

export default function FaltaUnoApp() {
  const [step, setStep] = useState("registro");
  const [form, setForm] = useState({ nombre: "", alias: "", barrios: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("rol");
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #cfe2ff, white, #d7f3ff)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1rem", fontFamily: "sans-serif" }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Football_%28soccer_ball%29_icon.svg/1024px-Football_%28soccer_ball%29_icon.svg.png" alt="Logo Falta Uno" style={{ width: 80, height: 80, marginBottom: 8 }} />
      <div style={{ fontSize: "1.875rem", fontWeight: 800, color: "#1e40af", marginBottom: 24, letterSpacing: "0.05em" }}>Falta Uno</div>

      {step === "registro" && (
        <Card style={{ width: "100%", maxWidth: "28rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "1rem", border: "1px solid #93c5fd" }}>
          <CardContent style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1d4ed8" }}>Registrate</h1>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Input
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                required
              />
              <Input
                placeholder="Tu apodo o alias"
                value={form.alias}
                onChange={(e) => setForm({ ...form, alias: e.target.value })}
                required
              />
              <Input
                placeholder="Tus barrios preferidos (ej: Caballito, Palermo)"
                value={form.barrios}
                onChange={(e) => setForm({ ...form, barrios: e.target.value })}
                required
              />
              <Button style={{ backgroundColor: "#2563eb", color: "white" }} type="submit">Continuar</Button>
            </form>
          </CardContent>
        </Card>
      )}

      {step === "rol" && (
        <Card style={{ width: "100%", maxWidth: "28rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "1rem", border: "1px solid #93c5fd" }}>
          <CardContent style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1d4ed8" }}>Hola {form.alias}, ¿qué querés hacer hoy?</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Button style={{ backgroundColor: "#16a34a", color: "white" }} onClick={() => alert('Crear partido')}>
                <MapPin style={{ marginRight: "0.5rem", width: "1.25rem", height: "1.25rem" }} /> Organizar un partido
              </Button>
              <Button style={{ border: "1px solid #16a34a", color: "#16a34a", backgroundColor: "#f0fdf4" }} onClick={() => alert('Buscar partidos')} variant="outline">
                <UserPlus style={{ marginRight: "0.5rem", width: "1.25rem", height: "1.25rem" }} /> Unirme a un partido
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
