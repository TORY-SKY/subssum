import SideBar from "./SideBar";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import UserNavbar from "./UserNavbar";
import LogoutBtn from "./LogoutBtn";
import { useRef, useState } from "react";
const Dashboard = () => {
  // Copy function

  const textRef = useRef<HTMLParagraphElement | null>(null);
  const copyText = () => {
    if (textRef.current) {
      // Access the text content of the ref element
      const textToCopy = textRef.current.innerText;
      // Use the Clipboard API to copy text
      navigator.clipboard.writeText(textToCopy).then(
        () => {
          alert("Text copied successfully!");
        },
        (err) => {
          console.error("Failed to copy text: ", err);
        }
      );
    }
  };
  // Share referral code function
  const [referralCode] = useState<string>("18/52ha089");
  const ShareReferralCode = () => {
    // Check if the browser supports the Web Share API
    if (navigator.share) {
      navigator
        .share({
          title:
            "Check out this amazing site where you can covert your airtime to data, pretty much",
          text: `Join me on this platform and get rewards using my referral code @ ${referralCode}`,
          url: referralCode,
        })
        .then(() => {
          console.log("Successfully shared!");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      alert(
        "Sharing is not supported in your browser. Please copy the link manually."
      );
    }
  };

  return (
    <div className="dashboard-container">
      <div className="leftSide">
        <SideBar />
        <LogoutBtn />
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
                  <span className="referral-code" ref={textRef} style={{}}>
                    {referralCode}
                  </span>
                </div>
                <div className="operations">
                  {/* copy, edit and share operation */}
                  <div
                    className="copy"
                    onClick={copyText}
                    style={{ cursor: "pointer" }}
                  >
                    <ContentCopyOutlinedIcon />
                    <span>Copy</span>
                  </div>
                  <div className="copy">
                    <DriveFileRenameOutlineOutlinedIcon />
                    <span>Edit</span>
                  </div>
                  <div
                    className="copy"
                    onClick={ShareReferralCode}
                    style={{ cursor: "pointer" }}
                  >
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
