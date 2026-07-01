import Container from './Container'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const leftRef = useScrollAnimation({ from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 }, duration: 0.8 })
  const rightRef = useScrollAnimation({ from: { opacity: 0, x: 50 }, to: { opacity: 1, x: 0 }, duration: 0.8 })

  return (
    <section id="contacto" aria-label="Contacto" style={{ background: '#F9FAFB', padding: '80px 0' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'start' }}>
          <div ref={leftRef}>
            <span style={{ color: '#00AEEF', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contacto</span>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a1a', margin: '8px 0 12px', lineHeight: 1.2 }}>¿Listo para crecer?{' '}<br />Hablemos.</h2>
            <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: 28, fontSize: 16 }}>
              Cuéntanos tu proyecto y en menos de 24 horas te enviamos una propuesta sin compromiso.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { href: 'tel:+521234567890', icon: '📞', bg: '#E0F5FF', label: 'Llámanos directamente', value: '+52 (123) 456-7890' },
                { href: 'https://wa.me/521234567890', icon: '💬', bg: '#EEF9E0', label: 'WhatsApp', value: 'Escríbenos ahora' },
                { href: 'mailto:hola@proyectopublicitario.com', icon: '📧', bg: '#E0F5FF', label: 'Email', value: 'hola@proyectopublicitario.com' },
              ].map(c => (
                <a key={c.label} href={c.href} aria-label={`${c.label}: ${c.value}`} style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'white', border: '1px solid #F0F0F0', borderRadius: 16, padding: 16, textDecoration: 'none' }}>
                  <div style={{ width: 48, height: 48, background: c.bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }} aria-hidden="true">{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: '#6B7280' }}>{c.label}</div>
                    <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: 15 }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form ref={rightRef} aria-label="Formulario de cotización" style={{ background: 'white', borderRadius: 20, border: '1px solid #F0F0F0', padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px' }}>Solicita tu cotización gratis</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[{ l: 'Nombre', p: 'Tu nombre', id: 'nombre' }, { l: 'Empresa', p: 'Tu empresa', id: 'empresa' }].map(f => (
                <div key={f.l}>
                  <label htmlFor={f.id} style={{ fontSize: 13, color: '#4B5563', fontWeight: 500, display: 'block', marginBottom: 6 }}>{f.l}</label>
                  <input id={f.id} type="text" name={f.id} placeholder={f.p} autoComplete={f.id === 'nombre' ? 'name' : 'organization'} style={{ width: '100%', border: '1px solid #E5E7EB', borderRadius: 12, padding: '10px 14px', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="email" style={{ fontSize: 13, color: '#4B5563', fontWeight: 500, display: 'block', marginBottom: 6 }}>Correo electrónico</label>
              <input id="email" type="email" name="email" placeholder="correo@empresa.com" autoComplete="email" style={{ width: '100%', border: '1px solid #E5E7EB', borderRadius: 12, padding: '10px 14px', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label htmlFor="servicio" style={{ fontSize: 13, color: '#4B5563', fontWeight: 500, display: 'block', marginBottom: 6 }}>Servicio de interés</label>
              <select id="servicio" name="servicio" style={{ width: '100%', border: '1px solid #E5E7EB', borderRadius: 12, padding: '10px 14px', fontSize: 14, outline: 'none', color: '#6B7280', boxSizing: 'border-box' }}>
                <option value="">Selecciona un servicio</option>
                {['Página Web', 'Publicidad Online', 'Diseño Gráfico', 'Hospedaje / Dominio', 'Email Profesional', 'Paquete completo'].map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="mensaje" style={{ fontSize: 13, color: '#4B5563', fontWeight: 500, display: 'block', marginBottom: 6 }}>Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={3} placeholder="Cuéntanos sobre tu proyecto..." style={{ width: '100%', border: '1px solid #E5E7EB', borderRadius: 12, padding: '10px 14px', fontSize: 14, outline: 'none', resize: 'none', boxSizing: 'border-box' }} />
            </div>
            <button type="submit" style={{ background: 'linear-gradient(135deg, #00AEEF, #8DC63F)', color: 'white', fontWeight: 700, padding: '14px', borderRadius: 12, border: 'none', fontSize: 15, cursor: 'pointer' }}>
              Enviar solicitud →
            </button>
            <p style={{ fontSize: 12, textAlign: 'center', color: '#9CA3AF', margin: 0 }}>Respondemos en menos de 24 horas. Sin spam.</p>
          </form>
        </div>
      </Container>
    </section>
  )
}
