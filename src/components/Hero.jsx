export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center px-4 bg-slate-900 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <span 
          data-aos="fade-down" 
          className="text-amber-500 font-bold tracking-widest uppercase mb-4"
        >
          Tradição desde 2007 • Unidade Reimberg
        </span>
        
        <h1 
          data-aos="fade-up" data-aos-delay="200" 
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
        >
          A Sua Melhor Versão no <span className="text-amber-500">Grajaú</span>
        </h1>
        
        <p 
          data-aos="fade-up" data-aos-delay="400" 
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl"
        >
          Cortes impecáveis, barboterapia relaxante e um ambiente exclusivo para homens que valorizam a própria imagem e exigem o melhor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            data-aos="zoom-in" data-aos-delay="600" 
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-amber-500/30 transition-all text-lg cursor-pointer"
          >
            Agendar meu horário
          </button>
          <button 
            data-aos="zoom-in" data-aos-delay="800" 
            className="border border-slate-600 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-lg transition-all text-lg cursor-pointer"
          >
            Ver Serviços
          </button>
        </div>
      </div>
    </section>
  );
}