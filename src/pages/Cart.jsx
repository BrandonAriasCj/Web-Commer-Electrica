import { Link } from 'react-router-dom'
import useCartStore from '../store/cart'

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCartStore()
  const totalAmount = total()

  if (items.length === 0) {
    return (
      <div>
        <h1>Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link to="/products">Ir a productos</Link>
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
      <div>
        <h1>Carrito</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((it) => (
            <div key={it.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 12, alignItems: 'center', background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 12 }}>
              <img src={it.image} alt={it.title} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
              <div>
                <div style={{ fontWeight: 600 }}>{it.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: 14 }}>${it.price.toFixed(2)}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input type="number" min={1} value={it.quantity} onChange={(e) => updateQuantity(it.id, Number(e.target.value))} style={{ width: 64, padding: '8px 10px', borderRadius: 8, border: '1px solid #e5e7eb' }} />
                <button onClick={() => removeItem(it.id)} style={{ background: '#ef4444' }}>Quitar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, height: 'fit-content' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <div>Subtotal</div>
          <strong>${totalAmount.toFixed(2)}</strong>
        </div>
        <Link to="/checkout"><button style={{ width: '100%', marginTop: 12 }}>Ir a pagar</button></Link>
      </aside>
    </div>
  )
}


