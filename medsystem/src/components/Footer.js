import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'long' }); // Exibe o mês por extenso
  const day = currentDate.getDate(); // Exibe o dia do mês

  return (
    <footer className="footer-container">
      <p>&copy; {day} de {month}, {year}. MedSystem. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;

