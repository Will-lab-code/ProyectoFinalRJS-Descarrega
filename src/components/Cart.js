import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, totalPrice, removeItem, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mt-4 text-center">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>
      <ul className="list-group">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.nombre} x {item.quantity} = ${item.precio * item.quantity}
            <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h4>Total: ${totalPrice}</h4>
        <button className="btn btn-warning me-2" onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
      </div>
    </div>
  );
}

export default Cart;
