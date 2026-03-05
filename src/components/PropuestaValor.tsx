import { DollarSign, Home, Percent } from "lucide-react";

const cards = [
  {
    icon: DollarSign,
    title: "Inicia sin cargo",
    description: "Comenzá tu sucesión sin pagar ningún adelanto. Nosotros nos encargamos de todo desde el primer día.",
  },
  {
    icon: Percent,
    title: "100% Bonificación",
    description: "Durante este mes bonificamos el 100% los gastos e impuestos del proceso.",
  },
  {
    icon: Home,
    title: "Paga con la Venta",
    description: "Aboná la sucesión recién cuando vendas la propiedad. Trabajamos con más de 10 inmobiliarias.",
  },
];

const PropuestaValor = () => {
  return (
    /* bg-white para máxima claridad */
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mb-4 uppercase tracking-tight">
          NUESTRA <span className="text-[#C5A059]">PROPUESTA</span> DE VALOR
        </h2>
        <p className="text-slate-500 font-sans max-w-2xl mx-auto mb-14 text-sm md:text-base leading-relaxed">
          En NR Abogados le ofrecemos a nuestros clientes un servicio integral para iniciar la sucesión <span className="text-slate-700 font-semibold underline decoration-[#C5A059]/30">sin cargo</span> y abonar todo con la <span className="text-slate-700 font-semibold underline decoration-[#C5A059]/30">venta de la propiedad</span>.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              /* Fondo gris ultra claro (slate-50) que apenas se despega del fondo blanco */
              className="group relative bg-slate-50/50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white hover:border-[#C5A059]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative z-10">
                {/* Icono en dorado sobre círculo blanco */}
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 border border-slate-50">
                  <card.icon className="w-7 h-7 text-[#C5A059]" />
                </div>
                
                <h3 className="font-serif text-lg font-bold text-slate-800 mb-3 uppercase tracking-wide">
                  {card.title}
                </h3>
                
                <p className="text-slate-500 font-sans text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropuestaValor;
