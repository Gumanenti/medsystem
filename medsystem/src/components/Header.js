import React from 'react';
import '../styles/Header.css'; // Certifique-se de criar o arquivo CSS correspondente

function Header() {
  return (
    <header className="header-container">
      <h1 className="header-title">MedSystem</h1>
      <nav>
        <ul className="header-nav">
          <li><a href="/admin">Admin</a></li>
          <li><a href="/medico">Médico</a></li>
          <li><a href="/paciente">Paciente</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
