import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";
import ItemList from "../components/ItemList";

function ItemListContainer({ saludo }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    const q = categoryId
      ? query(itemsCollection, where("categoria", "==", categoryId))
      : itemsCollection;

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No hay resultados");
        }
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(docs);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      <h2>{saludo}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </div>
  );
}

export default ItemListContainer;
