const links = [
  { href: '#schedule', label: 'Schedule' },
  { href: '#trainers', label: 'Trainers' },
  { href: '#pricing', label: 'Pricing' },
]

// Footer layout uses Flexbox.
export default function Footer() {
  return (
    <footer className="section-wrap mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 py-6 text-slate-500">
      <p>&copy; 2026 PulseFit Studio</p>
      <ul className="flex flex-wrap gap-4">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="transition hover:text-primary">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
