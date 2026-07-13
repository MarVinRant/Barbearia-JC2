
// Aqui fica a nossa "base de dados" de serviços. Super fácil de editar depois!
const servicos = [
  { nome: 'Corte Premium', preco: 'R$ 45', desc: 'Design perfeito para o seu rosto com precisão.' },
  { nome: 'Barba e Bigode', preco: 'R$ 35', desc: 'Modelagem completa, toalha quente e navalha.' },
  { nome: 'Hidratação Capilar', preco: 'R$ 50', desc: 'Tratamento profundo para revitalizar os fios.' },
  { nome: 'Coloração', preco: 'R$ 80', desc: 'Coloração profissional com produtos de qualidade.' },
];

export default function Services() {
  // ... (a lista de serviços continua igual aqui em cima)

  return (
    <section id="servicos" className="bg-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* TÍTULO - Animação vindo de baixo */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nossos Serviços</h2>
          <p className="text-slate-400">Serviços premium para homens modernos</p>
        </div>
        
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((servico, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100} // Faz um card aparecer depois do outro! (Efeito cascata)
              className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-amber-500 transition-all group flex flex-col justify-between cursor-pointer shadow-lg hover:-translate-y-1"
            >
              {/* O conteúdo do card continua igual */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{servico.nome}</h3>
                <p className="text-slate-400 text-sm mb-6">{servico.desc}</p>
              </div>
              <div className="text-2xl font-bold text-amber-500 bg-slate-800/50 p-3 rounded-lg text-center">
                {servico.preco}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}