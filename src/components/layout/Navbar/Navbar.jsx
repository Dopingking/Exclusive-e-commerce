import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaBox,
  FaTimesCircle,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

import "./Navbar.scss";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar__container">
        <div className="navbar__logo">
          <NavLink to="/">Exclusive</NavLink>
        </div>

        <nav className="navbar__links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </nav>

        <div className="navbar__actions">
          <div className="search-box">
            <input type="text" placeholder="What are you looking for?" />
            <FaSearch />
          </div>

          <NavLink to="/wishlist" className="wishlist-icon-link">
            <FaHeart />
            {wishlistItems.length > 0 && (
              <span className="wishlist-badge">{wishlistItems.length}</span>
            )}
          </NavLink>

          <NavLink to="/cart" className="cart-icon-link">
            <FaShoppingCart />
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </NavLink>

          <div className="user-menu-container" ref={dropdownRef}>
            <button
              className={`user-icon-btn ${dropdownOpen ? "active" : ""}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaRegUser />
            </button>

            {dropdownOpen && (
              <div className="user-dropdown">
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/account");
                  }}
                >
                  <FaRegUser />
                  <span>Manage My Account</span>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/orders");
                  }}
                >
                  <FaBox />
                  <span>My Order</span>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/cancellations");
                  }}
                >
                  <FaTimesCircle />
                  <span>My Cancellations</span>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/reviews");
                  }}
                >
                  <FaStar />
                  <span>My Reviews</span>
                </div>
                <div
                  className="dropdown-item logout"
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/login");
                  }}
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;