const productos = [
  {
    id: "1",
    nombre: "Cortina Roller BlackOut 120x120",
    descripcion: "Cortinas Blackout 4 Capas.",
    precio: 59000,
    categoria: "cortinas",
    imagen: "/assets/cortinaRollerBlackOut.jpg"
  },
  {
    id: "2",
    nombre: "Cortina Roller Sistema Doble 120X120",
    descripcion: "Las cortinas roller de sistema doble combinan en una misma ventana dos tipos de telas.",
    precio: 164000,
    categoria: "cortinas",
    imagen: "/assets/cortinaRollerSistemaDoble.jpg"
  },
  {
    id: "3",
    nombre: "Cortina Perciana Americana 100x100",
    descripcion: "Las persianas americanas, también conocidas como cortinas venecianas de aluminio.",
    precio: 116000,
    categoria: "persianas",
    imagen: "/assets/cortinaPersianaAmericana.jpg"
  },
  {
    id: "4",
    nombre: "Sistema Roller Vertilux 38mm",
    descripcion: "Sistema está diseñado para cortinas roller utilizando tubos de 38 mm (1½ pulgadas) de diámetro.",
    precio: 49000,
    categoria: "accesorios",
    imagen: "/assets/sistema.jpg"
  }
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000); // 1 segundo de retardo simulado
  });
};

export const getProductoById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(p => p.id === id));
    }, 1000);
  });
};

export const getProductosByCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter(p => p.categoria === categoria));
    }, 1000);
  });
};