import { FaClipboard } from 'react-icons/fa';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Password Generator</h2>
        <div className="result-container">
          <span className="result"></span>
          <button className="btn">
            <FaClipboard />
          </button>
        </div>
        <div className="settings">
          <div className="setting">
            <label htmlFor="length">Password Length</label>
            <input type="number" id="length" min="4" max="20" value="20" />
          </div>
          <div className="setting">
            <label htmlFor="uppercase">Include Uppercase Letters</label>
            <input type="checkbox" id="uppercase" checked />
          </div>
          <div className="setting">
            <label htmlFor="lowercase">Include Lowercase Letters</label>
            <input type="checkbox" id="lowercase" checked />
          </div>
          <div className="setting">
            <label htmlFor="numbers">Include Numbers</label>
            <input type="checkbox" id="numbers" checked />
          </div>
          <div className="setting">
            <label htmlFor="symbols">Include Symbols</label>
            <input type="checkbox" id="symbols" checked />
          </div>
        </div>
        <button className="btn btn-large">Generate Password</button>
      </div>
    </div>
  );
}

export default App;
