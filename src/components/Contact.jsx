export default function Contact() {
  return (
    <section id="contato" className="bg-slate-800 py-20 px-4 border-t border-slate-700 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Visite-nos</h2>
          <p className="text-slate-400">Estamos prontos para atendê-lo na Unidade Reimberg</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Informações Vindo da Esquerda */}
          <div data-aos="fade-right" className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 p-3 rounded-lg text-slate-900">📍</div>
              <div>
                <h4 className="text-white font-bold text-xl">Endereço</h4>
                <p className="text-slate-400">Unidade Reimberg - Grajaú, São Paulo - SP</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 p-3 rounded-lg text-slate-900">⏰</div>
              <div>
                <h4 className="text-white font-bold text-xl">Horário de Funcionamento</h4>
                <p className="text-slate-400">Terça a Quinta: 09h as 20h<br/>Sexta e Sábado: 09h as 21h</p>
              </div>
            </div>
            <button className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg transition-all text-lg">
              Chamar no WhatsApp
            </button>
          </div>

          {/* Mapa Vindo da Direita */}
          <div data-aos="fade-left" className="w-full h-80 bg-slate-700 rounded-xl border border-slate-600 flex items-center justify-center relative overflow-hidden shadow-2xl">
             <div className="text-center z-10">
                <span className="text-4xl">🗺️</span>
                <p className="text-white font-bold mt-2">Mapa da Localização</p>
                <p className="text-slate-400 text-sm">(Espaço para Google Maps)</p>
             </div>
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}