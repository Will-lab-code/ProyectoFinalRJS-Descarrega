import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvY1rIArzHJNFLRaY9n44WYx4At8R6zLg",
  authDomain: "creatulanding-descarrega.firebaseapp.com",
  projectId: "creatulanding-descarrega",
  storageBucket: "creatulanding-descarrega.firebasestorage.app",
  messagingSenderId: "584671627257",
  appId: "1:584671627257:web:e1b26108014d81a43a9f28"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Traer todos los productos
export async function getItems() {
  const querySnapshot = await getDocs(collection(db, 'items'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// 🔹 Traer un producto por su ID
export async function getItemById(id) {
  const docRef = doc(db, 'items', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("No se encontró el producto");
  }
}