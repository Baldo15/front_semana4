import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/login";
import Perfil from "./components/perfil";
import { AuthProvider, useAuth } from "./context/user-context";

const PrivateRoute = ({ children, ...rest }) => {
  const { token } = useAuth(); // Verifica el valor de token

  console.log("Token:", token); // Agrega un console.log para verificar el valor de token

  return (
    <Route
      {...rest}
      element={token ? children : <Navigate to="/login" replace />}
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route
          path="/profile"
          element={
            <Perfil
              imagen="src/images/perfil.jpeg"
              usuario="Hugo"
              texto="desarrollador de software de la clinica uros en la ciudad de neiva"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
