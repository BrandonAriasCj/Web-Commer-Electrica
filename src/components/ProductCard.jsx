import { Link } from 'react-router-dom'
import useCartStore from '../store/cart'

export default function ProductCard({ product }) {
  const add = useCartStore((s) => s.addItem)

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to={`/product/${product.id}`} style={{ display: 'block', aspectRatio: '16/10', overflow: 'hidden' }}>
        <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Link>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Link to={`/product/${product.id}`} style={{ fontWeight: 700, color: 'inherit', fontSize: 18 }}>{product.title}</Link>
        <div style={{ color: 'var(--muted)', fontSize: 14, textTransform: 'capitalize' }}>{product.category}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
          <strong style={{ fontSize: 18 }}>${product.price.toFixed(2)}</strong>
          <button onClick={() => add(product, 1)}>Agregar</button>
        </div>
      </div>
    </div>
  )
}


