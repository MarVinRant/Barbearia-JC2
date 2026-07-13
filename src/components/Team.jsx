export default function Team() {
  const equipe = [
    {
      nome: "Neto Santos",
      especialidade: "Especialista em Fade e Barboterapia",
      foto: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      nome: "João Costa",
      especialidade: "Cortes Clássicos e Tesoura",
      foto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="equipe" className="bg-slate-800 py-20 px-4 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Os Mestres da Lâmina</h2>
          <p className="text-slate-400">Profissionais experientes prontos para alinhar o seu estilo</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10">
          {equipe.map((membro, index) => (
            <div key={index} className="text-center group w-72">
              <div className="overflow-hidden rounded-full border-4 border-slate-700 group-hover:border-amber-500 transition-colors mb-6 mx-auto w-48 h-48">
                <img 
                  src={membro.foto} 
                  alt={membro.nome} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{membro.nome}</h3>
              <p className="text-amber-500 font-medium">{membro.especialidade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}