export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0f",
          color: "#e4e4e7",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1
            style={{
              fontSize: "6rem",
              fontWeight: 800,
              margin: "0 0 0.5rem",
              background: "linear-gradient(135deg, #4F7DF2, #8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            404
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#a1a1aa",
              margin: "0 0 2rem",
            }}
          >
            Page not found
          </p>
          <a
            href="/en"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              background: "linear-gradient(135deg, #FFD54F, #F5A623)",
              color: "#0a0a0f",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            Back to Home
          </a>
        </div>
      </body>
    </html>
  );
}

