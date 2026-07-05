import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../common/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('.nav-links a')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((a) => {
              if (a.getAttribute('href') === '#' + entry.target.id) {
                setActive(a.getAttribute('href') || '')
              }
            })
          }
        })
      },
      { rootMargin: '-42% 0px -52% 0px' }
    )
    document.querySelectorAll('main section[id]').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-[14px] left-1/2 -translate-x-1/2 z-[100]
        w-[min(1120px,calc(100%-32px))]
        bg-glass backdrop-blur-[18px]
        border border-border rounded-[16px]
        flex items-center gap-[180px]
        px-5
        shadow-[0_8px_30px_rgba(3,6,16,.45)]
        transition-[border-color] duration-[300ms] ease-[cubic-bezier(.22,1,.36,1)]
        ${scrolled ? 'border-border-strong' : ''}`}
      style={{ paddingTop: '15px', paddingBottom: '15px' }}
      aria-label="Primary"
    >
      <a href="#hero" className="flex items-center gap-[9px] font-display font-extrabold text-[22px] tracking-[-.02em]" style={{ paddingLeft: '20px' }}>
        <span
          className="w-[9px] h-[9px] rounded-full bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_12px_rgba(91,140,255,.35)]"
          aria-hidden="true"
        />
        Rahul<span className="inline-block w-[4px] h-[4px] bg-accent ml-[2px] rounded-none" style={{ marginTop: '9px' }} />
      </a>

      <button
        className="hidden max-[760px]:block bg-none border border-border rounded-[10px] p-[8px_10px] text-text cursor-pointer"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div
        className={`flex gap-[24px]
          max-[760px]:absolute max-[760px]:top-[calc(100%+10px)] max-[760px]:left-0 max-[760px]:right-0
          max-[760px]:flex-col max-[760px]:bg-glass max-[760px]:backdrop-blur-[20px]
          max-[760px]:border max-[760px]:border-border max-[760px]:rounded-[16px]
          max-[760px]:p-3 max-[760px]:shadow-[0_18px_50px_rgba(3,6,16,.6)]
          ${menuOpen ? 'max-[760px]:flex' : 'max-[760px]:hidden'}`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-sm text-muted px-[13px] py-2 rounded-[10px] font-medium
              transition-[color,background] duration-[250ms] relative whitespace-nowrap
              hover:text-text
              ${active === link.href
                ? 'text-text bg-[rgba(91,140,255,.12)] after:content-[""] after:absolute after:left-[13px] after:right-[13px] after:bottom-1 after:h-[2px] after:rounded-[2px] after:bg-gradient-to-r after:from-accent after:to-accent-2'
                : ''}`}
          >
            {link.label}
          </a>
        ))}
      </div>

    </nav>
  )
}
