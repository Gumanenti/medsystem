const express = require('express');
const routes = express.Router();
const fs = require('fs');

// Lê os usuários do arquivo users.txt
const users = JSON.parse(fs.readFileSync(__dirname + '/users.txt', 'utf-8'));

// Middleware para verificar o tipo de usuário
const verifyRole = (role) => (req, res, next) => {
    const user = users.find(user => user.email === req.body.email);
    if (user && user.role === role) {
        req.user = user;
        next();
    } else {
        return res.status(403).json({ message: 'Acesso negado' });
    }
};

// Rota de login
routes.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        return res.status(200).json(user);
    } else {
        return res.status(400).json({ message: 'Usuário ou senha inválido.' });
    }
});

// Rota admin
routes.get('/admin', verifyRole('admin'), (req, res) => {
    res.send('Bem-vindo, Administrador!');
});

// Rota medico
routes.get('/medico', verifyRole('medico'), (req, res) => {
    res.send('Bem-vindo, Médico!');
});

// Rota paciente
routes.get('/paciente', verifyRole('paciente'), (req, res) => {
    res.send('Bem-vindo, Paciente!');
});

// Rota para listar consultas de um paciente
routes.get('/paciente/consultas', verifyRole('paciente'), (req, res) => {
    const consultas = [
        { id: 1, medico: 'Dr. João', data: '2024-09-20', status: 'Confirmada' }
    ];
    res.status(200).json(consultas);
});

// Rota para o médico ver os pacientes agendados
routes.get('/medico/consultas', verifyRole('medico'), (req, res) => {
    const pacientes = [
        { id: 1, nome: 'Maria', data: '2024-09-20', exame: 'Raio-X' }
    ];
    res.status(200).json(pacientes);
});

module.exports = routes;
