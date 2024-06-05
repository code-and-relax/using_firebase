import { collection, getDocs } from "firebase/firestore";
import db from "./firebase/initFirebase.js";

export default async function Home() {
  // Get a list of all the documents in the 'usuarios' collection
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  const usuarios = querySnapshot.docs.map((doc) => doc.data());

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold text-blue-500">Welcome to my DB project</h1>
      <p className="mt-3 text-2xl text-gray-600">
        This is a simple project to show how to connect to a database using
        Next.js
      </p>
      <br />
      {usuarios.map((usuario) => (
        <div
          key={usuario.DNI}
          className="flex flex-row items-center justify-center bg-blue-200 p-4 rounded-lg mt-4"
        >
          <h1 className="text-xl font-bold text-blue-800">
            {usuario.NOMBRE} {usuario.APELLIDO}  {usuario.DNI}
          </h1>
          <p className="text-lg text-gray-700">
            {usuario.EDAD} años  {usuario.EMAIL}
          </p>
          <p className="text-lg text-gray-700">
            {usuario.HOBBY}  {usuario.TELEFONO}
          </p>
        </div>
      ))}
    </section>
  );
}
