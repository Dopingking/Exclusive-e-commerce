import "./Hero.scss";
import heroPhone from "../../../assets/images/hero/hero-phone.png";

function Hero() {
  return (
    <section className="hero container">

      <aside className="hero__sidebar">

        <ul>
          <li>Woman's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>

      </aside>

      <div className="hero__banner">

        <div className="hero__content">

          <span>iPhone 14 Series</span>

          <h1>
            Up to 10% <br />
            off Voucher
          </h1>

          <button>Shop Now →</button>

        </div>

        <div className="hero__image">

         <img
          src={heroPhone}
          alt="iPhone 14"
        />

        </div>

      </div>

    </section>
  );
}

export default Hero;