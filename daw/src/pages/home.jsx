import React from 'react';
import '../css/HomePage.css';
import '../css/keyFrames.css';
import '../css/Responsive.css'
import products from '../product';
import {  Link } from 'react-router-dom';
import converse from '../photo/brands/converse.png';
import zara from '../photo/brands/zara.jpg';
import vans from '../photo/brands/vans.png';
import puma from '../photo/brands/puma.png';
import nike from '../photo/brands/nike.png';
import adidas from '../photo/brands/adidas.png';


import ShopForMen from '../photo/homePhoto/shopForMen.avif'
import ShopForWomen from '../photo/homePhoto/shopForWomen.jpg'
import accessories from '../photo/homePhoto/accessories.avif'

import ClassicWinterCollection from '../photo/homePhoto/ClassicWinterCollection.jpg'

import costumer1 from '../photo/homePhoto/johndoe.jpeg'
import costumer2 from '../photo/homePhoto/johndoe2.jpeg'
import costumer3 from '../photo/homePhoto/johndoe3.jpeg'
import costumer4 from '../photo/homePhoto/johndoe4.jpeg'



const HomePage = () => {
  
  const categories = [
    {id:1,name : 'Man',image : ShopForMen},
    {id:1,name : 'Women',image : ShopForWomen},
    {id:1,name : 'Accessories',image : accessories}];

  const feedbacks = [
    { id: 1, name: 'John Doe', image: costumer1, feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.' },
    { id: 2, name: 'Jane Doe', image: costumer2, feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.' },
    { id: 3, name: 'James Doe', image: costumer3, feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, qua .' },
    { id: 4, name: 'Jessica Doe', image: costumer4, feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.' },

 ];

  const brands = [
    { id: 1, name: 'Nike', image: nike },
    { id: 2, name: 'Adidas', image: adidas },
    { id: 3, name: 'Puma', image: puma },
    { id: 4, name: 'zara', image: zara },
    { id: 5, name: 'Vans', image: vans },
    { id: 6, name: 'Converse', image: converse },

  ];

  return (
    <div className="home-page">
      <header className="hero">
        {/* <img src={bannerImage} alt="Fashion Banner" className="logo-image" /> */}
        <div className="hero-text">
          <h2 className='animation'>Welcome to the Best Clothing Store</h2>
          <p>Discover the latest trends in fashion</p>
          <Link to='/shop'><button className="shop-now-btn">Shop Now</button></Link>
          
        </div>
      </header>
      
      <section className="featured-products">
         <h3 className='effect'>Featured Products</h3>
         <div className="product-grid">
          {products.map((product) => (
            product.name &&
            <div key={product.id} className="product-card animation" id={product.category}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h4>{product.name}</h4>
              <p>{product.describe}</p>
              <p>{product.price}</p>
              <Link to={`/productDetails/${product.id}`}><button  className="shop-now-btn">View Details</button></Link>
            </div>
          ))}
         </div>
      </section>
      <section className="product-categories">
            <h3 className='effect'>Categories</h3>
            <div className="category-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card animation">
                <a href="/man">
                <img src={category.image} alt={category.name} className="category-image" />
                <h4>Shop for {category.name}</h4>
                </a>
              </div>
            ))}
           </div>
      </section>

      <section className="collection">
            <img src={ClassicWinterCollection} alt="Classic winter collection" />
            <div className="collection-text animation">
                <h3>Classic Winter Collection</h3>
                <p>Discover the latest trends in fashion Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae necessitatibus aspernatur, reprehenderit natus minus animi enim accusamus, est illum laudantium cupiditate officiis molestiae fugit laborum? Nostrum magni alias voluptate!</p>
                <Link to='/shop'><button className="shop-now-btn">Shop Collection</button></Link>

            </div>
      </section>

      <section className="feed-back">
          <h3 className='effect'>Customer Feedback</h3>
          <div className="feedback-cards">
            {feedbacks.map((feedback) => ( 
            <div key={feedback.id} className="feedback-card animation">

              <img src={feedback.image} alt={feedback.name} className="customer-image" />
              <p>{feedback.feedback}</p>
              <h4>{feedback.name}</h4>

            </div>
            ))}
         
          </div>
      </section>
      <section className='brands'>
            <h3 className='animation'>Our Brands</h3>
            <div className="brand-logos animation">
                {brands.map((brand) => (
                    <img key={brand.id} src={brand.image} alt={brand.name} className="brand-logo" />
                ))}
            </div>
      </section>    

      <hr/>

    <footer>
      <div>
        <section className='quick-links'>
          <h4>Quick Links</h4>
          <ul>
            <Link to="/"><li><a href="/">Home</a></li></Link>
            <Link to="/about-us"><li><a href="/about">About Us</a></li></Link>
            <Link to=""><li><a href="/services">Services</a></li></Link>
            <Link to="/contact"><li><a href="/contact">Contact</a></li></Link>
          </ul>
        </section>
        <section className='help-info'>
          <h4>help & info</h4>
          <ul>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </section>
        <section className='contact-us'>
          <h4>contact us</h4>
          <ul>
            <li><a href="/email">email : siradjboulemaiz@gmail.com</a></li>
            <li><a href="/phone">phone : +213782268236</a></li>
          </ul>
        </section>
      </div>
      <section className='copyrights'>
        <p>
      Copyright <span className='cp'>©</span> 2025 siradjboulemaiz. All rights reserved | This template is made by{' '}
        <span className='cp'>siradj</span>
        </p>
  </section>
</footer>
    </div>
  );
};

export default HomePage;