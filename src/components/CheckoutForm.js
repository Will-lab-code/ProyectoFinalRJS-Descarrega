import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, getFirestore, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const { cart, clearCart, totalItems } = useCart();
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "" });
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const ordersRef = collection(db, "orders");

    const order = {
      buyer: form,
      items: cart.map(item => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.quantity
      })),
      total: cart.reduce((acc, item) => acc + item.precio * item.quantity, 0),
      date: Timestamp.now()
    };

    try {
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="container mt-4 text-center">
        <h2>🎉 ¡Gracias por tu compra!</h2>
        <p>Tu número de orden es:</p>
        <h4 className="text-success">{orderId}</h4>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" name="nombre" required value={form.nombre} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input type="tel" className="form-control" name="telefono" required value={form.telefono} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" required value={form.email} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Confirmar orden</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
