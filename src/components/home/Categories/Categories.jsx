import "./Categories.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  FaMobileAlt,
  FaLaptop,
  FaCamera,
  FaHeadphones,
  FaGamepad,
  FaTv,
} from "react-icons/fa";

import SectionTitle from "../../common/SectionTitle/SectionTitle";

function Categories() {
  const categories = [
    { name: "Phones", icon: <FaMobileAlt /> },
    { name: "Computers", icon: <FaLaptop /> },
    { name: "Cameras", icon: <FaCamera /> },
    { name: "Headphones", icon: <FaHeadphones /> },
    { name: "Gaming", icon: <FaGamepad /> },
    { name: "TV", icon: <FaTv /> },
  ];

  return (
    <section className="categories container">
      <SectionTitle
        subtitle="Categories"
        title="Browse By Category"
      />

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={6}
        spaceBetween={20}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="category-card">
              <div className="icon">{category.icon}</div>
              <p>{category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Categories;