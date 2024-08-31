import SideBar from "./SideBar";
import UserNavbar from "./UserNavbar";
import LogoutBtn from "./LogoutBtn";

const ElectricityBill = () => {
  return (
    <div>
      <div className="BuyAirtime-container">
        <div className="buyAirtime-leftside">
          <SideBar />
          import LogoutBtn from "./LogoutBtn";
        </div>
        <div className="buyAirtime-leftside">
          <UserNavbar />
        </div>
      </div>
    </div>
  );
};

export default ElectricityBill;
