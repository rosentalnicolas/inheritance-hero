import { Star, MapPin, ExternalLink } from "lucide-react";

const MAPS_URL = "https://maps.app.goo.gl/C516cbm7Ph39PFMv5";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Google Maps + Reviews */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Mapa embebido */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167!2d-58.3816!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb18e123b5a7%3A0x6e0c2e74e7b3f3a0!2sNR%20Abogados%20-%20Sucesiones!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación NR Abogados"
            />
          </div>

          {/* Info y Reviews */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-[#C5A059] text-xl md:text-2xl font-bold uppercase tracking-tight mb-2">
                Visitanos
              </h3>
              <div className="flex items-start gap-2 text-slate-300 text-sm font-sans">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C5A059] shrink-0" />
                <span>Capital Federal, Buenos Aires, Argentina</span>
              </div>
            </div>

            {/* Reviews de Google */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-6 h-6"
                />
                <span className="font-sans font-bold text-white text-sm">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif text-3xl font-bold text-[#C5A059]">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-400 text-sm font-sans mb-4">
                Más de <strong className="text-white">100+ reseñas positivas</strong> de clientes satisfechos
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C5A059] font-sans font-semibold text-sm hover:underline"
              >
                Ver todas las reseñas <ExternalLink className="w-4 h-4" />
              </a>
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
