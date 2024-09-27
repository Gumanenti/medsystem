import React, { useState } from 'react';
import { saveAs } from 'file-saver'; 
import '../styles/GestaoConsultas.css'; 

function GestaoConsultas() {
  const [texto, setTexto] = useState(''); 

  const handleSave = () => {
    const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'consultas_exames.txt'); 
  };

  return (
    <div className="gestao-consultas-container">
      <h2>Gestão de Consultas e Exames</h2>

      <textarea
        rows="10"
        cols="50"
        placeholder="Insira as consultas e exames aqui..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button onClick={handleSave}>Salvar Informações</button>
    </div>
  );
}

export default GestaoConsultas;
