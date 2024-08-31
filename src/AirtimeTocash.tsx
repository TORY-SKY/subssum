import React, { useState } from "react";
import SideBar from "./SideBar";
import UserNavbar from "./UserNavbar";
import "./UniqueFormSwitcher.css";
import CustomDropdown from "../src/NetworkProvidersData";
import LogoutBtn from "./LogoutBtn";

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
        <LogoutBtn />
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
                  className={`bar ${currentForm === 0 ? "activated" : ""}`}
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
                  className={`bar ${currentForm === 1 ? "activated" : ""}`}
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
                  className={`bar ${currentForm === 2 ? "activated" : ""}`}
                ></div>
              </div>
            </div>
            <div className="unique-form-container">
              <div className="formsss">
                <h1 className="Airtime-to-cash">Airtime to Cash</h1>
              </div>
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

// Change Password Form Component with Custom Dropdown
const ChangePasswordForm: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>("");

  // Handle dropdown selection change
  const handleSelectChange = (value: string) => {
    setSelectedProvider(value);
  };

  return (
    <div className="unique-form unique-slide-in">
      <div className="network-phoneN">
        <div>{selectedProvider}</div>
        {/* Use the CustomDropdown component */}
        <div className="info-inputs">
          <label htmlFor="Select Network">Select Network</label>
          <CustomDropdown onChange={handleSelectChange} />
        </div>
        <div className="info-inputs">
          <label htmlFor="Phone Number">Phone Number</label>
          <input type="text" className="phone-number" placeholder="08094562627" />
        </div>

        {/* You can also add other form fields here */}
      </div>
      <div className="amount-input">
        <label htmlFor="Phone Number">Amount</label>
        <input type="text" placeholder="₦5,000" />
      </div>
      <div className="amount-input">
        <label htmlFor="Phone Number">Airtime Share Pin</label>
        <input type="text" placeholder="3546576433" />
      </div>
      <button type="submit" className="Proceed-btn">
        Proceed
      </button>
    </div>
  );
};

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
