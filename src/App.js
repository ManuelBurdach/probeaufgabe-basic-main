import { Routes, Route } from 'react-router-dom';
import './App.css';
import ShoppingCard from './components/ShoppingCard/ShoppingCard.jsx';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <ShoppingCard />
      </header>
      <Routes>
        <Route path="/" element={<h1>hallo</h1>} />
      </Routes>
    </div>
  );
}

export default App;
