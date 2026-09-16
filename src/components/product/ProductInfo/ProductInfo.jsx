import { useState } from "react";
import "./ProductInfo.scss";

function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <div className="product-info">
      <h2 className="product-info__title">{product.title}</h2>
      
      {/* Rating & Stock Status */}
      <div className="product-info__rating-row">
        <div className="stars">⭐⭐⭐⭐⭐ <span>(150 Reviews)</span></div>
        <span className="divider">|</span>
        <span className="stock in-stock">In Stock</span>
      </div>

      {/* Price */}
      <div className="product-info__price">${product.price}</div>

      {/* Description */}
      <p className="product-info__description">{product.description}</p>

      <hr className="divider-line" />

      {/* Colours Selection */}
      <div className="product-info__colors">
        <span>Colours:</span>
        <div className="color-options">
          <span 
            className={`color-dot blue ${selectedColor === "blue" ? "active" : ""}`} 
            onClick={() => setSelectedColor("blue")}
          ></span>
          <span 
            className={`color-dot red ${selectedColor === "active" ? "active" : ""}`} 
            onClick={() => setSelectedColor("red")}
          ></span>
        </div>
      </div>

      {/* Size Selection */}
      <div className="product-info__sizes">
        <span>Size:</span>
        <div className="size-options">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? "active" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;