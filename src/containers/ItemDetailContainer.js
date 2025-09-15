import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../firebaseConfig';
import ItemDetail from '../components/ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemById(id)
      .then((res) => {
        setProducto(res);
      })
      .catch((err) => console.error('Error al obtener producto:', err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p style={{ padding: '20px' }}>Cargando producto...</p>;
  }

  if (!producto) {
    return <p style={{ padding: '20px' }}>Producto no encontrado</p>;
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;