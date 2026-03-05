{stats.map((stat, index) => (
  <div key={index} className="flex flex-col items-center p-4">
    <div className="text-4xl font-bold text-primary mb-2">
      {/* Reemplazamos la animación por texto directo */}
      <span>{stat.value}</span>
      <span>{stat.suffix}</span>
    </div>
    <p className="text-sm text-muted-foreground text-center">
      {stat.label}
    </p>
  </div>
))}

const stats = [
  { value: 10, suffix: "+", label: "Años de Experiencia" },
  { value: 4, suffix: "", label: "Meses para la Declaratoria" },
  { value: 400, suffix: "+", label: "Sucesiones Exitosas" },
  { value: 100, suffix: "%", label: "Clientes con Declaratoria" },
  { value: 10, suffix: "+", label: "Inmobiliarias Asociadas" },
];

const Estadisticas = () => {
  const { count: c0, ref } = useCountUp(stats[0].value);
  const { count: c1 } = useCountUp(stats[1].value);
  const { count: c2 } = useCountUp(stats[2].value);
  const { count: c3 } = useCountUp(stats[3].value);
  const { count: c4 } = useCountUp(stats[4].value);
  const counts = [c0, c1, c2, c3, c4];

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="section-title text-primary mb-4">
          Estudio <span className="gold-underline">Líder</span> en Sucesiones
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-14">
          Con más de 10 años de experiencia, somos especialistas en procesos sucesorios en Capital Federal y Provincia de Buenos Aires.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="p-4">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                {counts[i]}{stat.suffix}
              </div>
              <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
