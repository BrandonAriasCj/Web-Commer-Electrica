import { useEffect, useState } from 'react'

const messages = [
  '🚚 Envío gratis en pedidos superiores a $99',
  '🛎️ Ofertas en interruptores esta semana',
  '🕒 Soporte 24/7 por WhatsApp',
]

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{
      width: '100%',
      background: 'var(--primary)',
      color: 'var(--white)',
      textAlign: 'center',
      padding: '8px 12px',
      fontWeight: 600,
    }}>
      {messages[index]}
    </div>
  )
}


