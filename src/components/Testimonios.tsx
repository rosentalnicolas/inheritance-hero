import { Star } from "lucide-react";

const testimonios = [
  {
    text: "Inicie la sucesión en Febrero del 2020. En marzo la pandemia pensé que iba a complicar todo pero no, lo hicieron igual de la mejor manera. Mejor imposible!!",
    name: "Melina T.",
    year: "2025",
  },
  {
    text: "Me agarró la cuarentena cuando estaba iniciando el trámite. Aún así pude terminar con la sucesión y vender la propiedad. Muchas gracias a los doctores.",
    name: "Guillermo S.",
    year: "2024",
  },
  {
    text: "Mi caso fue complejo ya que eran varias sucesiones en conjunto. Todo salió perfecto, en tiempo y forma. Además pudimos pagar con la venta del bien.",
    name: "Martina M.",
    year: "2023",
  },
  {
    text: "Sucesión en Provincia. Todo como me dijeron y además se encargaron de la venta de la propiedad. Recomiendo si o si!",
    name: "Claudio G.",
    year: "2022",
  },
  {
    text: "Hice la sucesión para vender una propiedad. Me dejaron pagar toda con la venta y ellos además se encargaron de eso también!",
    name: "Martin M.",
    year: "2021",
  },
];

const Testimonios = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="section-title text-primary mb-14">
          CLIENTES <span className="gold-underline">SATISFECHOS</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 italic">
                «{t.text}»
              </p>
              <p className="font-display font-bold text-primary text-sm">
                {t.name} <span className="text-muted-foreground font-body font-normal">/ {t.year}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
