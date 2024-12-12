import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {//
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid bg-success">
        <NavLink to="/DK" className="navbar-brand bg-dark text-white" href="/Dk"><img src='https://raw.githubusercontent.com/thapatechnical/thapareactecom/8cb64da9ff29040c2094ee3655bb5837bb7aae8c/public/images/logo.png'width={200} height={50}></img></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/Home" className="nav-link active bg-light" aria-current="page" href="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="About" className="nav-link active bg-warning" href="About">About</NavLink>
            </li>
            <li className="nav-item">
    
              <NavLink to="/product
              " className="nav-link active bg-danger" href="Product">Product</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="Contact" className="nav-link dropdown-toggle bg-primary" href="Contact" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="Cart"className="nav-link active bg-light" href="Cart"> Add <FaShoppingCart/>
              <span className='cart-total-item bg-primary'>10</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <img src='https://cdn3.vectorstock.com/i/1000x1000/50/12/logo-for-grocery-store-vector-22845012.jpg' width={300}height={100}></img>
    </nav>
  </div>
  )
};
export default Navbar
