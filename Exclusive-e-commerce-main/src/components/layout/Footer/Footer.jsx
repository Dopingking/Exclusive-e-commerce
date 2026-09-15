import "./Footer.scss";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer__grid">

        <div>
          <h2>Exclusive</h2>

          <h4>Subscribe</h4>

          <p>Get 10% off your first order</p>

          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <h4>Support</h4>

          <p>111 Bijoy sarani, Dhaka, Bangladesh.</p>

          <p>exclusive@gmail.com</p>

          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h4>Account</h4>

          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h4>Quick Link</h4>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Download App</h4>

          <p>Save $3 with App New User Only</p>

          <div className="socials">

            <FaFacebookF />

            <FaTwitter />

            <FaInstagram />

            <FaLinkedinIn />

          </div>

        </div>

      </div>

      <div className="copyright">
        © Copyright Exclusive 2026. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;