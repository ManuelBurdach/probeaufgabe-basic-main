import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import ShoppingCard from './components/ShoppingCard/ShoppingCard.jsx';
import Shop from './pages/Shop/Shop.page.jsx';
import { shoppingCardState } from './states/shoppingCard.state';
import Details from './pages/Details/Details.page';

function App() {
  const shoppingCardItems = shoppingCardState((state)=> state.shoppingCardItems);
  const nav = useNavigate()
console.log(shoppingCardItems)

  return (
    <div className="App">
      <header className='App-header'>
        <button onClick={()=>nav("/")}>Home</button>
        <ShoppingCard shoppingCardItems={shoppingCardItems} />
      </header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
