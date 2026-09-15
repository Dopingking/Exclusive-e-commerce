import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateQuantity, removeFromCart } from "../../redux/slices/cartSlice";
import Button from "../../components/ui/Button/Button";
import Footer from "../../components/layout/Footer/Footer";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity: Number(quantity) }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page__breadcrumb">
          <Link to="/">Home</Link> / <span>Cart</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-page__empty">
            <h2>Your Cart Is Empty</h2>
            <Link to="/">
              <Button>Return To Shop</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-table">
              <div className="cart-table__header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>

              {cartItems.map((item) => (
                <div className="cart-table__row" key={item.id}>
                  <div className="cart-table__product">
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      ×
                    </button>
                    <img src={item.image} alt={item.title} />
                    <span>{item.title}</span>
                  </div>
                  <span>${item.price}</span>
                  <div className="cart-table__quantity">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                    />
                  </div>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="cart-bottom-section">
              <div className="coupon-section">
                <input type="text" placeholder="Coupon Code" />
                <Button>Apply Coupon</Button>
              </div>

              <div className="cart-total-card">
                <h3>Cart Total</h3>
                <div className="summary-item">
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                <hr />
                <div className="summary-item">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="summary-item total">
                  <span>Total:</span>
                  <span>${subtotal}</span>
                </div>
                <Link to="/checkout">
                  <Button style={{ width: "100%", marginTop: "20px" }}>
                    Proceed to checkout
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {/* 2. Render Footer at the bottom of the page */}
      <Footer />
    </div>
  );
}

export default Cart;