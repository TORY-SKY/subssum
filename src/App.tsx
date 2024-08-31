import LoginPage from "./LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./SideBar";
import Transactionhistory from "./Transactionhistory";
import Dashboard from "./Dashboard";
import Profilepage from "./Profilepage";
import { ImageProvider } from "./ContextAPI/Context";
// import FormSwitcher from "./Test";
import AirtimeTocash from "./AirtimeTocash";
import BuyAirtime from "./BuyAirtime";
import BuyData from "./BuyData";
import TVSUB from "./TVSUB";
import ElectricityBill from "./ElectricityBill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: "Error Accessing this page, sir",
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: "Error Accessing this page",
  },
  {
    path: "/recoverPassword",
    element: "recover password page",
    errorElement:
      "Error Accessing this page sir please go back to previous page",
  },
  {
    path: "/sidebar",
    element: <SideBar />,
    errorElement: "Error Accessing this page",
  },
  {
    path: "/transactionhistory",
    element: <Transactionhistory />,
    errorElement: "Error Accessing this page",
  },
  {
    path: "/profile",
    element: <Profilepage />,
    errorElement: "Error Accessing this page",
  },

  {
    path: "/airtimetocash",
    element: <AirtimeTocash />,
    errorElement: "Error Accessing this page",
  },
  {
    path: "/buyairtime",
    element: <BuyAirtime />,
    errorElement: "Error Accessing this page",
  },
  {
    path: "/buydata",
    element: <BuyData />,
    errorElement: "Error Accessing this page",
  },
  {
    path: "/tvsub",
    element: <TVSUB />,
    errorElement: "Error Accessing this page",
  },
  {
    path: "/payelectricalbill",
    element: <ElectricityBill />,
    errorElement: "Error Accessing this page",
  },
]);

function App() {
  return (
    <>
      <ImageProvider>
        <RouterProvider router={router} />
      </ImageProvider>
    </>
  );
}

export default App;
