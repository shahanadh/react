import React from 'react';
import './Product.css';
function Products() {
    return (
      <div className="page">
        <h2>Products</h2>
        <div className="cards">
          <div className="card">T-Shirt — ₹499</div>
          <div className="card">Shoes — ₹1999</div>
          <div className="card">Smart Watch — ₹2499</div>
          <div className="card">Headphones — ₹1499</div>
        </div>
      </div>
    );
}
export default Products;