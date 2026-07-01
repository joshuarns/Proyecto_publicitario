import Container from './Container'
import logo from '../assets/img/logotipo-proyecto-horizontal1.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const socialLinks = [
  { label: 'Facebook', slug: 'f', href: 'https://www.facebook.com/proyectopublicitario' },
  { label: 'Instagram', slug: 'ig', href: 'https://www.instagram.com/proyectopublicitario' },
  { label: 'LinkedIn', slug: 'in', href: 'https://www.linkedin.com/company/proyectopublicitario' },
]

const serviceLinks = ['Páginas Web', 'Publicidad Online', 'Diseño Gráfico', 'Hospedaje Web', 'Email Profesional', 'Soporte Técnico']

export default function Footer() {
  const contentRef = useScrollAnimation({ from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 }, duration: 0.7 })

  return (
    <footer style={{ background: '#0D1117', color: '#9CA3AF', padding: '56px 0 32px' }}>
      <Container>
        <div ref={contentRef}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, marginBottom: 40 }}>
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ marginBottom: 16 }}>
                <a href="/" aria-label="Proyecto Publicitario - Inicio">
                  <img src={logo} alt="Proyecto Publicitario" width="160" height="44" style={{ height: 44, width: 'auto' }} />
                </a>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 16, maxWidth: 280 }}>
                Agencia de marketing digital comprometida con el crecimiento de tu negocio en internet.
              </p>
              <nav aria-label="Redes sociales" style={{ display: 'flex', gap: 8 }}>
                {socialLinks.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label} rel="noopener noreferrer" target="_blank"
                    style={{ width: 36, height: 36, background: '#1F2937', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#9CA3AF', textDecoration: 'none' }}>
                    {s.slug}
                  </a>
                ))}
              </nav>
            </div>

            <nav aria-label="Servicios">
              <h4 style={{ color: 'white', fontWeight: 600, marginBottom: 16, fontSize: 14, marginTop: 0 }}>Servicios</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {serviceLinks.map(s => (
                  <a key={s} href="#servicios" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: 14 }}>{s}</a>
                ))}
              </div>
            </nav>

            <div>
              <h4 style={{ color: 'white', fontWeight: 600, marginBottom: 16, fontSize: 14, marginTop: 0 }}>Contacto</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
                <a href="tel:+521234567890" style={{ color: '#9CA3AF', textDecoration: 'none' }}>📞 +52 (123) 456-7890</a>
                <a href="mailto:hola@proyectopublicitario.com" style={{ color: '#9CA3AF', textDecoration: 'none' }}>📧 hola@proyectopublicitario.com</a>
                <a href="#contacto" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #00AEEF, #8DC63F)', color: 'white', padding: '8px 18px', borderRadius: 999, fontSize: 13, fontWeight: 700, textDecoration: 'none', marginTop: 6, width: 'fit-content' }}>
                  Cotización gratis
                </a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #1F2937', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: 13 }}>
            <span>© {new Date().getFullYear()} Proyecto Publicitario. Todos los derechos reservados.</span>
            <span>Hecho con ❤️ para negocios que quieren crecer</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
