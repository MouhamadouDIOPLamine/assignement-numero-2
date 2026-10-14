const links = [
  { href: '#schedule', label: 'Schedule' },
  { href: '#trainers', label: 'Trainers' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

// Sticky header + nav. Layout uses Flexbox (flex utilities).
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="section-wrap flex flex-wrap items-center justify-between gap-3 py-3"
      >
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold text-ink">
          <img src="/favicon.svg" alt="" width="32" height="32" />
          PulseFit
        </a>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="border-b-2 border-transparent py-1 font-semibold text-slate-500 transition hover:border-primary hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
