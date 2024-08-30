import { Switch } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/reset.css";
import loogo from "./assets/images/loggo.svg";
import { SidebarData } from "./SidebarData";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const SideBar = () => {
  return (
    <div
      className="side-bar-comp"
      style={{ height: "100vh", paddingLeft: "25px", paddingRight: "25px" }}
    >
      <div className="sidebar-logo">
        <img src={loogo} alt="logo" />
      </div>
      <ul className="link-tag-container">
        <div className="icon-lnk">
          {SidebarData.map((data, key) => (
            <li
              className="row"
              id={window.location.pathname == data.link ? "active" : ""}
              key={key}
              onClick={() => (window.location.pathname = data.link)}
            >
              <div className="icon">{data.icon}</div>
              <div className="title">
                {data.title}{" "}
                <span className="arrow">
                  <ExpandMoreOutlinedIcon />
                </span>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
