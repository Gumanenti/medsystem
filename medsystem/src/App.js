import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import MedicoPage from './components/MedicoPage';
import PacientePage from './components/PacientePage';

function App() {
  const [user, setUser] = useState(null); // Estado do usuário logado

  const handleLogin = (userData) => {
    setUser(userData); // Atualiza o estado com o usuário logado
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {user && user.role === 'admin' && (
          <Route path="/admin" element={<AdminPage />} />
        )}
        {user && user.role === 'medico' && (
          <Route path="/medico" element={<MedicoPage />} />
        )}
        {user && user.role === 'paciente' && (
          <Route path="/paciente" element={<PacientePage />} />
        )}
        {/* Redireciona para login se não houver usuário logado */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;


