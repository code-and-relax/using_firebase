'use client';
import { collection, getDocs } from "firebase/firestore";
// import db from "./lib/firebase/initFirebase.js";
import { auth } from "./lib/firebase/initFirebase.js";
import {
  signInWithGoogle,
  signOut,
} from "./lib/firebase/auth/auth_with_google.js";
import { useEffect } from "react";

export default async function Home() {
  // Get a list of all the documents in the 'usuarios' collection
  // const querySnapshot = await getDocs(collection(db, "usuarios"));
  // const usuarios = querySnapshot.docs.map((doc) => doc.data());

  useEffect(() => {
    console.log(auth.currentUser);
  }, [0]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold text-blue-500">
        Welcome to my DB project
      </h1>
      <p className="mt-3 text-2xl text-gray-600">
        This is a simple project to show how to connect to a database using
        Next.js
      </p>
      <br />
      {/* {usuarios.map((usuario) => (
        <div
          key={usuario.DNI}
          className="flex flex-row items-center justify-center bg-blue-200 p-4 rounded-lg mt-4"
        >
          <h1 className="text-xl font-bold text-blue-800">
            {usuario.NOMBRE} {usuario.APELLIDO} {usuario.DNI}
          </h1>
          <p className="text-lg text-gray-700">
            {usuario.EDAD} años {usuario.EMAIL}
          </p>
          <p className="text-lg text-gray-700">
            {usuario.HOBBY} {usuario.TELEFONO}
          </p>
        </div>
      ))} */}
      <h1 className="text-6xl font-bold text-blue-500">End of the list</h1>
      <button
        onClick={signInWithGoogle}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
      <button
        onClick={signOut}
        className="mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign out
      </button>
      <h1>Usa Flutter AAAAAAAAAAAAAAAAAAAAAAAA</h1>
    </section>
  );
}
