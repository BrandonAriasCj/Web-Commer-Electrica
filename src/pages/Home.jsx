import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const featured = products.slice(0, 4)

  return (
    <div>
      <section className="elevate" style={{ background: 'linear-gradient(135deg, #adcdffff, #ffffff)', border: '1px solid #e5e7eb', borderRadius: 16, padding: 28, display: 'flex', gap: 28, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 560 }}>
          <h1 style={{ margin: 0, fontSize: 36, lineHeight: 1.15 }}>Electrónica de confianza, al mejor precio</h1>
          <p style={{ color: 'var(--muted)', marginTop: 8 }}>Encuentra audio, periféricos, monitores y más con envío rápido.</p>
          <div style={{ display: 'flex-column', gap: 12, marginTop: 20 }}>
            <Link to="/products" style={{ marginRight: 10 }} ><button>Ver productos</button></Link>
            <a href="#ofertas" style={{ fontWeight: 600 }}>Ver ofertas</a>
          </div>
        </div>
        <img src="electrica.jpg" alt="Hero" style={{ width: 360, maxWidth: '100%', borderRadius: 12 }} />
      </section>


      <div className="spacer-lg" />

      <section>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h2 style={{ margin: 0 }}>Destacados</h2>
          <Link to="/products">Ver todo</Link>
        </div>
        <div className="grid grid-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}


