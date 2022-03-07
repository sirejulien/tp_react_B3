import logo from './logo.svg';
import './App.css';

function App() {

  //rappel JS
  // let et const : déclaration de variable, pas de type

  //const test = () => {}  privilégier cette ecriture des fonctions
  //function test2() {}
  //const test = toto => console.log((toto => {}))  parenthèse dispensable si un seul parametre
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
