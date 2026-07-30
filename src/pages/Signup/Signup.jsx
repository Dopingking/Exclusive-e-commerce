import "./Signup.scss";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { FcGoogle } from "react-icons/fc";

import { auth } from "../../firebase/firebase";

import Button from "../../components/ui/Button/Button";
import Footer from "../../components/layout/Footer/Footer";

import signupImg from "../../assets/images/signup-side-img.png";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
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
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          formData.emailOrPhone,
          formData.password
        );

      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      await signOut(auth);

      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-image">
            <img
              src={signupImg}
              alt="Shopping Cart and Phone"
            />
          </div>

          <div className="signup-form-wrapper">
            <div className="signup-header">
              <h2>Create an account</h2>
              <p>Enter your details below</p>
            </div>

            <form
              className="signup-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="emailOrPhone"
                  placeholder="Email or Phone Number"
                  value={formData.emailOrPhone}
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
                className="create-account-btn"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>

              <button
                type="button"
                className="google-signup-btn"
              >
                <FcGoogle size={22} />
                <span>Sign up with Google</span>
              </button>

              <div className="login-redirect">
                <span>Already have an account?</span>

                <Link to="/login">
                  Log in
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

export default Signup;