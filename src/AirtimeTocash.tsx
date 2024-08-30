import { useState } from "react";
import SideBar from "./SideBar";
import UserNavbar from "./UserNavbar";

const AirtimeTocash: React.FC = () => {
  const [currentForm, setCurrentForm] = useState(0); // Track the current form index

  // Function to handle form switching
  const switchForm = (formIndex: number) => {
    setCurrentForm(formIndex);
  };
  return (
    <div className="Airtime-to-cash-container">
      <div className="airtime-leftside">
        <SideBar />
      </div>
      <div className="airtime-right-side">
        <UserNavbar />
        <div className="airtime-containre">
          <div className="unique-form-switcher">
            <div className="unique-form-buttons">
              <div
                className={`unique-form-button ${
                  currentForm === 0 ? "unique-active" : ""
                }`}
                onClick={() => switchForm(0)}
              >
                <p>Fill Info</p>
                <div
                  className={`bar ${currentForm == 0 ? "activated" : ""}`}
                ></div>
              </div>
              <div
                className={`unique-form-button ${
                  currentForm === 1 ? "unique-active" : ""
                }`}
                onClick={() => switchForm(1)}
              >
                <p>Make Payment</p>
                <div
                  className={`bar ${currentForm == 1 ? "activated" : ""}`}
                ></div>
              </div>
              <div
                className={`unique-form-button ${
                  currentForm === 2 ? "unique-active" : ""
                }`}
                onClick={() => switchForm(2)}
              >
                <p>View Receipt</p>
                <div
                  className={`bar ${currentForm == 2 ? "activated" : ""}`}
                ></div>
              </div>
            </div>
            <div className="unique-form-container">
              {currentForm === 0 && <ChangePasswordForm />}
              {currentForm === 1 && <ChangePinForm />}
              {currentForm === 2 && <ChangeEmailForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Change Password Form Component
const ChangePasswordForm: React.FC = () => (
  <div className="unique-form unique-slide-in">
    <h3>Airtime to Cash</h3>
    <div className="network-phoneN">
        
    </div>
    <button type="submit">Submit</button>
  </div>
);

// Change PIN Form Component
const ChangePinForm: React.FC = () => (
  <div className="unique-form unique-slide-in">
    <h3>Change PIN</h3>
    <input type="password" placeholder="New PIN" />
    <input type="password" placeholder="Confirm PIN" />
    <button type="submit">Submit</button>
  </div>
);

// Change Email Form Component (Additional Form)
const ChangeEmailForm: React.FC = () => (
  <div className="unique-form unique-slide-in">
    <h3>Change Email</h3>
    <input type="email" placeholder="New Email" />
    <input type="email" placeholder="Confirm Email" />
    <button type="submit">Submit</button>
  </div>
);
export default AirtimeTocash;
