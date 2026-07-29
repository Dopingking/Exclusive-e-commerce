import "./Services.scss";

import {
  FaTruck,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaTruck />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <FaShieldAlt />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="services container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="icon">
            {service.icon}
          </div>

          <h3>{service.title}</h3>

          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Services;