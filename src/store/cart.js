import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  items: [],
  addItem: (product, quantity = 1) => set((state) => {
    const existing = state.items.find((it) => it.id === product.id)
    if (existing) {
      return {
        items: state.items.map((it) => it.id === product.id ? { ...it, quantity: it.quantity + quantity } : it)
      }
    }
    return { items: [...state.items, { ...product, quantity }] }
  }),
  removeItem: (id) => set((state) => ({ items: state.items.filter((it) => it.id !== id) })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map((it) => it.id === id ? { ...it, quantity: Math.max(1, quantity) } : it)
  })),
  clear: () => set({ items: [] }),
  total: () => get().items.reduce((acc, it) => acc + it.price * it.quantity, 0),
}))

export default useCartStore


