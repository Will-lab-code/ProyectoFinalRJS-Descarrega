import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Tienda</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/cortinas">Cortinas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/persianas">Persianas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <Link to="/cart"><CartWidget /></Link>
      </div>
    </nav>
  );
}

export default NavBar;
