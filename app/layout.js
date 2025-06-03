export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Traders Edge</title>
      </head>
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
