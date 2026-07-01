import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Container from './Container'

const stats = [
  { val: '30+', label: 'Sitios web entregados' },
  { val: '80+', label: 'Campañas activas' },
  { val: '98%', label: 'Clientes satisfechos' },
  { val: '5★', label: 'Calificación promedio' },
]

export default function Hero() {
  const badgeRef = useRef(null)
  const h1Ref = useRef(null)
  const subRef = useRef(null)
  const ctasRef = useRef(null)
  const socialRef = useRef(null)
  const mockupRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Columna izquierda — cascada de abajo hacia arriba
    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6 })
    .fromTo(h1Ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
    .fromTo(subRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
    .fromTo(ctasRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
    .fromTo(socialRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')

    // Columna derecha — entra desde la derecha
    .fromTo(mockupRef.current,
      { opacity: 0, x: 60, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power2.out' }, '-=0.8')

    // Tarjetas flotantes — pop con rebote
    .fromTo(card1Ref.current,
      { opacity: 0, scale: 0.7, y: -10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.8)' }, '-=0.4')
    .fromTo(card2Ref.current,
      { opacity: 0, scale: 0.7, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.8)' }, '-=0.3')

    // Stats — fade in staggered
    .fromTo(statsRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.2')

    // Floating animation en el mockup (loop suave)
    gsap.to(mockupRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.2,
    })

    // Floating en tarjeta 1
    gsap.to(card1Ref.current, {
      y: -6,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.5,
    })

    // Floating en tarjeta 2
    gsap.to(card2Ref.current, {
      y: 6,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.8,
    })
  }, [])

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: '#0D1117', paddingTop: 64 }}>

      {/* Fondo */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,174,239,0.18) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(141,198,63,0.14) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: '30%', right: '8%', width: 2, height: 180, background: 'linear-gradient(180deg, transparent, #00AEEF, transparent)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: '20%', right: '12%', width: 2, height: 120, background: 'linear-gradient(180deg, transparent, #8DC63F, transparent)', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', padding: '60px 0' }}>

          {/* === COLUMNA IZQUIERDA === */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div ref={badgeRef} style={{ opacity: 0, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,174,239,0.1)', border: '1px solid rgba(0,174,239,0.25)', borderRadius: 999, padding: '6px 16px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00AEEF', display: 'inline-block', boxShadow: '0 0 8px #00AEEF' }} />
              <span style={{ color: '#00AEEF', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Agencia de Marketing Digital</span>
            </div>

            <h1 ref={h1Ref} style={{ opacity: 0, fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, lineHeight: 1.05, color: 'white', margin: '0 0 24px', letterSpacing: '-1px' }}>
              Tu negocio merece{' '}<br />
              <span style={{ background: 'linear-gradient(90deg, #00AEEF, #8DC63F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                destacar en línea.
              </span>
            </h1>

            <p ref={subRef} style={{ opacity: 0, fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 40, maxWidth: 460 }}>
              Diseñamos páginas web, gestionamos publicidad y construimos marcas que generan resultados reales — no solo likes.
            </p>

            <div ref={ctasRef} style={{ opacity: 0, display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, #00AEEF, #8DC63F)', color: 'white', fontWeight: 700, fontSize: 15, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,174,239,0.4)' }}>
                Quiero mi cotización gratis <span style={{ fontSize: 18 }}>→</span>
              </a>
              <a href="#portafolio" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 12, textDecoration: 'none' }}>
                Ver proyectos
              </a>
            </div>

            <div ref={socialRef} style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ display: 'flex' }}>
                {['👨‍💼','👩‍💻','🧑‍🎨','👩‍🔧','👨‍🏫'].map((e, i) => (
                  <div key={i} style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(0,174,239,0.15)', border: '2px solid #0D1117', marginLeft: i > 0 ? -10 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>{e}</div>
                ))}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                Más de <strong style={{ color: 'white' }}>50 empresas</strong> ya<br />confían en nosotros
              </div>
            </div>
          </div>

          {/* === COLUMNA DERECHA === */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div ref={mockupRef} style={{ opacity: 0, background: '#161B22', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)' }}>
              <div style={{ background: '#0D1117', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 6, padding: '4px 10px', fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                  tuempresa.com
                </div>
              </div>
              <div style={{ padding: '24px 20px' }}>
                <div style={{ background: 'linear-gradient(135deg, #00AEEF22, #8DC63F22)', borderRadius: 12, padding: '20px 18px', marginBottom: 16, border: '1px solid rgba(0,174,239,0.15)' }}>
                  <div style={{ width: '55%', height: 10, borderRadius: 6, background: 'rgba(255,255,255,0.15)', marginBottom: 8 }} />
                  <div style={{ width: '80%', height: 7, borderRadius: 6, background: 'rgba(255,255,255,0.08)', marginBottom: 6 }} />
                  <div style={{ width: '65%', height: 7, borderRadius: 6, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                  <div style={{ display: 'inline-block', background: 'linear-gradient(135deg,#00AEEF,#8DC63F)', borderRadius: 8, padding: '7px 16px' }}>
                    <div style={{ width: 60, height: 7, borderRadius: 4, background: 'rgba(255,255,255,0.6)' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 16 }}>
                  {[['🌐','Web'],['📢','Ads'],['🎨','Diseño']].map(([icon, label]) => (
                    <div key={label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '10px 8px', textAlign: 'center' }}>
                      <div style={{ fontSize: 16, marginBottom: 4 }}>{icon}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '10px 12px', display: 'flex', justifyContent: 'space-between' }}>
                  {['Visitas','Leads','Ventas'].map((l, i) => (
                    <div key={l} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: i === 0 ? '#00AEEF' : i === 1 ? '#8DC63F' : 'white' }}>
                        {['2.4k','38','12'][i]}
                      </div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tarjeta flotante — leads */}
            <div ref={card2Ref} style={{ opacity: 0, position: 'absolute', bottom: -20, left: -24, background: 'white', borderRadius: 14, padding: '12px 16px', boxShadow: '0 16px 40px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: 10, minWidth: 200 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#00AEEF,#8DC63F)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>📈</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#111', lineHeight: 1.3 }}>+240% en leads</div>
                <div style={{ fontSize: 11, color: '#6B7280' }}>vs mes anterior</div>
              </div>
            </div>

            {/* Tarjeta flotante — review */}
            <div ref={card1Ref} style={{ opacity: 0, position: 'absolute', top: -16, right: -20, background: 'white', borderRadius: 14, padding: '10px 14px', boxShadow: '0 16px 40px rgba(0,0,0,0.25)' }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                {[...Array(5)].map((_,i) => <span key={i} style={{ color: '#8DC63F', fontSize: 12 }}>★</span>)}
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#111' }}>Excelente trabajo 🙌</div>
              <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 1 }}>— Cliente verificado</div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div ref={statsRef} style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 32, paddingBottom: 40, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative', zIndex: 1 }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ textAlign: 'center', position: 'relative' }}>
              {i > 0 && <div style={{ position: 'absolute', left: 0, top: '20%', height: '60%', width: 1, background: 'rgba(255,255,255,0.07)' }} />}
              <div style={{ fontSize: 36, fontWeight: 900, background: 'linear-gradient(135deg, #00AEEF, #8DC63F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 4 }}>{s.val}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
