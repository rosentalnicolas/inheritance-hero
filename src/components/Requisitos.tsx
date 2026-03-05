import { FileCheck, Baby, Heart, CreditCard } from "lucide-react";

const docs = [
  { icon: FileCheck, text: "Certificado de defunción del causante" },
  { icon: Baby, text: "Partidas de nacimiento de los herederos" },
  { icon: Heart, text: "Acta de matrimonio (si el causante estaba casado)" },
  { icon: CreditCard, text: "Fotocopia de DNI de los herederos solicitantes" },
];

const Requisitos = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="section-title mb-12 text-accent">
          Documentación Requerida
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc, i) => (
            <div
              key={i}
             className="flex flex-col items-center gap-4 p-6 rounded-xl border border-primary-foreground/10 bg-navy-light/30 backdrop-blur-sm hover:bg-navy-light/50 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
                <doc.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="font-body text-sm leading-relaxed text-primary-foreground/90">{doc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requisitos;
