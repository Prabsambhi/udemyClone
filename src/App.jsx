import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/cart'
import Home from './Pages/Home'
import Help from './Pages/help';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </>
  );
}

export default App
