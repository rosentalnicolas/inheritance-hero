import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TiposSucesiones from "@/components/TiposSucesiones";
import Requisitos from "@/components/Requisitos";
import Estadisticas from "@/components/Estadisticas";
import PropuestaValor from "@/components/PropuestaValor";
import ServicioIntegral from "@/components/ServicioIntegral";
import Testimonios from "@/components/Testimonios";
import FAQ from "@/components/FAQ";
import FormularioContacto from "@/components/FormularioContacto";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <div id="inicio"><HeroSection /></div>
      <div id="tipos"><TiposSucesiones /></div>
      <div id="requisitos"><Requisitos /></div>
      <div id="estadisticas"><Estadisticas /></div>
      <div id="propuesta"><PropuestaValor /></div>
      <ServicioIntegral />
      <div id="testimonios"><Testimonios /></div>
      <FAQ />
      <FormularioContacto />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
