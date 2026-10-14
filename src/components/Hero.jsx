// Hero section. The single <h1> of the whole page lives here.
// Responsive text sizing is mobile-first: base → sm: → md: → lg:.
export default function Hero() {
  return (
    <section
      className="flex min-h-[70vh] items-center bg-ink bg-cover bg-center px-4 py-12 text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(26,26,46,.55), rgba(26,26,46,.75)), url(/hero.svg)',
      }}
    >
      <div className="section-wrap max-w-2xl">
        <h1 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          Train with Purpose at PulseFit Studio
        </h1>
        <p className="mt-4 text-base text-slate-200 sm:text-lg">
          Small-group classes, certified trainers, and membership plans that fit your life.
          Your first session is on us.
        </p>
        <a href="#pricing" className="btn mt-6">
          See membership plans
        </a>
      </div>
    </section>
  )
}
