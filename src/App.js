import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/Header.js';
console.log(Header)

function App() {

  return (
    <div className="App">
      {/* { Header() }
      <Header> </Header> */}
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo con React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header>
    </div>
  );
}

export default App;
