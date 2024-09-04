import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div>
      <div
        className="header-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <div className="username-display">
          <h3 className="welcome">{"Welcome, Lawal Wahab"}</h3>
        </div>
        <div className="merchant-upgrade">
          <h3 className="welcome">Upgrade To Merchant</h3>
          <div className="merchant-icons">
            <Link to="/notification" title="notification">
              <div className="notification-icon merchant-ic">
                <NotificationsOutlinedIcon />
              </div>
            </Link>
            <Link to="/profile" title="profile">
              <div className="User-icon merchant-ic">
                <Person2OutlinedIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
