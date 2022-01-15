import logo from './logo.svg';
import './App.css';
import Title from './Header.js';
import ImageGrid from './ImageGrid';

function App() {
  return (
    <div className="App">
      <div className="Header-bar"> <Title /> </div>
      <header className="App-header">
        <ImageGrid/>
      </header>
    </div>
  );
}

export default App;
