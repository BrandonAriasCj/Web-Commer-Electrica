export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: 'white', marginTop: 24 }}>
      <div className="container" style={{ padding: '24px 16px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontWeight: 800, marginBottom: 8 }}>Walter Electronics</div>
          <div style={{ color: '#cbd5e1' }}>Tu tienda de electrónica en línea</div>
        </div>
        <div style={{ color: '#cbd5e1' }}>© {new Date().getFullYear()} Todos los derechos reservados</div>
      </div>
    </footer>
  )
}


