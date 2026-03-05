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
    description: "Durante este mes bonificamos el 100% del impuesto a la herencia.",
  },
  {
    icon: Home,
    title: "Paga con la Venta",
    description: "Aboná la sucesión recién cuando vendas la propiedad. Trabajamos con más de 10 inmobiliarias.",
  },
];

const PropuestaValor = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="section-title text-primary mb-4">
          NUESTRA <span className="gold-underline">PROPUESTA</span> DE VALOR
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-14">
          En NR Abogados le ofrecemos a nuestros clientes un servicio integral para iniciar la sucesión <strong>sin cargo</strong> y abonar todo con la <strong>venta de la propiedad</strong>.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-2xl hover:border-accent transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <card.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{card.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropuestaValor;
