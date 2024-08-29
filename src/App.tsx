import LoginPage from "./LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./SideBar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
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
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
