import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // O CSS mágico das animações

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import PricingPlans from './components/PricingPlans';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Esse bloco liga o motor das animações assim que o site carrega
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos (1 segundo)
      once: true,     // A animação acontece só a primeira vez que você desce
      offset: 100,    // Só anima quando o elemento entra 100px na tela
    });
  }, []);

  return (
    <div className="font-sans bg-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Team />
      <PricingPlans />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      {/* Botão Flutuante */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.711.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"></path>
        </svg>
      </a>
    </div>
  );
}