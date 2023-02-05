import logo from './logo.svg';
import './App.css';
import tflite from './tflite/tflite'
import tflite_simd from './tflite/tflite-simd'

function App() {
  console.log(tflite)
  console.log(tflite_simd)
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
