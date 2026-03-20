import { useState } from "react";
import { toast } from "sonner";

const WHATSAPP_URL = "https://wa.me/5491163739477?text=Quiero+consultar+por+una+sucesi%C3%B3n";

const FormularioContacto = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [enviando, setEnviando] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = "El nombre es obligatorio";
    if (!form.telefono.trim()) e.telefono = "El teléfono es obligatorio";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email inválido";
    if (!form.mensaje.trim()) e.mensaje = "Contanos tu caso";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setEnviando(true);

    try {
      const response = await fetch("https://formspree.io/f/xlgprlep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success("¡Consulta enviada! Nos pondremos en contacto a la brevedad.");
        setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
        setErrors({});
      } else {
        toast.error("Hubo un error al enviar. Por favor, intente por WhatsApp.");
      }
    } catch (error) {
      toast.error("Error de conexión. Intente por WhatsApp.");
    } finally {
      setEnviando(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border font-sans text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition ${
      errors[field] ? "border-red-500" : "border-slate-300"
    }`;

  return (
    <section id="contacto" className="py-20 bg-slate-50"> {/* Fondo gris suave */}
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2 uppercase tracking-tight">
          REALIZAR <span className="text-[#C5A059] border-b-2 border-[#C5A059]">CONSULTA</span>
        </h2>
        <p className="text-slate-600 font-sans mb-10 mt-4 text-sm md:text-base">
          Complete el formulario y un abogado se comunicará con vos dentro de las 24hs.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-left bg-white p-6 md:p-10 rounded-xl shadow-sm border border-slate-100">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1 tracking-wider">Nombre y Apellido</label>
            <input
              name="nombre"
              className={inputClass("nombre")}
              placeholder="Ej: Juan Pérez"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />
            {errors.nombre && <p className="text-red-500 text-xs mt-1 font-sans">{errors.nombre}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1 tracking-wider">Teléfono</label>
              <input
                name="telefono"
                className={inputClass("telefono")}
                placeholder="Ej: 11 1234 5678"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              />
              {errors.telefono && <p className="text-red-500 text-xs mt-1 font-sans">{errors.telefono}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1 tracking-wider">E-mail</label>
              <input
                name="email"
                className={inputClass("email")}
                placeholder="tu@email.com"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-sans">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1 tracking-wider">Detalle del caso</label>
            <textarea
              name="mensaje"
              className={inputClass("mensaje") + " min-h-[120px] resize-none"}
              placeholder="Por favor, descríbanos brevemente su situación..."
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            />
            {errors.mensaje && <p className="text-red-500 text-xs mt-1 font-sans">{errors.mensaje}</p>}
          </div>
          
          <button
            type="submit"
            disabled={enviando}
            className="w-full bg-[#C5A059] hover:bg-[#b08d4a] text-white font-bold font-sans uppercase tracking-widest py-4 rounded-lg transition-all duration-300 text-sm shadow-md disabled:opacity-50"
          >
            {enviando ? "Enviando..." : "Solicitar Asesoramiento Profesional"}
          </button>
        </form>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 text-green-600 font-sans font-bold text-sm hover:text-green-700 transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          CONSULTA INMEDIATA POR WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default FormularioContacto;
