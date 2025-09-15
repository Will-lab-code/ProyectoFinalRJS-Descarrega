import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";

export const testFirebase = async () => {
  const productosRef = collection(db, "productos");

  try {
    const snapshot = await getDocs(productosRef);
    snapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  } catch (error) {
    console.error("Error obteniendo productos:", error);
  }
};
