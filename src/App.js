import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pasarela de pago</h1>
      </header>
      <section className='App-form'>
        <form>
          <label>
            <p>Número de cuenta o referencia</p>
            <input type="text"/>
          </label>
          <input type="submit" value="Continuar"></input>
        </form>
      </section>
    </div>
  );
}

export default App;
