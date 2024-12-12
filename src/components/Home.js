import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
const Home = () => {
      return(
            <div>
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-ecommerce-website-with-shopping-cart-with-the-shopping-cart-on-a-image_2975658.jpg"width={1400} height={450} ></img>
      
      <div className='container text-center'>
<NavLink to="/SingalProduct">
<div className='d-grid gap-2 pt-2 pb-2 fs-2'>
      <button className='bg-primary'>shop now </button>
      </div>
</NavLink>
</div>
  

      </div>
      
      
      
      
);
};

export default Home;
<Footer />  
