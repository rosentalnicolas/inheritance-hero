import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5491163739477?text=Hola%2C+quiero+hacer+una+consulta+por+sucesión.";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tipos", href: "#tipos" },
  { label: "Requisitos", href: "#requisitos" },
  { label: "Estadísticas", href: "#estadisticas" },
  { label: "Propuesta", href: "#propuesta" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleClick("#inicio"); }}
          className="font-serif text-[#C5A059] text-lg font-bold tracking-wide"
        >
          NR ABOGADOS
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
              className="text-white/70 hover:text-[#C5A059] font-sans text-xs uppercase tracking-widest transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C5A059] hover:bg-[#b08d4a] text-white font-bold font-sans text-xs uppercase tracking-wider px-5 py-2 rounded-lg transition-all"
          >
            Consultar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
              className="block text-white/80 hover:text-[#C5A059] font-sans text-sm uppercase tracking-wider py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#C5A059] text-white font-bold font-sans text-sm uppercase tracking-wider px-5 py-3 rounded-lg mt-2"
          >
            Consultar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
