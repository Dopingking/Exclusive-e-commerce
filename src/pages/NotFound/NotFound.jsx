import { Link } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import Footer from "../../components/layout/Footer/Footer";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="breadcrumb">
          <span>Home</span> / <span>404 Error</span>
        </div>

        <div className="error-content">
          <h1>404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
          <Link to="/">
            <Button>Back to home page</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default NotFound;