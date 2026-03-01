import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
function Home() {
    return (
      <>
        <section className="hero">
          <h2>Mini E-Commerce Store</h2>
          <p>Shop the latest products at the best prices</p>
          <Link to="/products">
            <button className="btn">Shop Now</button>
          </Link>
        </section>
  
        <section className="highlights">
          <h3>Why Shop With Us?</h3>
          <div className="highlight-boxes">
            <div className="box">Quality Products</div>
            <div className="box">Affordable Prices</div>
            <div className="box">Fast Delivery</div>
          </div>
        </section>
      </>
    );
}
export default Home;
  