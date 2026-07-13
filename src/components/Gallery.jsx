export default function Gallery() {
  const fotos = [
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" // <- Link novo e atualizado aqui!
  ];

  return (
    <section id="galeria" className="bg-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-right" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nosso Trabalho</h2>
          <p className="text-slate-400">Ambiente exclusivo e cortes de alto nível</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {fotos.map((foto, index) => (
            <div 
              key={index} 
              data-aos="zoom-in" 
              data-aos-delay={index * 150}
              data-aos-duration="1000"
              className="overflow-hidden rounded-lg group"
            >
              <img 
                src={foto} 
                alt={`Trabalho Barbearia ${index + 1}`} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}