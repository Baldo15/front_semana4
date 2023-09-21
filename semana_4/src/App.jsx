import React from "react";
import Header from "./components/header";
import Barra from "./components/search";
import PostList from "./components/postsList";
import Perfil from "./components/perfil";
import Login from "./components/login";
import { useAuth } from "./context/user-context"; 
import { useState } from "react";


function App() {
  const { token } = useAuth(); // Obtiene el token del contexto de autenticación

  const [modulo, setModulo] = useState(1);
  const [search, setSearch] = useState("");

  function filtroModulo(modulo) {
    setModulo(modulo);
  }

  function doSearch(text) {
    setSearch(text);
  }

  // Validar si el usuario está logeado y redirigir si no lo está
  if (!token) {
    return <Login />;
  }

  return (
    <div>
      <Header />
      {modulo === 1 ? (
        <>
          <Barra search={search} doSearch={doSearch} />
          <PostList search={search} />
        </>
      ) : modulo === 0 ? (
        <Perfil
          imagen="src/images/perfil.jpeg"
          usuario="Hugo"
          texto="desarrollador de software de la clinica uros en la ciudad de neiva"
        />
      ) : null}
    </div>
  );
}

export default App;
