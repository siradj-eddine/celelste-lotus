import React, { useState } from 'react';
import { useCart } from '../Context/cartContext';
import '../css/CheckOut.css'; 

const CheckOut = () => {
  const { cart } = useCart();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });

  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  // Calculate subtotal price
  const subtotalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

 
  const shippingPrice = 10.0;

  // Calculate total price
  const totalPrice = subtotalPrice + shippingPrice;


  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };


  const handleShippingInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
 ;
  };

  return (
    <div>
      <h1>Checkout</h1>
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-items">
          {cart.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty.</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="checkout-item">
                <div className="item-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="item-details">
                  <h2>{product.name}</h2>
                  <p className="item-category">{product.Category}</p>
                  <p className="item-price">${product.price.toFixed(2)}</p>
                  <p className="item-quantity">Quantity: {product.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="forms-container">
            <div className="shipping-form">
              <h2>Shipping Details</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={shippingDetails.fullName}
                    onChange={handleShippingInputChange}
                    placeholder="FULL NAME"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingDetails.address}
                    onChange={handleShippingInputChange}
                    placeholder="ADDRESS"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleShippingInputChange}
                    placeholder="EX : CONSTANTINE"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={shippingDetails.postalCode}
                    onChange={handleShippingInputChange}
                    placeholder="275000"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={shippingDetails.country}
                    onChange={handleShippingInputChange}
                    placeholder="ALGERIA"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="payment-form">
              <h2>Payment Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentInputChange}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={paymentDetails.expiryDate}
                    onChange={handlePaymentInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handlePaymentInputChange}
                    placeholder="123"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nameOnCard">Name on Card</label>
                  <input
                    type="text"
                    id="nameOnCard"
                    name="nameOnCard"
                    value={paymentDetails.nameOnCard}
                    onChange={handlePaymentInputChange}
                    placeholder="EX : SIRADJ  "
                    required
                  />
                </div>
                <div className="checkout-summary">
                  <div className="price-details">
                    <p>Subtotal: <span>${subtotalPrice.toFixed(2)}</span></p>
                    <p>Shipping: <span>${shippingPrice.toFixed(2)}</span></p>
                    <p className="total-price">Total: <span>${totalPrice.toFixed(2)}</span></p>
                  </div>
                  <button type="submit" className="checkout-btn">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default CheckOut;