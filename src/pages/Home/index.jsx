import Hero from "../../components/home/Hero/Hero";
import FlashSales from "../../components/home/FlashSales/FlashSales";
import Categories from "../../components/home/Categories/Categories";
import BestSelling from "../../components/home/BestSelling/BestSelling";
import MusicBanner from "../../components/home/MusicBanner/MusicBanner";
import ExploreProducts from "../../components/home/ExploreProducts/ExploreProducts";
import NewArrival from "../../components/home/NewArrival/NewArrival";
import Services from "../../components/home/Services/Services";
import Footer from "../../components/layout/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <MusicBanner />
      <ExploreProducts />
      <NewArrival />
      <Services />
      <Footer />
    </>
  );
}

export default Home;