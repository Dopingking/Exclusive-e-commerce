import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

import Button from "../../ui/Button/Button";

import { addToCart } from "../../../redux/slices/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../../redux/slices/wishlistSlice";

import "./ProductCard.scss";

function ProductCard({
  id,
  image,
  title,
  price,
  oldPrice,
  discount,
  rating = 5,
  reviews = 88,
}) {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const isInWishlist = wishlistItems.some((item) => item.id === id);

  const handleAddToCart = (e) => {
    e.preventDefault();

    dispatch(
      addToCart({
        id,
        image,
        title,
        price,
        quantity: 1,
      })
    );
  };

  const handleWishlist = (e) => {
    e.preventDefault();

    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(
        addToWishlist({
          id,
          image,
          title,
          price,
          oldPrice,
          discount,
          rating,
          reviews,
        })
      );
    }
  };

  return (
    <Link
      to={`/product/${id}`}
      className="product-card__link"
    >
      <div className="product-card">

        <div className="product-card__image">

          {discount && (
            <span className="discount">
              -{discount}%
            </span>
          )}

          <div className="actions">

            <FaHeart
              onClick={handleWishlist}
              className={isInWishlist ? "active-heart" : ""}
            />

            <FaEye />

          </div>

          <img src={image} alt={title} />

        </div>

        <div onClick={handleAddToCart}>
          <Button>Add To Cart</Button>
        </div>

        <div className="product-card__content">

          <h3>{title}</h3>

          <div className="prices">

            <span className="price">
              ${price}
            </span>

            {oldPrice && (
              <span className="old-price">
                ${oldPrice}
              </span>
            )}

          </div>

          <div className="rating">

            {Array.from({ length: Math.round(rating) }).map((_, index) => (
              <FaStar key={index} />
            ))}

            <span>({reviews})</span>

          </div>

        </div>

      </div>
    </Link>
  );
}

export default ProductCard;