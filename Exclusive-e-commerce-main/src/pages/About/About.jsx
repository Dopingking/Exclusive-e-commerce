import "./About.scss";
import { 
  FaStore, 
  FaDollarSign, 
  FaShoppingBag, 
  FaShieldAlt, 
  FaTruck, 
  FaHeadset,
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";
import Footer from "../../components/layout/Footer/Footer";
import aboutImg from "../../assets/images/about-side-img.png";


import tomImg from "../../assets/images/tom-cruise.png";
import emmaImg from "../../assets/images/emma-watson.png";
import willImg from "../../assets/images/will-smith.png";

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="breadcrumb">
          <span>Home</span> / <span>About</span>
        </div>

        {/* Our Story Section */}
        <section className="our-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presence in Bangladesh. Supported by wide
              range of tailored marketing, data and service solutions, Exclusive has
              10,5 thousand sellers and 300 brands and serves 3 millions customers
              across the region.
            </p>
            <p>
              Exclusive has more than 1 million products to offer, growing at a very
              fast. Exclusive offers a diverse assortment in categories ranging
              from consumer.
            </p>
          </div>
          <div className="story-image">
            <img src={aboutImg} alt="Shopping Women" />
          </div>
        </section>

        {/* Stats Grid */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="icon-box"><FaStore /></div>
            <h3>10.5k</h3>
            <p>Sellers active on our site</p>
          </div>
          
          <div className="stat-card active">
            <div className="icon-box"><FaDollarSign /></div>
            <h3>33k</h3>
            <p>Monthly Product Sale</p>
          </div>

          <div className="stat-card">
            <div className="icon-box"><FaShoppingBag /></div>
            <h3>45.5k</h3>
            <p>Customer active in our site</p>
          </div>

          <div className="stat-card">
            <div className="icon-box"><FaShieldAlt /></div>
            <h3>25k</h3>
            <p>Annual gross sale in our site</p>
          </div>
        </section>

        {/* Team Section with Images Added */}
        <section className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <img src={tomImg} alt="Tom Cruise" />
            </div>
            <h3>Tom Cruise</h3>
            <p>Founder & Chairman</p>
            <div className="social-links">
              <FaTwitter /> <FaInstagram /> <FaLinkedinIn />
            </div>
          </div>

          <div className="team-member">
            <div className="member-image">
              <img src={emmaImg} alt="Emma Watson" />
            </div>
            <h3>Emma Watson</h3>
            <p>Managing Director</p>
            <div className="social-links">
              <FaTwitter /> <FaInstagram /> <FaLinkedinIn />
            </div>
          </div>

          <div className="team-member">
            <div className="member-image">
              <img src={willImg} alt="Will Smith" />
            </div>
            <h3>Will Smith</h3>
            <p>Product Designer</p>
            <div className="social-links">
              <FaTwitter /> <FaInstagram /> <FaLinkedinIn />
            </div>
          </div>
        </section>

        {/* Services Footer Perks */}
        <section className="services-grid">
          <div className="service-card">
            <div className="icon-circle"><FaTruck /></div>
            <h4>FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
          </div>

          <div className="service-card">
            <div className="icon-circle"><FaHeadset /></div>
            <h4>24/7 CUSTOMER SERVICE</h4>
            <p>Friendly 24/7 customer support</p>
          </div>

          <div className="service-card">
            <div className="icon-circle"><FaShieldAlt /></div>
            <h4>MONEY BACK GUARANTEE</h4>
            <p>We return money within 30 days</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default About;