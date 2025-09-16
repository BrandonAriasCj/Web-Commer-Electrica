import { useMemo, useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const categories = useMemo(() => ['all', ...Array.from(new Set(products.map(p => p.category)))], [])

  const filtered = useMemo(() => products.filter(p => {
    const matchQuery = p.title.toLowerCase().includes(query.toLowerCase())
    const matchCat = category === 'all' || p.category === category
    return matchQuery && matchCat
  }), [query, category])

  return (
    <div>
      <h1>Productos</h1>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
        <input
          placeholder="Buscar..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #e5e7eb', minWidth: 220 }}
        />
        <select value={category} onChange={e => setCategory(e.target.value)} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #e5e7eb' }}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="grid grid-4">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}


