import React, { useState,  } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/shop.css';
import '../css/Responsive.css';
import products from '../product';
import { FaPlus, FaCheck } from 'react-icons/fa';
// import { useCart } from '../Context/cartContext';

const Shop = () => {
  const [isAdded, setIsAdded] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const { category } = useParams(); 
  // const {AddToCart} = useCart();
  // Filter products based on the category
  const filteredProducts = products.filter((product) => {
    const productCategory = String(product.Category || '').toLowerCase();
    const productDescription = String(product.describe || '').toLowerCase();
    const query = searchQuery.toLowerCase();
  
    // Check if the product matches the category and search query
    const matchesCategory = !category || productCategory === category.toLowerCase();
    const matchesSearch = productCategory.includes(query) || productDescription.includes(query);
  
    return matchesCategory && matchesSearch;
  });

  const handleClickBtn = (product) => {
    setIsAdded((prevIsAdded) => ({
      ...prevIsAdded,
      [product.id]: !prevIsAdded[product.id],
    }));
  };

  return (
    <div className="shop">
      <section className="title">
        <h1>Welcome to the Shop</h1>
        <p>Here you can find a variety of products.</p>
        <input 
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for products..."
        className='search' />
      </section>
      <section className="products">
        <h2 className="categ">{category ? `${category}` : 'All Products'}</h2>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div className="product" key={product.id}>
              <Link to={`/productDetails/${product.id}`}>
                <img src={product.image} alt={product.Category} />
              </Link>
              <h3>{product.Category}</h3>
              <p>{product.describe}</p>
              <p>${product.price}</p>
              <Link to={`/productDetails/${product.id}`}><button className="btn" onClick={() => handleClickBtn(product)}>
                {isAdded[product.id] ? (
                  <>
                    Added to cart <FaCheck />
                  </>
                ) : (
                  <>
                    <FaPlus /> Add to cart
                  </>
                )}
              </button></Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;