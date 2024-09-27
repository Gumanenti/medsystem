
import '../styles/PacientePage.css';
//import api from '../services/api';
import Header from './Header'; 
import Footer from './Footer'; 
import MarcarConsulta from './MarcarConsulta';

function PacientePage() {

  return (
    <div className="paciente-container">
      
      <Header />

      <h1>Página do Paciente</h1>

      <MarcarConsulta />

      <Footer />

    </div>
  );
}

export default PacientePage;
