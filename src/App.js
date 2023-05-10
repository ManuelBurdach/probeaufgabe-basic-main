import { Routes, Route } from 'react-router-dom';
import './App.css';
import ShoppingCard from './components/ShoppingCard/ShoppingCard.jsx';
import Shop from './pages/Shop/Shop.page.jsx';
import { shoppingCardState } from './states/shoppingCard.state';

function App() {
  const shoppingCardItems = shoppingCardState((state)=> state.shoppingCardItems);
 // const setShoppingCardItems = shoppingCardState((state)=> state.setShoppingCardItems);

  return (
    <div className="App">
      <header className='App-header'>
        <ShoppingCard shoppingCardItems={shoppingCardItems} />
      </header>
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
