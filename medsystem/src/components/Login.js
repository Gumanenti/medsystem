import React, { useState } from 'react';
import '../styles/Login.css';
import api from '../services/api';
import Header from './Header';
import Footer from './Footer';


function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      onLogin(response.data); 
    } catch (error) {
      alert('Erro ao fazer login.');
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer /> 
    </div>
  );
}

export default Login;
