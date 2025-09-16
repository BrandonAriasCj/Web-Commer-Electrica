import useCartStore from '../store/cart'

export default function Checkout() {
  const { items, total, clear } = useCartStore()
  const totalAmount = total()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Pedido realizado! (demo)')
    clear()
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <h1>Checkout</h1>
        <input required placeholder="Nombre" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #e5e7eb' }} />
        <input required type="email" placeholder="Email" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #e5e7eb' }} />
        <input required placeholder="Dirección" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #e5e7eb' }} />
        <div style={{ display: 'flex', gap: 12 }}>
          <input required placeholder="Ciudad" style={{ flex: 1, padding: '10px 12px', borderRadius: 8, border: '1px solid #e5e7eb' }} />
          <input required placeholder="CP" style={{ width: 120, padding: '10px 12px', borderRadius: 8, border: '1px solid #e5e7eb' }} />
        </div>
        <button type="submit">Confirmar pedido</button>
      </form>
      <aside style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, height: 'fit-content' }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Resumen</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map(it => (
            <div key={it.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>{it.title} × {it.quantity}</div>
              <div>${(it.price * it.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
          <div>Total</div>
          <strong>${totalAmount.toFixed(2)}</strong>
        </div>
      </aside>
    </div>
  )
}


