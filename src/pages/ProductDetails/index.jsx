import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductGallery from "../../components/product/ProductGallery/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo/ProductInfo";
import ProductActions from "../../components/product/ProductActions/ProductActions";
import RelatedItems from "../../components/product/RelatedItems/RelatedItems";
import "./ProductDetails.scss";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "100px 0" }}>
        <h1>Product Not Found</h1>
        <Link to="/" style={{ color: "#DB4444", marginTop: "20px", display: "inline-block" }}>
          Back to Home
        </Link>
      </div>
    );
  }

  // Use product.images if available, otherwise fallback to repeating the main product image
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.image, product.image, product.image, product.image];

  return (
    <div className="product-details-page">
      <div className="container">
        
        {/* Breadcrumb */}
        <div className="product-details-page__breadcrumb">
          <Link to="/">Account</Link> / <Link to="/">Gaming</Link> / <span>{product.title}</span>
        </div>

        {/* Main Grid / Layout */}
        <div className="product-details-page__layout">
          
          {/* Left: Dynamic Image Gallery */}
          <ProductGallery images={images} />

          {/* Right: Info + Actions */}
          <div className="product-details-page__right">
            <ProductInfo product={product} />
            <ProductActions product={product} />
          </div>

        </div>

        {/* Related Items Section */}
        <RelatedItems currentProductId={product.id} />

      </div>
    </div>
  );
}

export default ProductDetails;