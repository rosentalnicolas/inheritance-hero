import { FileCheck, Baby, Heart, CreditCard } from "lucide-react";

const docs = [
  { icon: FileCheck, text: "Certificado de defunción del causante" },
  { icon: Baby, text: "Partidas de nacimiento de los herederos" },
  { icon: Heart, text: "Acta de matrimonio (si el causante estaba casado)" },
  { icon: CreditCard, text: "Fotocopia de DNI de los herederos solicitantes" },
];

const Requisitos = () => {
  return (
    /* Cambiado bg-primary por bg-slate-100 (gris claro) y texto a slate-900 */
    <section className="section-padding bg-slate-100 text-slate-900">
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Título en Serif para estilo legal y color dorado (#C5A059) */}
        <h2 className="font-serif text-3xl md:text-4xl mb-12 uppercase tracking-tight text-slate-800">
          Documentación <span className="text-[#C5A059]">Requerida</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc, i) => (
            <div
              key={i}
              /* Tarjetas blancas con borde sutil que resaltan sobre el fondo gris */
              className="flex flex-col items-center gap-4 p-8 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#C5A059]/50 transition-all duration-300 group"
            >
              {/* Círculo del icono en dorado suave */}
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors">
                <doc.icon className="w-7 h-7 text-[#C5A059]" />
              </div>
              
              {/* Texto en gris oscuro profesional */}
              <p className="font-sans text-sm font-medium leading-relaxed text-slate-600">
                {doc.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requisitos;
