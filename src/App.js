import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Cart from './components/cart';
import SingalProduct from './components/SingalProduct';
import Services from './components/Services';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer'
import Trusted from './components/Trusted';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DK from './components/DK';


import { NavLink } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/DK" element={<DK />} />
                <Route path="/SingalProduct" element={<SingalProduct />} />
                <Route path="/Services" element={<Services />} />
              <Route path="/Trusted" element={<Trusted />} />
                <Route path="/ErrorPage" element={<ErrorPage />} />
                <Route path="/Footer" element={<Footer />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;

