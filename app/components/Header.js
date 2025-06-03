export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-xl font-bold text-white">Traders Edge</h1>
      <nav className="hidden sm:flex gap-6 text-gray-400">
        <a href="#features" className="hover:text-white">Funktionen</a>
        <a href="https://discord.gg/deinlink" className="hover:text-white">Discord</a>
        <a href="#kontakt" className="hover:text-white">Kontakt</a>
      </nav>
    </header>
  );
}
