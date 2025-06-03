export default function HomePage() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      marginTop: "4rem",
    }}>
      <a 
        href="/discord"
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#5865F2", // Discord Blau
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "600",
          boxShadow: "0 4px 6px rgba(88, 101, 242, 0.4)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#4752c4"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#5865F2"}
      >
        Discord beitreten
      </a>

      <a
        href="/produkte"
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#22c55e", // Grüner Button
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "600",
          boxShadow: "0 4px 6px rgba(34, 197, 94, 0.4)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#16a34a"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#22c55e"}
      >
        Produkte ansehen
      </a>
    </div>
  );
}
