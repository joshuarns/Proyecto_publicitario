import Container from './Container'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  { icon: '🌐', title: 'Páginas Web', desc: 'Sitios modernos, rápidos y optimizados para SEO que convierten visitantes en clientes.', bg: '#E0F5FF', color: '#00AEEF' },
  { icon: '📢', title: 'Publicidad Online', desc: 'Campañas en Google Ads y redes sociales con segmentación precisa y ROI medible.', bg: '#EEF9E0', color: '#6BA32A' },
  { icon: '🎨', title: 'Diseño Gráfico', desc: 'Identidad visual, logotipos, materiales promocionales y branding profesional.', bg: '#E0F5FF', color: '#007BB5' },
  { icon: '🔗', title: 'Dominios Internet', desc: 'Registro y gestión de dominios con las mejores extensiones para tu negocio.', bg: '#EEF9E0', color: '#8DC63F' },
  { icon: '☁️', title: 'Hospedaje Web', desc: 'Servidores rápidos y seguros con 99.9% de uptime y soporte continuo.', bg: '#E0F5FF', color: '#00AEEF' },
  { icon: '📧', title: 'Email Profesional', desc: 'Correos corporativos con tu dominio que dan imagen y confianza a tu empresa.', bg: '#EEF9E0', color: '#6BA32A' },
  { icon: '🛠️', title: 'Soporte Técnico', desc: 'Asistencia personalizada para mantener tu presencia digital funcionando sin interrupciones.', bg: '#EEF9E0', color: '#007BB5' },
]

export default function Services() {
  const headingRef = useScrollAnimation({ from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 } })
  const gridRef = useScrollAnimation({ from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 }, stagger: 0.1, triggerOffset: '85%' })

  return (
    <section id="servicios" style={{ background: 'white', padding: '80px 0' }}>
      <Container>
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ color: '#00AEEF', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Lo que hacemos</span>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a1a', margin: '8px 0 12px' }}>Servicios que impulsan tu negocio</h2>
          <p style={{ color: '#6B7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>Soluciones digitales completas para empresas que quieren crecer en el mundo online.</p>
        </div>

        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {services.map(s => (
            <div key={s.title}
              style={{ border: '1px solid #F0F0F0', borderRadius: 20, padding: 24, cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,174,239,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#00AEEF' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = '#F0F0F0' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 14 }}>{s.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1a1a1a', marginBottom: 6, marginTop: 0 }}>{s.title}</h3>
              <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              <div style={{ marginTop: 14, fontSize: 14, fontWeight: 600, color: s.color }}>Saber más →</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
