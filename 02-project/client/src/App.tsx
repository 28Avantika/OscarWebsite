import { AuthProvider } from './context/AuthContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css'

//Components
import NavBarComp from "./Components/Nav";
import FooterSec from './Components/Footer';
//Pages
import HomePage from './Pages/HomePage';
import CafeInsights from './Pages/CafeInsights';
import Games from './Pages/Games';

// Routing
import { Routes, Route } from "react-router-dom";
import MenuPage from './Pages/MenuPage';
import { CartProvider } from './context/CartContext';
import MenuItems from './Components/Menu/MenuItems';
import MenuFlipbook from './Components/Menu/MenuFlibook';


function App() {
  return (
    <CartProvider>
    <AuthProvider>
      <YourAppContent />
    </AuthProvider>
    </CartProvider>
  );
}

function YourAppContent() {

  return (
   
        <div className='App' >
        <NavBarComp />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/insights' element={<CafeInsights />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/menuItems' element={<MenuItems />} />
          <Route path='/games' element={<Games />} />
          <Route path='/menuFlipbook' element={<MenuFlipbook />} />
        </Routes>
       
        <FooterSec />
      </div>
    
  );
}


export default App
