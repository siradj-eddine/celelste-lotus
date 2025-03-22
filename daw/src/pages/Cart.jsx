import { useCart } from '../Context/cartContext';
import '../css/Cart.css';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cart, setCart } = useCart();

  // Function to handle quantity change
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h2>{item.name}</h2>
                <p className="item-category">{item.Category}</p>
                <p className="item-price">${item.price}</p>
                <div className="quantity-control">
                  <label htmlFor={`quantity-${index}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${index}`}
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                  />
                </div>
                <button
                  className="remove-item-btn"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <Link to='/checkout'><button className="checkout-btn">Proceed to Checkout</button></Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
