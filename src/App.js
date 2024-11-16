import logo from './logo.svg';
import './css/App.css';
import Chair from './Chair';
import TableImage from './images/table.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> 
        <img  className="App-post" alt=':(' src= {TableImage}
        />
        <div>
        <Chair x={22} y={24}/>
      <Chair x={32} y={5}/>
      <Chair x={47} y={4}/>
      <Chair x={62} y={5}/>
      <Chair x={71} y={24}/>
        </div></div>
        
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
