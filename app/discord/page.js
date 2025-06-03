export default function DiscordPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>Unser Discord</h1>
      <p>Trete unserer Community bei:</p>
      <a 
        href="https://discord.gg/b5Ry3z2pTt"
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "1rem 2rem",
          backgroundColor: "#5865F2",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "600",
          textDecoration: "none",
          boxShadow: "0 4px 6px rgba(88, 101, 242, 0.4)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#4752c4"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#5865F2"}
      >
        Zum Discord Server
      </a>
    </div>
  );
}
