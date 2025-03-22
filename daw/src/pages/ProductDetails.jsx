import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Context/cartContext';
import products from '../product';
import '../css/ProductDetails.css';

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-description">{product.describe}</p>
        <p className="product-price">{product.price}</p>
        <div className="quantity-selector">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantity}
          />
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;