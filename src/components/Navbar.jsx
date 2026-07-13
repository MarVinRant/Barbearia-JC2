export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo "Falsa" em texto (depois podemos trocar por uma imagem) */}
        <div className="text-white font-bold text-2xl tracking-tighter">
          JC<span className="text-amber-500">II</span>
        </div>
        
        {/* Links do Menu (Ocultos no celular, visíveis no PC) */}
        <div className="hidden md:flex gap-8 text-slate-300 font-medium">
          <a href="#servicos" className="hover:text-amber-500 transition-colors">Serviços</a>
          <a href="#galeria" className="hover:text-amber-500 transition-colors">Galeria</a>
          <a href="#contato" className="hover:text-amber-500 transition-colors">Contato</a>
        </div>
        
        {/* Botão de Ação */}
        <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-5 py-2 rounded font-bold transition-all cursor-pointer">
          Agendar
        </button>
      </div>
    </nav>
  );
}