import './App.css';
import Header from './componentes/header/Header.js';
import Formulario from './componentes/formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';

function App() {

  return (
    <div>
      {/* { Header() }
      <Header> </Header> */}
      <Header/>
      <Formulario/>
      <MiOrg/>
      
    </div>
  );
}

export default App;
