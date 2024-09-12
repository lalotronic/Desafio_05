import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () =>{
    return(
        <div className="text-center ">
    <div className="not-found-container">
      <h1>404</h1>
      <p>¡Oops! La página  no existe.</p>
      <Link to="/" className="home-link">Vuelve al inicio</Link>
    </div>
        </div>
    )
}

export default NotFound;