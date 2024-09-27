//import React, { useEffect, useState } from 'react';
import '../styles/MedicoPage.css'; 
//import api from '../services/api';
import Header from './Header'; 
import Footer from './Footer'; 
import GestaoConsultas from './GestaoConsultas';

function MedicoPage() {


  return (
    <div className="medico-container">

      <Header />

      <h1>Página do Médico</h1>

      <GestaoConsultas />

      <Footer />
      
    </div>
  );
}

export default MedicoPage;

