export const products = [
    {
      id: 'p1',
      title: 'Auriculares Bluetooth Pro',
      description: 'Cancelación de ruido, 30h de batería, conexión USB-C.',
      price: 59.99,
      image: 'pulsador-emergencia-schneider.png',
      category: 'audio'
    },
    {
      id: 'p2',
      title: 'Teclado Mecánico RGB',
      description: 'Retroiluminado RGB, switches azules y diseño ergonómico.',
      price: 89.99,
      image: 'piloto-rojo-schneider.png',
      category: 'accesorios'
    },
    {
      id: 'p3',
      title: 'Mouse Inalámbrico Ultra',
      description: 'Precisión óptica, batería recargable y diseño silencioso.',
      price: 34.99,
      image: 'pulsador-emergencia-schneider.png',
      category: 'accesorios'
    },
    {
      id: 'p4',
      title: 'Monitor 4K UHD 27"',
      description: 'Resolución 3840x2160, panel IPS y frecuencia de 144Hz.',
      price: 329.99,
      image: 'pulsador-emergencia-schneider.png',
      category: 'pantallas'
    },
    {
      id: 'p5',
      title: 'Silla Gamer Pro X',
      description: 'Reclinable 180°, reposabrazos ajustables y cojines ergonómicos.',
      price: 199.99,
      image: 'pulsador-emergencia-schneider.png',
      category: 'muebles'
    },
    {
      id: 'p6',
      title: 'Micrófono USB Studio',
      description: 'Calidad de grabación profesional, patrón cardioide y plug & play.',
      price: 79.99,
      image: 'pulsador-emergencia-schneider.png',
      category: 'audio'
    }
  ]
  

export const getProductById = (id) => products.find(p => p.id === id)

