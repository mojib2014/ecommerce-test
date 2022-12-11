import React from 'react'
import Products from './Products';
import banner from "../logo/banner.jpg";

function Home() {
  return (
    <div className="hero">
      <div className="card text-white bg-dark border-0">
        <img src={banner} className="card-img" alt="..." height="500px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            <p className="card-text lead fs-2">Shop Holiday Gifts</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home