import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5491163739477?text=Hola%2C+quiero+hacer+una+consulta+por+sucesión.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-3 border border-gold/30 rounded-full px-5 py-2 backdrop-blur-sm bg-navy/30">
          <span className="font-display text-xl font-bold tracking-wider text-accent-foreground">
            NR ABOGADOS
          </span>
          <span className="text-gold-light text-sm font-body">· Estudio Jurídico ·</span>
        </div>
        <h1 className="section-title text-accent-foreground mb-4 text-4xl md:text-6xl lg:text-7xl">
          SUCESIONES ARGENTINA
        </h1>
        <p className="text-lg md:text-xl text-gold-light/90 font-body font-light mb-10">
          Estudio de Abogados especialistas en <span className="font-semibold text-accent">SUCESIONES</span>
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary hover:bg-gold-light text-secondary-foreground font-bold font-body uppercase tracking-widest px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 text-sm md:text-base"
        >
          Realizar Consulta
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
