import React from 'react';

import { NavLink } from 'react-router-dom'
const ErrorPage = () => {
  

  return (
    <>

    <div>
    <img src='https://tse2.mm.bing.net/th?id=OIP.sFDAIopEYEirj1xg5CYt0QHaD4&pid=Api&P=0&h=220'width={1400} height={500}>
    </img>
    <div className='container text-center'>
    <h1>Error 404 Page</h1>
    <h4>OHH ! you lost </h4>
    <NavLink to="/Home">
    <button className='bg-primary'>Go Back Home</button>
    </NavLink>
    </div>
    </div>
    </>

  )
}

  
   
  



export default ErrorPage;

