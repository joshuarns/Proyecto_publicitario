import { useState } from 'react'
import Container from './Container'
import logo from '../assets/img/logo-proyecto-publicitario.png'

const links = ['Servicios', 'Portafolio', 'Nosotros', 'Contacto']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'white', borderBottom: '1px solid #f0f0f0', boxShadow: '0 1px 12px rgba(0,0,0,0.06)' }}>
      <Container>
        <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="Proyecto Publicitario" style={{ height: 40 }} />
          </a>

          <nav style={{ display: 'flex', gap: 32 }} className="hidden md:flex">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ fontSize: 14, color: '#444', fontWeight: 500, textDecoration: 'none' }}>
                {l}
              </a>
            ))}
          </nav>

          <a href="tel:+521234567890"
            style={{ background: 'linear-gradient(135deg, #00AEEF, #8DC63F)', color: 'white', fontWeight: 700, fontSize: 14, padding: '9px 22px', borderRadius: 999, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
            className="hidden md:flex">
            📞 Llámanos
          </a>

          <button onClick={() => setOpen(!open)} style={{ fontSize: 22, background: 'none', border: 'none', cursor: 'pointer', color: '#374151' }} className="md:hidden">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </Container>

      {open && (
        <div style={{ background: 'white', borderTop: '1px solid #f0f0f0', padding: '16px 32px', display: 'flex', flexDirection: 'column', gap: 16 }} className="md:hidden">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ color: '#444', fontWeight: 500, textDecoration: 'none' }}>
              {l}
            </a>
          ))}
          <a href="tel:+521234567890"
            style={{ background: 'linear-gradient(135deg, #00AEEF, #8DC63F)', color: 'white', textAlign: 'center', fontWeight: 700, padding: '10px 20px', borderRadius: 999, textDecoration: 'none' }}>
            📞 Llámanos
          </a>
        </div>
      )}
    </header>
  )
}
