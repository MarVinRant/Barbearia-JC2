export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-center border-t border-slate-800 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white font-bold text-xl tracking-tighter">
          JC<span className="text-amber-500">II</span>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Barbearia JC II. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 text-slate-400">
          <a href="#" className="hover:text-amber-500 transition">Instagram</a>
          <a href="#" className="hover:text-amber-500 transition">Facebook</a>
        </div>
      </div>
    </footer>
  );
}