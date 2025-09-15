# Proyecto Final - Descarrega

Este proyecto es la entrega final del curso de React JS en Coderhouse. Se trata de una aplicación de e-commerce desarrollada como una **Single Page Application (SPA)** utilizando React y Firebase.

## 🛠️ Tecnologías utilizadas

- React JS (Vite)
- React Router DOM
- Context API
- Firebase (Firestore)
- Bootstrap (para el diseño responsivo)

## 📁 Estructura de componentes

```
src/
├── components/
│   ├── NavBar.jsx
│   ├── CartWidget.jsx
│   ├── Item.jsx
│   ├── ItemList.jsx
│   ├── ItemDetail.jsx
│   ├── ItemCount.jsx
│   ├── Cart.jsx
│   └── CheckoutForm.jsx
├── containers/
│   ├── ItemListContainer.jsx
│   └── ItemDetailContainer.jsx
├── context/
│   └── CartContext.js
├── firebaseConfig.js
├── App.jsx
└── index.js
```

## 🔄 Funcionalidades

- Listado de productos desde Firebase Firestore
- Detalle individual de cada producto
- Filtrado por categorías
- Carrito de compras con Context API
- Cálculo de totales y manejo de cantidades
- Checkout que genera una orden en Firestore
- Renderizado condicional: mensajes de carga, producto no encontrado, carrito vacío, etc.

## 🛒 Firebase

- Colección `items`: contiene los productos del e-commerce
- Colección `orders`: se generan al finalizar una compra
- Cada producto incluye: `nombre`, `descripcion`, `precio`, `imagen`, `categoria`

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio  
```bash
git clone https://github.com/tu-usuario/ProyectoFinal+Descarrega.git
```

2. Instalar dependencias  
```bash
npm install
```

3. Crear archivo `.env` con tus credenciales de Firebase (opcional)

4. Iniciar el proyecto  
```bash
npm run dev
```

## ✅ Estado del proyecto

✔️ Cumple con todos los requisitos de la consigna final  
✔️ Deploy funcional  
✔️ Código limpio y modular

---

**Autor:** William Descarrega  
**Curso:** React JS – Coderhouse

