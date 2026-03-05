import HeroSection from "@/components/HeroSection";
import TiposSucesiones from "@/components/TiposSucesiones";
import Requisitos from "@/components/Requisitos";
import Estadisticas from "@/components/Estadisticas";
import PropuestaValor from "@/components/PropuestaValor";
import ServicioIntegral from "@/components/ServicioIntegral";
import Testimonios from "@/components/Testimonios";
import FormularioContacto from "@/components/FormularioContacto";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <TiposSucesiones />
      <Requisitos />
      <Estadisticas />
      <PropuestaValor />
      <ServicioIntegral />
      <Testimonios />
      <FormularioContacto />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
