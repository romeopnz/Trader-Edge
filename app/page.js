import Header from "./components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          🚀 Echtzeit-Krypto & Forex Signale per Discord
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8">
          Erhalte verlässliche Preisalarme und Markt-Updates direkt auf deinen Server – automatisch, kostenlos und in Sekunden.
        </p>
        <a
          href="https://discord.gg/deinlink"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          🔔 Discord Bot jetzt hinzufügen
        </a>
      </section>

      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          ✅ Warum Traders Edge?
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">⚡ Sofortige Preisalarme</h3>
            <p className="text-gray-400">
              Reagiere schneller auf Marktbewegungen mit sekundenschnellen Push-Nachrichten.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">📈 Krypto & Forex</h3>
            <p className="text-gray-400">
              Unterstützt viele Assets – egal ob Bitcoin oder EUR/USD.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">🛠️ Kein Setup nötig</h3>
            <p className="text-gray-400">
              Der Bot ist sofort einsatzbereit. Einfach einladen – fertig.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">💸 100% Kostenlos</h3>
            <p className="text-gray-400">
              Alle Funktionen gratis – keine versteckten Kosten oder Abo-Fallen.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-600 text-sm">
        © 2025 Traders Edge. Kein Finanzrat. Impressum & Datenschutz folgen.
      </footer>
    </main>
  );
}
