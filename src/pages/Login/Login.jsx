import "./Login.scss";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { FcGoogle } from "react-icons/fc";

import { auth } from "../../firebase/firebase";

import Button from "../../components/ui/Button/Button";
import Footer from "../../components/layout/Footer/Footer";

import loginImg from "../../assets/images/signup-side-img.png";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-image">
            <img
              src={loginImg}
              alt="Shopping Cart and Phone"
            />
          </div>

          <div className="login-form-wrapper">
            <div className="login-header">
              <h2>Log in to Exclusive</h2>
              <p>Enter your details below</p>
            </div>

            <form
              className="login-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email or Phone Number"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && (
                <p className="error-message">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                className="login-btn"
                disabled={loading}
              >
                {loading ? "Logging In..." : "Log In"}
              </Button>

              <button
                type="button"
                className="google-login-btn"
              >
                <FcGoogle size={22} />
                <span>Continue with Google</span>
              </button>

              <div className="signup-redirect">
                <span>Don't have an account?</span>

                <Link to="/signup">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;