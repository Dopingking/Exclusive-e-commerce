import { useState } from "react";
import { FaRegHeart, FaHeart, FaSyncAlt, FaTruck } from "react-icons/fa";
import "./ProductActions.scss";

function ProductActions({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // We will connect this to Redux Toolkit dispatch later!
    console.log(`Added ${quantity} of ${product.title} to cart`);
  };

  return (
    <div className="product-actions">
      
      {/* Quantity & Buy Controls */}
      <div className="product-actions__row">
        
        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button className="plus" onClick={handleIncrease}>+</button>
        </div>

        {/* Buy Now Button */}
        <button className="buy-btn" onClick={handleAddToCart}>
          Buy Now / Add To Cart
        </button>

        {/* Wishlist Toggle Icon (Will use the Toggle render prop soon!) */}
        <div 
          className={`wishlist-icon ${isWishlisted ? "active" : ""}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </div>

      </div>

      {/* Delivery & Return Info Box (Figma Spec) */}
      <div className="delivery-box">
        
        <div className="delivery-item">
          <FaTruck className="delivery-icon" />
          <div className="delivery-text">
            <h4>Free Delivery</h4>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
        </div>

        <hr />

        <div className="delivery-item">
          <FaSyncAlt className="delivery-icon" />
          <div className="delivery-text">
            <h4>Return Delivery</h4>
            <p>Free 30 Days Delivery Returns. <span>Details</span></p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ProductActions;