import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "../../components/ui/Button/Button";
import Footer from "../../components/layout/Footer/Footer";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="breadcrumb">
          <span>Home</span> / <span>Contact</span>
        </div>

        <div className="contact-wrapper">
          {/* Info Side */}
          <div className="contact-info">
            <div className="info-block">
              <div className="icon-title">
                <div className="icon-circle">
                  <FaPhoneAlt />
                </div>
                <h3>Call To Us</h3>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>

            <hr className="divider" />

            <div className="info-block">
              <div className="icon-title">
                <div className="icon-circle">
                  <FaEnvelope />
                </div>
                <h3>Write To Us</h3>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
              <input type="text" placeholder="Your Phone *" required />
            </div>
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <div className="form-submit">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;