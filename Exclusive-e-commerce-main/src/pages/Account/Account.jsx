import "./Account.scss";
import { useAuth } from "../../context/AuthContext";

function Account() {
  const { currentUser } = useAuth();

  return (
    <section className="account-page">
      <div className="container">
        <div className="account-top">
          <div className="breadcrumb">
            Home <span>/</span> My Account
          </div>

          <div className="welcome">
            Welcome!{" "}
            <span>
              {currentUser?.displayName || "Guest"}
            </span>
          </div>
        </div>

        <div className="account-layout">
          <aside className="account-sidebar">
            <div className="menu-group">
              <h4>Manage My Account</h4>

              <ul>
                <li className="active">My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>
            </div>

            <div className="menu-group">
              <h4>My Orders</h4>

              <ul>
                <li>My Returns</li>
                <li>My Cancellations</li>
              </ul>
            </div>

            <div className="menu-group">
              <h4>My Wishlist</h4>
            </div>
          </aside>

          <div className="account-content">
  <h2>Edit Your Profile</h2>

  <form className="profile-form">

    <div className="form-row">

      <div className="form-group">
        <label>First Name</label>

        <input
          type="text"
          defaultValue={currentUser?.displayName || ""}
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>

        <input
          type="text"
          placeholder="Solomon"
        />
      </div>

    </div>

    <div className="form-row">

      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          defaultValue={currentUser?.email || ""}
        />
      </div>

      <div className="form-group">
        <label>Address</label>

        <input
          type="text"
          placeholder="Lagos, Nigeria"
        />
      </div>

    </div>

    <div className="password-section">

      <h4>Password Changes</h4>

      <input
        type="password"
        placeholder="Current Password"
      />

      <input
        type="password"
        placeholder="New Password"
      />

      <input
        type="password"
        placeholder="Confirm New Password"
      />

    </div>

    <div className="form-actions">

      <button
        type="button"
        className="cancel-btn"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="save-btn"
      >
        Save Changes
      </button>

    </div>

  </form>
</div>
        </div>
      </div>
    </section>
  );
}

export default Account;