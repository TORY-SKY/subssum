import LoginPage from "./LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import Profilepage from "./Profilepage";
import { ImageProvider } from "./ContextAPI/Context";
import AirtimeTocash from "./AirtimeTocash";
import BuyAirtime from "./BuyAirtime";
import BuyData from "./BuyData";
import ElectricityBill from "./ElectricityBill";
import Test from "./Test";
import Transactionhistory from "./Transactionhistory";
import Errorpage from "./Errorpage";
import HelpandSupport from "./HelpandSupport";
import { UserProvider } from "./assets/ContextAPI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Errorpage />,
  },
  {
    path: "/recoverPassword",
    element: "recover password page",
    errorElement: <Errorpage />,
  },
  {
    path: "/sidebar",
    element: <SideBar />,
    errorElement: <Errorpage />,
  },
  {
    path: "/transactionhistory",
    element: <Transactionhistory />,
    errorElement: <Errorpage />,
  },
  {
    path: "/profile",
    element: <Profilepage />,
    errorElement: <Errorpage />,
  },

  {
    path: "/airtimetocash",
    element: <AirtimeTocash />,
    errorElement: <Errorpage />,
  },
  {
    path: "/buyairtime",
    element: <BuyAirtime />,
    errorElement: <Errorpage />,
  },
  {
    path: "/buydata",
    element: <BuyData />,
    errorElement: <Errorpage />,
  },

  {
    path: "/payelectricalbill",
    element: <ElectricityBill />,
    errorElement: <Errorpage />,
  },
  {
    path: "/test",
    element: <Test />,
    errorElement: <Errorpage />,
  },
  {
    path: "/helpandsupport",
    element: <HelpandSupport />,
    errorElement: <Errorpage />,
  },
]);

function App() {
  return (
    <>
      <ImageProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ImageProvider>
    </>
  );
}

export default App;
