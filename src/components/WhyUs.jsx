import Container from './Container'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const reasons = [
  { icon: '🚀', title: 'Entrega rápida', desc: 'Tu sitio listo en días, no meses. Sabemos que tu tiempo vale.' },
  { icon: '💬', title: 'Comunicación directa', desc: 'Sin intermediarios. Hablas directo con quien hace tu proyecto.' },
  { icon: '📊', title: 'Resultados medibles', desc: 'Reportes claros de cada campaña. Sabes exactamente en qué se invierte.' },
  { icon: '🛡️', title: 'Soporte continuo', desc: 'No te dejamos solo. Acompañamiento técnico después de cada entrega.' },
]

export default function WhyUs() {
  const textRef = useScrollAnimation({ from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 }, duration: 0.8 })
  const cardsRef = useScrollAnimation({ from: { opacity: 0, x: 50 }, to: { opacity: 1, x: 0 }, stagger: 0.12, duration: 0.6 })

  return (
    <section id="nosotros" aria-label="Por qué elegirnos" style={{ background: 'linear-gradient(135deg, #00AEEF, #8DC63F)', padding: '80px 0' }}>
      <Container>
        <div style={{ display: 'flex', gap: 56, alignItems: 'center', flexWrap: 'wrap' }}>
          <div ref={textRef} style={{ flex: '1 1 340px' }}>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>¿Por qué nosotros?</span>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: 'white', margin: '8px 0 16px', lineHeight: 1.2 }}>
              Más que una agencia,{' '}<br />somos tu equipo digital
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 32, fontSize: 16 }}>
              Trabajamos con empresas locales y nacionales para llevarlas al siguiente nivel. Cada proyecto lo tratamos como si fuera nuestro propio negocio.
            </p>
            <a href="#contacto" style={{ display: 'inline-block', background: 'white', color: '#007BB5', fontWeight: 700, padding: '14px 28px', borderRadius: 999, textDecoration: 'none', fontSize: 15, boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
              Hablemos de tu proyecto
            </a>
          </div>

          <div ref={cardsRef} style={{ flex: '1 1 340px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {reasons.map(r => (
              <div key={r.title} style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 18, padding: 20, color: 'white' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{r.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, marginTop: 0 }}>{r.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
