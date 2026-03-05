// Puedes cambiar esta URL por la foto que más te guste
const heroBg = "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop";

const WHATSAPP_URL = "https://wa.me/5491163739477?text=Hola%2C+quiero+hacer+una+consulta+por+sucesión.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* CAPA GRIS OSCURO (Sustituye al Navy) */}
      <div className="absolute inset-0 bg-slate-950/80" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* PÍLDORA SUPERIOR GRIS/DORADO */}
        <div className="mb-8 inline-flex items-center gap-3 border border-[#C5A059]/30 rounded-full px-6 py-2 backdrop-blur-md bg-slate-900/50">
          <span className="font-sans text-xl font-bold tracking-[0.2em] text-white">
            NR ABOGADOS
          </span>
          <span className="text-[#C5A059] text-sm font-sans font-medium uppercase tracking-widest">
            · Estudio Jurídico ·
          </span>
        </div>
        
        {/* TÍTULO PRINCIPAL */}
        <h1 className="font-serif text-white mb-6 text-5xl md:text-7xl lg:text-8xl leading-tight">
          SUCESIONES <span className="block md:inline">ARGENTINA</span>
        </h1>
        
        {/* SUBTÍTULO */}
        <p className="text-lg md:text-2xl text-slate-300 font-sans font-light mb-12 tracking-wide">
          Especialistas en procesos sucesorios con <span className="text-[#C5A059] font-semibold underline decoration-1 underline-offset-8">atención personalizada</span>
        </p>
        
        {/* BOTÓN DE ACCIÓN (DORADO) */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C5A059] hover:bg-[#b08d4a] text-white font-bold font-sans uppercase tracking-[0.2em] px-12 py-5 rounded-lg transition-all duration-300 shadow-2xl hover:scale-105 text-sm md:text-base"
        >
          Iniciar Consulta Profesional
        </a>
      </div>

      {/* FLECHA DE SCROLL */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
