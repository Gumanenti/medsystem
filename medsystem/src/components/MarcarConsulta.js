import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import '../styles/MarcarConsultas.css'; 

function MarcarConsulta() {
  // Estados para armazenar os valores do formulário
  const [paciente, setPaciente] = useState('');
  const [medico, setMedico] = useState('');
  const [data, setData] = useState('');
  const [exame, setExame] = useState('');
  const [consultas, setConsultas] = useState([]);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Nova consulta que será adicionada à lista
    const novaConsulta = {
      paciente,
      medico,
      data,
      exame
    };

    // Adiciona a nova consulta à lista de consultas
    setConsultas([...consultas, novaConsulta]);

    // Gera o conteúdo para o arquivo de texto
    const conteudo = consultas.map(consulta => (
      `Paciente: ${consulta.paciente}\nMédico: ${consulta.medico}\nData: ${consulta.data}\nExame: ${consulta.exame}\n\n`
    )).join(''); // Junta todas as consultas formatadas

    // Salva o conteúdo no arquivo de texto usando o file-saver
    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'consultas_marcadas.txt'); // Salva o arquivo como "consultas_marcadas.txt"

    // Limpa os campos do formulário
    setPaciente('');
    setMedico('');
    setData('');
    setExame('');
  };

  return (
    <div className="marcar-consulta-container">
      <h2>Marcar Nova Consulta</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Paciente"
          value={paciente}
          onChange={(e) => setPaciente(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nome do Médico"
          value={medico}
          onChange={(e) => setMedico(e.target.value)}
          required
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Exame"
          value={exame}
          onChange={(e) => setExame(e.target.value)}
        />
        <button type="submit">Marcar Consulta e Salvar</button>
      </form>

      <h3>Consultas Marcadas</h3>
      <ul>
        {consultas.map((consulta, index) => (
          <li key={index}>
            Paciente: {consulta.paciente}, Médico: {consulta.medico}, Data: {consulta.data}, Exame: {consulta.exame}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MarcarConsulta;
