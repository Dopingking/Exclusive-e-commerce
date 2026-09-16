import "./Checkout.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button/Button";

function Checkout() {
  const { cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page container">
      <div className="checkout-page__breadcrumb">
        <Link to="/">Account</Link> / <Link to="/cart">My Cart</Link> / <span>Checkout</span>
      </div>

      <h2>Billing Details</h2>

      <div className="checkout-grid">
        {/* Left Side: Billing Form */}
        <form className="billing-form">
          <div className="form-group">
            <label>First Name*</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Street Address*</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Apartment, floor, etc. (optional)</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Town/City*</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Phone Number*</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email Address*</label>
            <input type="email" required />
          </div>

          <div className="form-checkbox">
            <input type="checkbox" id="save-info" />
            <label htmlFor="save-info">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>

        {/* Right Side: Order Summary & Payment */}
        <div className="order-summary-card">
          <div className="order-items">
            {cartItems.map((item) => (
              <div className="order-item" key={item.id}>
                <div className="item-info">
                  <img src={item.image} alt={item.title} />
                  <span>{item.title}</span>
                </div>
                <span className="item-price">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <hr />
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="summary-row total">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
          </div>

          <div className="payment-methods">
            <div className="payment-option">
              <div>
                <input type="radio" name="payment" id="bank" defaultChecked />
                <label htmlFor="bank">Bank</label>
              </div>
              <div className="bank-icons">
                {/* Add bank/card icons here if needed */}
              </div>
            </div>
            <div className="payment-option">
              <div>
                <input type="radio" name="payment" id="cash" />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
            </div>
          </div>

          <div className="coupon-box">
            <input type="text" placeholder="Coupon Code" />
            <Button>Apply Coupon</Button>
          </div>

          <Button className="place-order-btn">Place Order</Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;