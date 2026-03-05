import { Star, MapPin } from "lucide-react";

const googleReviews = [
  {
    name: "Carlos R.",
    text: "Excelente trato y profesionalismo. Hicieron toda la sucesión en tiempo récord. Muy recomendable.",
    date: "Hace 2 meses",
  },
  {
    name: "Andrea L.",
    text: "Me asesoraron de principio a fin. Pude pagar con la venta del inmueble tal como me prometieron. 10 puntos.",
    date: "Hace 4 meses",
  },
  {
    name: "Roberto D.",
    text: "Un equipo muy serio y comprometido. Resolvieron mi caso complejo con varias propiedades sin ningún problema.",
    date: "Hace 6 meses",
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-900">
      {/* Google Maps + Reviews */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Mapa embebido */}
          <div>
            <h3 className="font-serif text-[#C5A059] text-xl md:text-2xl font-bold uppercase tracking-tight mb-4">
              Nuestra Ubicación
            </h3>
            <div className="flex items-start gap-2 text-slate-300 text-sm font-sans mb-4">
              <MapPin className="w-4 h-4 mt-0.5 text-[#C5A059] shrink-0" />
              <span>Av. Libertador 5990, Piso 8° – Capital Federal, Buenos Aires</span>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.4!2d-58.4283!3d-34.5598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d6f3deadf7%3A0x7cbb0b1e3c3b3b3b!2sAv.+del+Libertador+5990%2C+C1428ARP+CABA!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NR Abogados - Av. Libertador 5990, Piso 8°, Capital Federal"
              />
            </div>
          </div>

          {/* Reviews de Google */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5"
              />
              <h3 className="font-serif text-[#C5A059] text-xl md:text-2xl font-bold uppercase tracking-tight">
                Google Reviews
              </h3>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-serif text-3xl font-bold text-[#C5A059]">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-slate-400 text-sm font-sans ml-2">100+ reseñas</span>
            </div>

            <div className="space-y-4">
              {googleReviews.map((r, i) => (
                <div key={i} className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 font-sans text-sm leading-relaxed mb-3 italic">
                    «{r.text}»
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-sans font-bold text-white text-sm">{r.name}</span>
                    <span className="text-slate-500 text-xs font-sans">{r.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-6 text-center">
        <p className="font-serif text-lg font-bold text-[#C5A059]">NR Abogados</p>
        <p className="text-slate-500 font-sans text-sm mt-1">
          Estudio Jurídico · Especialistas en Sucesiones y Herencias
        </p>
      </div>
    </footer>
  );
};

export default Footer;
