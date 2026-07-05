import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in')
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const spotlight = document.getElementById('spotlight')
    if (!spotlight) return
    const onMove = (e: MouseEvent) => {
      spotlight.style.setProperty('--mx', e.clientX + 'px')
      spotlight.style.setProperty('--my', e.clientY + 'px')
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-eyebrow reveal">
            <span className="pulse" aria-hidden="true" />
            Available for opportunities
          </span>
          <h1 className="reveal" data-d="1">
            Hi, I'm <span className="grad">Rahul</span>
          </h1>
          <p className="role reveal" data-d="2" aria-label="UX Developer and React.js Developer">
            <span id="typed">UX Developer</span>
            <span className="caret" aria-hidden="true">|</span>
          </p>
          <p className="intro reveal" data-d="3">
            I craft fast, accessible, and pixel-precise web experiences — blending thoughtful UX design with clean, scalable React code.
          </p>
          <div className="hero-stats reveal" data-d="3">
            <div className="stat"><b>2+</b><span>Years Experience</span></div>
            <div className="stat"><b>15+</b><span>Projects Shipped</span></div>
            <div className="stat"><b>10+</b><span>Technologies</span></div>
          </div>
          <div className="btn-row reveal" data-d="4">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#" className="btn btn-ghost" download>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-visual reveal" data-d="2">
          <div className="frame">
            <div className="frame-inner">
              <img src="/assets/rahulprotfolio_.png" alt="Rahul" className="avatar-img" />
            </div>
          </div>
          <div className="badge-top">
            <span className="dot-g" aria-hidden="true" />
            React.js · UX
          </div>
          <div className="badge-float">
            <span className="num">2+</span>
            <small>Years of<br />Experience</small>
          </div>
        </div>
      </div>
    </section>
  )
}
