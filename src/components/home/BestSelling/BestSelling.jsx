import "./BestSelling.scss";
import { products } from "../../../data/products"; 
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import ProductCard from "../../product/ProductCard/ProductCard";
import Button from "../../ui/Button/Button";

function BestSelling() {
  // Filter products marked as best selling
  const bestSellingProducts = products.filter((product) => product.isBestSelling);

  return (
    <section className="best-selling container">
      <SectionTitle subtitle="This Month" title="Best Selling Products">
        <Button>View All</Button>
      </SectionTitle>

      <div className="best-selling__grid">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default BestSelling;