import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img
        src={`/assets/${item.imagen}`}
        className="card-img-top"
        alt={item.nombre}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">${item.precio}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalle</Link>
      </div>
    </div>
  );
}

export default Item;