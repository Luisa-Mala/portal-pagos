import { useState } from 'react';
import './App.css';
import { Table } from './componentes/Table/Table';

function App() {

  const [inputValue, setValue] = useState("")

  const [sendValue, setSendValue] = useState(null)

  //console.log(sendValue);

   return (
    <div className="App">
      <header className="App-header">
        <h1>Búsqueda para pagos</h1>
      </header>
      <section className='App-form'>
        <div className='form'>
          <label>
            <p>Número de cuenta o referencia</p>
            <input onChange={(e) =>  setValue(e.target.value)} type="text"/>
          </label>
          <button className='btn-search' onClick={()=> setSendValue(inputValue)}>
            Buscar
          </button>
        </div>
      </section>
      <Table data={sendValue}/>
    </div>
  );
}

export default App;
