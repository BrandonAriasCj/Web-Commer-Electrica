export const products = [
  {
    id: 'p1',
    title: 'Interruptor Simple 10A',
    description: 'Interruptor de pared de 1 tecla, 10A, 250V, color blanco.',
    price: 4.50,
    image: 'interruptor-simple.png',
    category: 'interruptores'
  },
  {
    id: 'p2',
    title: 'Tomacorriente Doble 16A',
    description: 'Tomacorriente empotrable de 2 salidas, 16A, 250V, color blanco.',
    price: 6.99,
    image: 'tomacorriente2-16A.jpeg',
    category: 'tomacorrientes'
  },
  {
    id: 'p3',
    title: 'Interruptor Diferencial 2P 25A',
    description: 'Dispositivo diferencial de 2 polos, 25A, 30mA, protección contra fugas eléctricas.',
    price: 28.90,
    image: 'Interruptor Diferencial 2P 25A 30Ma 230V Tipo A, Iec61008.jpeg',
    category: 'protección'
  },
  {
    id: 'p4',
    title: 'Foco LED 9W E27',
    description: 'Lámpara LED de 9W, luz blanca cálida, base E27 estándar.',
    price: 3.20,
    image: 'intral-foco-led-bulbo-1-1-1707223505.jpg',
    category: 'iluminación'
  },
  {
    id: 'p5',
    title: 'Cinta Aislante 18mm',
    description: 'Cinta aislante PVC de 18mm x 10m, color negro, ideal para conexiones eléctricas.',
    price: 1.50,
    image: 'wtfdf8292.png',
    category: 'accesorios'
  },
  {
    id: 'p6',
    title: 'Tablero Eléctrico Doméstico 8 Polos',
    description: 'Tablero empotrable plástico para 8 módulos, tapa transparente.',
    price: 19.99,
    image: 'tablerodomestico.jpeg',
    category: 'tableros'
  }
]

export const getProductById = (id) => products.find(p => p.id === id)
