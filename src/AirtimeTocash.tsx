import React from "react";
import SideBar from "./SideBar";
import UserNavbar from "./UserNavbar";

const AirtimeTocash = () => {
  return (
    <div className="Airtime-to-cash-container">
      <div className="airtime-leftside">
        <SideBar />
      </div>
      <div className="airtime-right-side">
        <UserNavbar />
      </div>
    </div>
  );
};

export default AirtimeTocash;
