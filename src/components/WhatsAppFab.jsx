const phone = '6012345678' // Reemplaza con tu número con código de país
const message = encodeURIComponent('¡Hola! Me interesa un producto de la tienda.')

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      style={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        width: 56,
        height: 56,
        borderRadius: 28,
        background: 'var(--primary)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(13,110,253,0.4)',
        textDecoration: 'none',
        fontSize: 24,
        fontWeight: 800,
      }}
    >
      ⟟
    </a>
  )
}


