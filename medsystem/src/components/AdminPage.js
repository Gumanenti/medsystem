import React from 'react';
import '../styles/AdminPage.css';
import GestaoConsultas from './GestaoConsultas';
import Header from './Header'; 
import Footer from './Footer'; 

function AdminPage() {
  return (
    <div className="admin-container">

      <Header />

      <h1>Página do Administrador</h1>

      <GestaoConsultas />

      <Footer />

    </div>
  );
}

export default AdminPage;
