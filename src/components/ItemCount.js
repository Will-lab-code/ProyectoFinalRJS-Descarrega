import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="my-3">
      <div className="btn-group" role="group">
        <button className="btn btn-secondary" onClick={decrementar}>-</button>
        <span className="btn btn-light">{cantidad}</span>
        <button className="btn btn-secondary" onClick={incrementar}>+</button>
      </div>
      <br />
      <button className="btn btn-primary mt-2" onClick={() => onAdd(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;