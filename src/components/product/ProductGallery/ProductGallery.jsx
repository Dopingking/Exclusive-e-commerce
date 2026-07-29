import { useState, useEffect } from "react";
import "./ProductGallery.scss";

function ProductGallery({ images = [] }) {
  // Always default to the first image of the current product array
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  // CRITICAL FIX: Update selectedImage whenever the images prop changes (i.e. when navigating to a new product)
  useEffect(() => {
    setSelectedImage(images[0] || "");
  }, [images]);

  if (!images.length) {
    return <div className="product-gallery__empty">No images available</div>;
  }

  return (
    <div className="product-gallery">
      {/* Thumbnails on the left */}
      <div className="product-gallery__thumbnails">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`thumbnail-item ${selectedImage === img ? "active" : ""}`}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Large Main Image on the right */}
      <div className="product-gallery__main">
        <img src={selectedImage} alt="Main Product" />
      </div>
    </div>
  );
}

export default ProductGallery;