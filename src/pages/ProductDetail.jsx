import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import useCartStore from '../store/cart'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const name_imagen = product.image
  const ruta = "/" + name_imagen
  const add = useCartStore((s) => s.addItem)

  if (!product) return <div>Producto no encontrado.</div>

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
      <div style={{ borderRadius: 12, overflow: 'hidden', background: 'white', border: '1px solid #e5e7eb' }}>
        <img src={ruta} alt={product.title} style={{ width: '100%' }} />
      </div>
      <div>
        <h1 style={{ marginTop: 0 }}>{product.title}</h1>
        <div style={{ color: 'var(--muted)', marginBottom: 8 }}>{product.category}</div>
        <p>{product.description}</p>
        <h2>${product.price.toFixed(2)}</h2>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={() => add(product, 1)}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}


