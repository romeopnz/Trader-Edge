import Header from './components/Header';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Willkommen bei Traders Edge</h1>
        <p>Automatisiere deine Krypto/Forex Preisalarme mit KI</p>
        <a
          href="#"
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '1rem 2rem',
            textDecoration: 'none',
            borderRadius: '8px',
            display: 'inline-block',
            marginTop: '2rem',
          }}
        >
          Jetzt starten
        </a>
      </main>
      <Footer />
    </>
  );
}
