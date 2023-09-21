import { useState } from 'react';
import '../App.css';


function BotonLikes({like}){
  console.log(like);
  const [contador, likes] = useState(like)
  return(
    <button className="btn btn-danger" onClick={() => { likes(contador+1);}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
      </svg>
      {contador}
      </button>
  )
}
function Post({id ,imagen, tiempo, autor, texto, comentarios, likes}) {
  return (
    <div className="container-fluid" style={{ padding: 10 }}>
      <div className="card">
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body" >
          <div className="row">
            <div className="col">
              <p className="fw-light">{tiempo} min ago</p>
            </div>
            <div className="col" style={{ textAlign: 'right' }}>
              <BotonLikes  like= {likes}/>
            </div>
          </div>
          <p className="card-title"><b>@{autor}</b></p>
          <p className="card-text">{texto}</p>
          <p className ="fw-lighter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
            Comentarios ({comentarios})
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
