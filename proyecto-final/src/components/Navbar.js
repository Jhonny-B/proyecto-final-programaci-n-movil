import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
        Inicio
      </Link>
      <Link to="/videos" className={`nav-link ${location.pathname === '/videos' ? 'active' : ''}`}>
        Videos
      </Link>
      <Link to="/documentos" className={`nav-link ${location.pathname === '/documentos' ? 'active' : ''}`}>
        Documentos
      </Link>
      <Link to="/frases" className={`nav-link ${location.pathname === '/frases' ? 'active' : ''}`}>
        Frases de Ánimo
      </Link>
      
    </nav>
  );
}

export default Navbar;