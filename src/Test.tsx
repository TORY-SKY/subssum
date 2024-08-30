import React, { useState } from "react";
import "./UniqueFormSwitcher.css"; // Updated CSS file name

const UniqueFormSwitcher: React.FC = () => {
  const [currentForm, setCurrentForm] = useState(0); // Track the current form index

  // Function to handle form switching
  const switchForm = (formIndex: number) => {
    setCurrentForm(formIndex);
  };

  return (
    <div className="unique-form-switcher">
      <div className="unique-form-buttons">
        <div
          className={`unique-form-button ${
            currentForm === 0 ? "unique-active" : ""
          }`}
          onClick={() => switchForm(0)}
        >
          <p>Fill Info</p>
          <div className="bar"></div>
        </div>
        <button
          className={`unique-form-button ${
            currentForm === 1 ? "unique-active" : ""
          }`}
          onClick={() => switchForm(1)}
        >
          Change PIN
        </button>
        <button
          className={`unique-form-button ${
            currentForm === 2 ? "unique-active" : ""
          }`}
          onClick={() => switchForm(2)}
        >
          Change Email
        </button>
      </div>
      <div className="unique-form-container">
        {currentForm === 0 && <ChangePasswordForm />}
        {currentForm === 1 && <ChangePinForm />}
        {currentForm === 2 && <ChangeEmailForm />}
      </div>
    </div>
  );
};

// Change Password Form Component
const ChangePasswordForm: React.FC = () => (
  <div className="unique-form unique-slide-in">
    <h3>Change Password</h3>
    <input type="password" placeholder="New Password" />
    <input type="password" placeholder="Confirm Password" />
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

export default UniqueFormSwitcher;
