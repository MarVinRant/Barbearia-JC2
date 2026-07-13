export default function PricingPlans() {
  const planos = [
    {
      nome: "Clube Basic", preco: "R$ 75", periodo: "/mês",
      descricao: "O essencial para manter o cabelo alinhado quinzenalmente.",
      beneficios: ["2 Cortes de cabelo", "Desconto de 10%", "Agendamento prioritário"],
      destaque: false, botao: "Assinar Basic"
    },
    {
      nome: "Clube JC Premium", preco: "R$ 140", periodo: "/mês",
      descricao: "Cabelo e barba impecáveis o mês inteiro. O melhor custo-benefício.",
      beneficios: ["Cortes livres", "Barboterapia livre", "Desconto de 20%", "1 Bebida cortesia"],
      destaque: true, botao: "Assinar Premium"
    }
  ];

  return (
    <section id="planos" className="bg-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Clube de Assinatura</h2>
          <p className="text-slate-400">Pague uma vez, fique no estilo o mês todo.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 max-w-4xl mx-auto">
          {planos.map((plano, index) => (
            <div 
              key={index} 
              data-aos="flip-left" 
              data-aos-delay={index * 200} // O plano premium vira um pouquinho depois do basic
              className={`w-full md:w-1/2 p-8 rounded-2xl border-2 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 cursor-pointer ${
                plano.destaque ? "border-amber-500 bg-slate-800 shadow-[0_0_30px_rgba(245,158,11,0.15)] relative" : "border-slate-700 bg-slate-900 hover:border-slate-500"
              }`}
            >
              {plano.destaque && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 font-bold px-4 py-1 rounded-full text-sm shadow-lg">Mais Escolhido</span>
              )}
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{plano.nome}</h3>
                <p className="text-slate-400 mb-6 h-12">{plano.descricao}</p>
                <div className="text-amber-500 font-bold mb-8">
                  <span className="text-5xl">{plano.preco}</span><span className="text-lg text-slate-400 font-normal">{plano.periodo}</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plano.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-4 rounded-lg font-bold transition-all text-lg ${plano.destaque ? "bg-amber-500 hover:bg-amber-600 text-slate-900 shadow-lg" : "bg-slate-700 hover:bg-slate-600 text-white"}`}>
                {plano.botao}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}