import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      from = { opacity: 0, y: 50 },
      to = { opacity: 1, y: 0 },
      duration = 0.7,
      ease = 'power3.out',
      stagger = 0,
      triggerOffset = '80%',
    } = options

    const targets = stagger ? el.children : el

    gsap.fromTo(targets, from, {
      ...to,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger: el,
        start: `top ${triggerOffset}`,
        once: true,
      },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return ref
}
