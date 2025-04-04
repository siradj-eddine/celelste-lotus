import React from 'react';
import '../src/css/App.css';
import Contact from './pages/contact';
import AboutUs from './pages/about-us';
import Navbar from './components/navbar';
import { CartProvider } from './Context/cartContext';
import HomePage from './pages/home';
import Shop from './pages/shop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Login from './pages/login';
import SignUpPage from './pages/signup';
function App() {
  return ( 
    <CartProvider>
  <Router>  
    <div className='app-container'>
    
        <Navbar/>
        <div className="content">
        <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path='/cart'element={<Cart/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
          </Routes>
        </div>
    
    </div>
  </Router>
  </CartProvider>
  );
};
export default App;

