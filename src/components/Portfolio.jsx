import Container from './Container'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  { tag: 'Página Web', title: 'Restaurante El Fogón', desc: 'Sitio con menú digital, reservas online y dominio propio.', grad: ['#00AEEF', '#0086C0'], emoji: '🍽️' },
  { tag: 'Publicidad', title: 'Clínica DentalPlus', desc: 'Campaña en Google Ads con 3x retorno de inversión en 60 días.', grad: ['#8DC63F', '#6BA32A'], emoji: '🦷' },
  { tag: 'Diseño', title: 'Boutique Lúa', desc: 'Identidad visual completa: logo, paleta, redes y catálogo digital.', grad: ['#00AEEF', '#8DC63F'], emoji: '👗' },
  { tag: 'Web + Diseño', title: 'Inmobiliaria Novum', desc: 'Portal con buscador de propiedades y tours virtuales.', grad: ['#0086C0', '#00AEEF'], emoji: '🏠' },
  { tag: 'Email Pro', title: 'Despacho Legal MV', desc: 'Migración a correos corporativos con suite colaborativa.', grad: ['#6BA32A', '#8DC63F'], emoji: '⚖️' },
  { tag: 'Página Web', title: 'GymFit Studio', desc: 'App web para reservas de clases y seguimiento de rutinas.', grad: ['#8DC63F', '#00AEEF'], emoji: '💪' },
]

export default function Portfolio() {
  const headingRef = useScrollAnimation({ from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 } })
  const gridRef = useScrollAnimation({ from: { opacity: 0, y: 60, scale: 0.95 }, to: { opacity: 1, y: 0, scale: 1 }, stagger: 0.1, triggerOffset: '85%' })

  return (
    <section id="portafolio" style={{ background: '#F9FAFB', padding: '80px 0' }}>
      <Container>
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ color: '#00AEEF', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Nuestro trabajo</span>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a1a', margin: '8px 0 12px' }}>Proyectos que hablan por nosotros</h2>
          <p style={{ color: '#6B7280', margin: 0 }}>Resultados reales para negocios reales.</p>
        </div>

        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {projects.map(p => (
            <div key={p.title}
              style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,174,239,0.15)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = '' }}>
              <div style={{ height: 160, background: `linear-gradient(135deg, ${p.grad[0]}, ${p.grad[1]})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64 }}>
                {p.emoji}
              </div>
              <div style={{ padding: '18px 20px 22px' }}>
                <span style={{ background: '#E0F5FF', color: '#007BB5', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999 }}>{p.tag}</span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1a1a1a', margin: '12px 0 4px' }}>{p.title}</h3>
                <p style={{ color: '#6B7280', fontSize: 14, margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="#contacto" style={{ border: '2px solid #00AEEF', color: '#00AEEF', fontWeight: 700, padding: '12px 32px', borderRadius: 999, textDecoration: 'none', fontSize: 15 }}>
            ¿Tu empresa aquí? Contáctanos
          </a>
        </div>
      </Container>
    </section>
  )
}
