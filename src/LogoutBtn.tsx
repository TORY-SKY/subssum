import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="logout-btn"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "22px",
          marginBottom: "22px",
          width: "197px",
        }}
      >
        <button
          onClick={() => navigate("/")}
          className="log-out"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            fontSize: "16px",
          }}
        >
          <div
            className="button-text-icon"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LogoutOutlinedIcon
              className="icon"
              style={{ marginRight: "8px" }}
            />
            <span>Log Out</span>
          </div>
          <ExpandMoreOutlinedIcon className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default LogoutBtn;
