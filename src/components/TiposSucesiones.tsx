import { FileText, ScrollText } from "lucide-react";

const tipos = [
  {
    icon: FileText,
    title: "Ab-Intestato",
    description: "Son aquellas sucesiones en las que NO se ha dejado testamento. Son las más comunes.",
  },
  {
    icon: ScrollText,
    title: "Testamentarias",
    description: "Son las sucesiones en las que el causante (la persona fallecida) dejó un testamento asignando los bienes a los herederos.",
  },
];

const TiposSucesiones = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="section-title text-primary mb-4">
          <span className="gold-underline">TIPOS DE HERENCIAS</span> EN ARGENTINA
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {tipos.map((tipo) => (
            <div
              key={tipo.title}
              className="group bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <tipo.icon className="w-7 h-7 text-primary group-hover:text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">{tipo.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{tipo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiposSucesiones;
