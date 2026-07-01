import Container from './Container'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  { name: 'Carlos M.', role: 'Dueño, Restaurante El Fogón', text: 'En menos de una semana teníamos nuestra página lista. Las reservas online nos cambiaron el negocio. 100% recomendados.', avatar: '👨‍🍳' },
  { name: 'Dra. Laura V.', role: 'Directora, DentalPlus', text: 'La campaña de Google que nos manejaron trajo más pacientes nuevos en 2 meses que todo el año anterior. Resultados increíbles.', avatar: '👩‍⚕️' },
  { name: 'Sofía R.', role: 'CEO, Boutique Lúa', text: 'El diseño de nuestra marca quedó exactamente como lo imaginábamos. Ahora nuestra imagen en redes sociales es otra.', avatar: '👩‍💼' },
]

export default function Testimonials() {
  const headingRef = useScrollAnimation({ from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 } })
  const gridRef = useScrollAnimation({ from: { opacity: 0, y: 50, scale: 0.97 }, to: { opacity: 1, y: 0, scale: 1 }, stagger: 0.15, triggerOffset: '85%' })

  return (
    <section id="testimonios" aria-label="Testimonios de clientes" style={{ background: 'white', padding: '80px 0' }}>
      <Container>
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ color: '#00AEEF', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Testimonios</span>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a1a', margin: '8px 0 0' }}>Lo que dicen nuestros clientes</h2>
        </div>

        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {testimonials.map(t => (
            <div key={t.name} style={{ background: '#F9FAFB', borderRadius: 20, padding: 24, border: '1px solid #F0F0F0' }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#8DC63F', fontSize: 18 }}>★</span>)}
              </div>
              <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic', fontSize: 15 }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#E0F5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: '#6B7280', fontSize: 12 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
