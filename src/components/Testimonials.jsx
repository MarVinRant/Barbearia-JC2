export default function Testimonials() {
  const avaliacoes = [
    {
      nome: "Carlos Silva",
      texto: "Melhor barbearia da região! Atendimento impecável e profissionais altamente especializados."
    },
    {
      nome: "Roberto Mendes",
      texto: "Ambiente masculino e acolhedor. Sempre saio satisfeito com o resultado!"
    },
    {
      nome: "André Costa",
      texto: "Tradição e modernidade em um só lugar. Recomendo demais!"
    }
  ];

  return (
    <section id="depoimentos" className="bg-slate-800 py-20 px-4 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-slate-400">Avaliações de quem confia no nosso trabalho</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {avaliacoes.map((aval, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-xl border border-slate-700">
              <div className="flex text-amber-500 mb-4">
                {/* 5 Estrelinhas do Tailwind */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 italic mb-6">"{aval.texto}"</p>
              <h4 className="text-white font-bold">- {aval.nome}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}