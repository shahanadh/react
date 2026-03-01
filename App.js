import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 

// Updated paths to match a standard lowercase 'pages' folder
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Product';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';


function App() {
  return (
    <BrowserRouter>
      {/* Blue Navbar with Spacing */}
      <nav className="navbar">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/About" className="nav-item">About</Link>
        <Link to="/Product" className="nav-item">Products</Link>
        <Link to="/Cart" className="nav-item">Cart</Link>
        <Link to="/contactus" className="nav-item">Contact </Link>
       
        
      </nav>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={< Products />} />
          <Route path="/Cart" element={<Cart  />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

