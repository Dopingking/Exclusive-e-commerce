import "./Wishlist.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/slices/wishlistSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import Button from "../../components/ui/Button/Button";
import Footer from "../../components/layout/Footer/Footer";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleMoveAllToCart = () => {
    wishlistItems.forEach((item) => {
      dispatch(addToCart({ ...item, quantity: 1 }));
      dispatch(removeFromWishlist(item.id));
    });
  };

  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="wishlist-header">
          <h2>Wishlist ({wishlistItems.length})</h2>
          {wishlistItems.length > 0 && (
            <Button outline onClick={handleMoveAllToCart}>
              Move All To Bag
            </Button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="wishlist-empty">
            <p>Your Wishlist is empty.</p>
            <Link to="/">
              <Button>Return To Shop</Button>
            </Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-card__image-container">
                  <button
                    className="delete-btn"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  >
                    ×
                  </button>
                  <img src={item.image} alt={item.title} />
                  <button
                    className="add-to-cart-btn"
                    onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
                  >
                    Add To Cart
                  </button>
                </div>
                <div className="product-card__content">
                  <h3>{item.title}</h3>
                  <div className="product-card__price">
                    <span className="current-price">${item.price}</span>
                    {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Wishlist;