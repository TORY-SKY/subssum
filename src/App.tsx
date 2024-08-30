import LoginPage from "./LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./SideBar";
import Transactionhistory from "./Transactionhistory";
import Dashboard from "./Dashboard";
import Profilepage from "./Profilepage";
import { ImageProvider } from "./ContextAPI/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: "Error Accessing this page",
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: "Error Accessing this page",
  },
  {
    path: "/recoverPassword",
    element: "recover password page",
    errorElement: "Error Accessing this page",
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
