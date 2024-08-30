import SideBar from "./SideBar";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import UserNavbar from "./UserNavbar";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="leftSide">
        <SideBar />
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
      <div className="dashboard-rightSide">
        <UserNavbar />
        <div className="dashboard-content">
          <div className="userActivities-container">
            <div className="activity wallet-container">
              <div className="wallet">
                <div className="wall-text">Wallet Balance</div>
                <h1 className="available-balance">₦3000</h1>
              </div>
              <button className="fund-wallet">Fund Wallet</button>
            </div>
            <div className="activity referral-container">
              <div className="referral">
                <div className="Referra-l">Referral</div>
                <div className="referral-code-container">
                  Referral Code:{" "}
                  <span className="referral-code" style={{}}>
                    18/52ha089
                  </span>
                </div>
                <div className="operations">
                  {/* copy, edit and share operation */}
                  <div className="copy">
                    <ContentCopyOutlinedIcon />
                    <span>Copy</span>
                  </div>
                  <div className="copy">
                    <DriveFileRenameOutlineOutlinedIcon />
                    <span>Edit</span>
                  </div>
                  <div className="copy">
                    <ReplyOutlinedIcon />
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="activity total-referral-container">
              <div className="totalReferral">
                <div className="sub-total">
                  <div className="Referra-l">Total referrals made</div>
                  <h1 className="available-balance">0</h1>
                </div>
                <div className="operations">
                  {/* copy, edit and share operation */}
                  <div className="copy">
                    <AccountBalanceWalletOutlinedIcon />
                    <span>Cashout</span>
                  </div>
                </div>
              </div>
              <div className="current-wallet-bonus">
                <div className="Referra-l">Current wallet Bonus</div>
                <h1 className="available-balance">₦0.00</h1>
              </div>
            </div>
          </div>
          <div className="userCards">
            <div className="user-cards">
              <h3 className="card-dis">Cards</h3>
              <div className="card-container">
                You Have No <br /> Saved Cards
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
