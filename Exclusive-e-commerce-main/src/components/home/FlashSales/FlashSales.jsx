import "./FlashSales.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { products } from "../../../data/products";

import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Countdown from "../../common/Countdown/Countdown";
import ProductCard from "../../product/ProductCard/ProductCard";
import Button from "../../ui/Button/Button";

function FlashSales() {
  const flashSales = products.filter(
    (product) => product.isFlashSale
  );

  return (
    <section className="flash-sales container">
      <SectionTitle subtitle="Today's" title="Flash Sales">
        <Countdown />
      </SectionTitle>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1.15, spaceBetween: 16 },
          480: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {flashSales.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flash-sales__button">
        <Button>View All Products</Button>
      </div>
    </section>
  );
}

export default FlashSales;