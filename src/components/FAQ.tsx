import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué es una sucesión y cuándo es necesaria?",
    a: "La sucesión es el proceso legal mediante el cual se transfieren los bienes de una persona fallecida a sus herederos. Es necesaria siempre que haya bienes registrables (inmuebles, vehículos, cuentas bancarias) a nombre del causante que deban ser transferidos.",
  },
  {
    q: "¿Cuánto tiempo demora el trámite sucesorio en Argentina?",
    a: "En nuestro estudio, logramos la declaratoria de herederos en un promedio de 3 a 4 meses. Los tiempos pueden variar según la complejidad del caso y la jurisdicción (Capital Federal o Provincia de Buenos Aires).",
  },
  {
    q: "¿Cuánto cuesta hacer una sucesión?",
    a: "En NR Abogados ofrecemos iniciar la sucesión sin ningún tipo de adelanto. Si necesitás vender una propiedad, podés abonar todo el proceso recién con la venta. Además, este mes bonificamos el 100% de los gastos e impuestos del proceso.",
  },
  {
    q: "¿Qué documentación necesito para iniciar la sucesión?",
    a: "Los documentos básicos son: certificado de defunción del causante, partidas de nacimiento de los herederos, acta de matrimonio (si corresponde) y fotocopia de DNI de los herederos. Nuestro equipo te guía para reunir toda la documentación.",
  },
  {
    q: "¿Puedo hacer la sucesión si no tengo todos los documentos?",
    a: "Sí. Nuestro equipo se encarga de gestionar la obtención de partidas y certificados faltantes. Iniciamos el proceso con lo que tengas disponible y vamos completando la documentación en paralelo.",
  },
  {
    q: "¿Qué diferencia hay entre sucesión ab-intestato y testamentaria?",
    a: "La sucesión ab-intestato se realiza cuando el fallecido no dejó testamento (es la más común en Argentina). La testamentaria se inicia cuando existe un testamento válido que asigna los bienes. En ambos casos, nuestro estudio cuenta con amplia experiencia.",
  },
  {
    q: "¿Pueden encargarse también de la venta de la propiedad?",
    a: "Sí. Ofrecemos un servicio integral que incluye la sucesión, la tasación (bonificada) y la venta del inmueble. Trabajamos con más de 10 inmobiliarias en Capital Federal y Buenos Aires para obtener el mejor precio.",
  },
  {
    q: "¿Atienden sucesiones en Provincia de Buenos Aires?",
    a: "Sí, atendemos sucesiones tanto en Capital Federal como en Provincia de Buenos Aires. Nuestro equipo tiene experiencia en ambas jurisdicciones y conoce las particularidades de cada una.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-800 text-center mb-4 uppercase tracking-tight font-bold">
          PREGUNTAS <span className="text-[#C5A059]">FRECUENTES</span>
        </h2>
        <p className="text-slate-500 font-sans text-center mb-12 text-sm md:text-base">
          Resolvemos las dudas más comunes sobre sucesiones y herencias en Argentina.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white border border-slate-200 rounded-xl px-6 data-[state=open]:border-[#C5A059]/40 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="font-sans font-semibold text-slate-800 text-sm md:text-base text-left hover:text-[#C5A059] hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 font-sans text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
