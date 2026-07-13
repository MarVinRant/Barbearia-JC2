export default function FAQ() {
  const perguntas = [
    { q: "Vocês atendem por ordem de chegada ou agendamento?", a: "Priorizamos o agendamento para garantir o seu conforto e pontualidade, mas também recebemos clientes por ordem de chegada mediante disponibilidade." },
    { q: "Quais são as formas de pagamento?", a: "Aceitamos PIX, cartões de crédito e débito, e dinheiro." },
    { q: "Qual o tempo de tolerância para atrasos?", a: "Temos uma tolerância máxima de 10 minutos para não prejudicar o cliente seguinte." }
  ];

  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
        </div>
        
        <div className="space-y-4">
          {perguntas.map((item, index) => (
            <details key={index} className="group bg-slate-800 rounded-lg border border-slate-700 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-white">
                {item.q}
                <span className="transition group-open:-rotate-180 text-amber-500">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-slate-400 mt-4 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}