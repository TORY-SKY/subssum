import SideBar from "./SideBar";
import UserNavbar from "./UserNavbar";
const HelpandSupport = () => {
  return (
    <div className="help-n-support-container">
      <div className="help-n-support-container-leftside">
        <SideBar />
      </div>
      <div className="help-n-support-container-rightside">
        <UserNavbar />
      </div>
    </div>
  );
};

export default HelpandSupport;
