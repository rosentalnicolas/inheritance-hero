const ServicioIntegral = () => {
  return (
    /* Cambié bg-primary por bg-slate-900 (Gris oscuro premium) */
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda */}
          <div className="space-y-6">
            <h2 className="font-serif text-[#C5A059] text-2xl md:text-3xl lg:text-4xl leading-tight uppercase tracking-tight font-bold">
              ABONA LA SUCESIÓN <span className="block text-white">CON LA VENTA</span>
            </h2>
            <div className="h-1 w-20 bg-[#C5A059]/40 mb-6"></div>
            <p className="text-slate-300 font-sans leading-relaxed text-sm md:text-base">
              Habitualmente nuestros clientes necesitan hacer una sucesión para vender una propiedad y al ser un proceso muy costoso, en muchos casos dejan de hacerlo.
            </p>
            <p className="text-slate-300 font-sans leading-relaxed text-sm md:text-base">
              Te ofrecemos realizar la sucesión sin pagar ningún tipo de adelanto y pagar todo recién con la venta. Trabajamos con más de 10 inmobiliarias en Capital Federal y Buenos Aires. 
              <span className="block mt-4 text-[#C5A059] font-semibold border-l-2 border-[#C5A059] pl-4 italic">
                La tasación se encuentra completamente bonificada.
              </span>
            </p>
          </div>

          {/* Columna Derecha */}
          <div className="space-y-6">
            <h2 className="font-serif text-[#C5A059] text-2xl md:text-3xl lg:text-4xl leading-tight uppercase tracking-tight font-bold">
              SERVICIO <span className="block text-white">INTEGRAL</span>
            </h2>
            <div className="h-1 w-20 bg-[#C5A059]/40 mb-6"></div>
            <p className="text-slate-300 font-sans leading-relaxed text-sm md:text-base">
              Contamos con un amplio equipo de profesionales brindando valor agregado en las áreas 
              <strong className="text-white font-semibold"> jurídica, inmobiliaria y notarial</strong>.
            </p>
            <p className="text-slate-300 font-sans leading-relaxed text-sm md:text-base">
              También ofrecemos <strong className="text-[#C5A059]">líneas de crédito y adelantos de dinero</strong> para nuestros clientes. Nuestro objetivo es acompañarte desde el inicio de la sucesión hasta la venta.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicioIntegral;
