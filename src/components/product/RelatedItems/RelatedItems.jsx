import { Link } from "react-router-dom";
import { products } from "../../../data/products";
import "./RelatedItems.scss";

function RelatedItems({ currentProductId }) {
  // Filter out the current product and grab 4 related items
  const relatedList = products
    .filter((item) => item.id !== Number(currentProductId))
    .slice(0, 4);

  return (
    <div className="related-items">
      {/* Section Header with Red Tag */}
      <div className="related-items__header">
        <div className="section-tag">
          <span className="tag-box"></span>
          <h2>Related Item</h2>
        </div>
      </div>

      {/* Grid of Products */}
      <div className="related-items__grid">
        {relatedList.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="related-card-link">
            <div className="related-card">
              <div className="related-card__image">
                {product.discount && <span className="discount">-{product.discount}%</span>}
                <img src={product.image} alt={product.title} />
              </div>
              <div className="related-card__content">
                <h3>{product.title}</h3>
                <div className="prices">
                  <span className="price">${product.price}</span>
                  {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
                </div>
                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span className="reviews">({product.reviews || 99})</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedItems;