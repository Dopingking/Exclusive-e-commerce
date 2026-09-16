import "./ExploreProducts.scss";
import { products } from "../../../data/products";
import ProductCard from "../../product/ProductCard/ProductCard";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../ui/Button/Button";

function ExploreProducts() {
  // Filter specifically for the items you want to display in this section
  const exploreProducts = products.filter(
    (product) => product.id >= 10 && product.id <= 17
  );

  return (
    <section className="explore-products container">
      <SectionTitle
        subtitle="Our Products"
        title="Explore Our Products"
      />

      <div className="explore-products__grid">
        {exploreProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="explore-products__button">
        <Button>View All Products</Button>
      </div>
    </section>
  );
}

export default ExploreProducts;