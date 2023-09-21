import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/user-context';
import Header from "../components/header";

function Perfil({ imagen, usuario, texto }) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const imagenStyle = {
    borderRadius: '50%',
    width: '80%',
    height: '50%',
  };

  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleSalirClick = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <Header />

      <div className="container-fluid" style={{ padding: 10 }}>
        <div className="card" style={containerStyle}>
          <img
            src={imagen}
            className="card-img-top"
            alt="..."
            style={imagenStyle}
          />
          <div className="card-body">
            <div className="row" style={containerStyle}>
              <p className="card-title">
                <b>@{usuario}</b>
              </p>
              <p className="card-text">{texto}</p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleSalirClick}
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
