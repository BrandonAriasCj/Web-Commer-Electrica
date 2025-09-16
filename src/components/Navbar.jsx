import { Link, NavLink } from 'react-router-dom'
import useCartStore from '../store/cart'

export default function Navbar() {
  const itemCount = useCartStore((s) => s.items.reduce((acc, it) => acc + it.quantity, 0))

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'var(--white)', borderBottom: '1px solid #e5e7eb', boxShadow: '0 6px 18px rgba(2,6,23,0.05)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, color: 'var(--primary)' }}>
          <span style={{
            width: 28, height: 28, borderRadius: 6, background: 'var(--primary)', display: 'inline-block'
          }} />
          Walter Electronics
        </Link>

        <nav style={{ display: 'flex', gap: 16 }}>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'var(--primary-dark)' : 'inherit', fontWeight: 600 })}>Inicio</NavLink>
          <NavLink to="/products" style={({ isActive }) => ({ color: isActive ? 'var(--primary-dark)' : 'inherit', fontWeight: 600 })}>Productos</NavLink>
          <NavLink to="/cart" style={({ isActive }) => ({ color: isActive ? 'var(--primary-dark)' : 'inherit', fontWeight: 600 })}>
            Carrito ({itemCount})
          </NavLink>
        </nav>
      </div>
    </header>
  )
}


