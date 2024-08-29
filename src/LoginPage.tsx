import { useState } from "react";
import logo from "./assets/images/logo.png";
import TopNavbar from "./TopNavbar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const LoginPage = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div className="login-page-container">
        <div className="left-side">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>subsum</p>
          </div>
        </div>
        <div className="right-side">
          <TopNavbar />
          <div className="login-container">
            <h1>Login</h1>
            <div className="login-with-google">
              <div>
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.04 11.7615C23.04 10.946 22.9668 10.1619 22.8309 9.40918H12V13.8576H18.1891C17.9225 15.2951 17.1123 16.513 15.8943 17.3285V20.214H19.6109C21.7855 18.2119 23.04 15.2637 23.04 11.7615Z"
                    fill="#4285F4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9999 23.0001C15.1049 23.0001 17.7081 21.9703 19.6108 20.2139L15.8942 17.3285C14.8644 18.0185 13.5472 18.4262 11.9999 18.4262C9.00467 18.4262 6.46945 16.4032 5.56513 13.6851H1.72308V16.6646C3.61536 20.423 7.50445 23.0001 11.9999 23.0001Z"
                    fill="#34A853"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.56523 13.685C5.33523 12.995 5.20455 12.2579 5.20455 11.5C5.20455 10.742 5.33523 10.005 5.56523 9.31499V6.33545H1.72318C0.944318 7.88795 0.5 9.64431 0.5 11.5C0.5 13.3557 0.944318 15.112 1.72318 16.6645L5.56523 13.685Z"
                    fill="#FBBC05"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9999 4.57386C13.6883 4.57386 15.2042 5.15409 16.396 6.29364L19.6944 2.99523C17.7029 1.13955 15.0997 0 11.9999 0C7.50445 0 3.61536 2.57705 1.72308 6.33545L5.56513 9.315C6.46945 6.59682 9.00468 4.57386 11.9999 4.57386Z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Login with Google</span>
              </div>
            </div>
            {/* or continue with */}
            <div className="or-continue-with">
              <p>Or continue with</p>
            </div>
            <div className="login-form-container">
              <form action="POST">
                <div className="email-input">
                  <label
                    htmlFor=""
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Email Address
                    <input
                      type="email"
                      placeholder="wabdotmail@gmail.com"
                      style={{
                        height: "50px",
                        border: "1px solid #D7E1F4",
                        paddingLeft: "8px",
                        paddingRight: "24px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        marginTop: "4px",
                        borderRadius: "4px",
                      }}
                    />
                  </label>
                </div>
                <label
                  htmlFor=""
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  Password
                </label>
                <div
                  className="email-input"
                  style={{
                    height: "50px",
                    border: "1px solid #D7E1F4",
                    paddingLeft: "8px",
                    paddingRight: "24px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    marginTop: "4px",
                    borderRadius: "4px",
                    display: "flex",
                    // flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <input
                    type={visible ? "text" : "password"}
                    placeholder="Gabon4351"
                    style={{ border: "none", outline: "none", width: "100%" }}
                  />
                  <div
                    className="show-hide"
                    onClick={() => {
                      setVisible(!visible);
                    }}
                  >
                    {visible ? (
                      <Visibility sx={{ color: "#4169E1" }} />
                    ) : (
                      <VisibilityOff sx={{ color: "#4169E1" }} />
                    )}
                  </div>
                  <div className="remember-me-recoverpas"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
