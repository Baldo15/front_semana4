import React, { useState } from 'react';
import { useAuth } from '../context/user-context'; 
import { login } from '../services/posts-service';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Login() {
  const { setToken } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Obtiene la función de navegación

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    login(form.username.value, form.password.value)
      .then((data) => {

        localStorage.setItem("token", data.token);
        setToken(data.token);
        navigate('/');
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }

  return (
    <div className="container-fluid">
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="usuario"
        />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="contraseña"
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
