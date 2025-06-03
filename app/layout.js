export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <title>Traders Edge</title>
      </head>
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header style={{ padding: "1rem", background: "#111", color: "#fff" }}>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Start</a>
            <a href="/discord" style={{ color: "#fff", textDecoration: "none" }}>Discord</a>
            <a href="/produkte" style={{ color: "#fff", textDecoration: "none" }}>Produkte</a>
          </nav>
        </header>
        <main style={{ padding: "2rem" }}>
          {children}
        </main>
        <footer style={{ padding: "1rem", background: "#111", color: "#fff", textAlign: "center" }}>
          &copy; 2025 Traders Edge
        </footer>
      </body>
    </html>
  );
}
