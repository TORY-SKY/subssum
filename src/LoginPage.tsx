import { useState } from "react";
import TopNavbar from "./TopNavbar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Switch } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import SideBar from "./SideBar";

// GOOGLE SIGNIN IMPORT
import {
  signInWithPopup,
  AuthError,
  UserCredential,
  GoogleAuthProvider,
  User as FirebaseUser,
} from "firebase/auth";
import { auth } from "./Authentication/FirebaseConfig";
import { useUser, User } from "./assets/ContextAPI";

type FormData = {
  email: string;
  password: string;
};
type FormErrors = {
  email: string;
  password: string;
};
const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const { setUser } = useUser();
  // onchange function for the remember me switch

  const onChange = (checked: boolean) => {
    setChecked(checked);
    console.log(`Switch is now ${checked ? "On" : "Off"}`);
  };

  // VALIDATION
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = { email: "", password: "" };
    let isValid = true;

    // Basic validation checks
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/dashboard");
      // Proceed with login
      console.log("Form submitted successfully", formData);
    }
  };
  // GOOGLE SIGNIN FUNCTION
  const handleGoogleSign = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // signInWithPopup returns a promise that resolves to a UserCredential
      const result: UserCredential = await signInWithPopup(auth, provider);

      // Extract OAuthCredential from the result
      const credential = GoogleAuthProvider.credentialFromResult(result);

      // Access token to interact with Google API
      const token = credential?.accessToken;

      // Retrieve the signed-in user's information
      const firebaseUser: FirebaseUser = result.user;

      const mappedUser: User = {
        accessToken: token || "",
        displayName: firebaseUser.displayName || "",
        email: firebaseUser.email || "",
        emailVerified: firebaseUser.emailVerified,
        isAnonymous: firebaseUser.isAnonymous,
        metadata: {
          createdAt: firebaseUser.metadata.creationTime || "",
          lastLoginAt: firebaseUser.metadata.lastSignInTime || "",
          lastSignInTime: firebaseUser.metadata.lastSignInTime || "",
          creationTime: firebaseUser.metadata.creationTime || "",
        },
        phoneNumber: firebaseUser.phoneNumber,
        photoURL: firebaseUser.photoURL || "",
        providerId: firebaseUser.providerId,
        uid: firebaseUser.uid,
      };

      setUser(mappedUser);
      console.log("Signed in user:", firebaseUser);
      console.log("Access token:", token);
      navigate("/dashboard");

      // Optional: Use getAdditionalUserInfo(result) for more user details if needed
    } catch (error) {
      // Ensure the error is cast correctly to AuthError
      const authError = error as AuthError;

      // Extract error details
      const errorCode = authError.code;
      const errorMessage = authError.message;
      const email = authError.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(authError);

      console.error("Error code:", errorCode);
      console.error("Error message:", errorMessage);
      if (email) console.error("User email:", email);
      if (credential) console.error("Credential:", credential);
    }
  };
  // GOOGLE SIGNIN FUNCTION
  // GOOGLE SIGNIN FUNCTION
  return (
    <>
      <div className="login-page-container">
        <div className="left-side" style={{ backgroundColor: "#000080" }}>
          <div
            className="pseudo-ele"
            style={{
              marginLeft: "20px",
              backgroundColor: "#EFF3FB",
            }}
          >
            <h1 className="descrip">The BEST place to subscribe / buy</h1>
            <SideBar />
          </div>
        </div>
        <div className="right-side">
          <TopNavbar />
          <div className="login-container">
            <h1 className="login-text">Login</h1>
            <div className="login-with-google">
              <button
                onClick={handleGoogleSign}
                className="login-with-google-btn"
                style={{
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                }}
              >
                <div className="google-container">
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
              </button>
            </div>
            {/* or continue with */}
            <div className="or-continue-with">
              <p>Or continue with</p>
            </div>
            <div className="login-form-container">
              <form
                action=""
                className="login-form-field"
                onSubmit={handleLogin}
              >
                <div className="inputs-div">
                  <label
                    htmlFor=""
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Email Address
                    <input
                      type="email"
                      name="email"
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
                      value={formData.email}
                      onChange={handleChange}
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
                  className="inputs-div"
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
                    name="password"
                    type={visible ? "text" : "password"}
                    placeholder="Gabon4351"
                    style={{ border: "none", outline: "none", width: "100%" }}
                    value={formData.password}
                    onChange={handleChange}
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
                </div>
                <div
                  className={`error-div-hide`}
                  style={{ marginBottom: "8px" }}
                >
                  {errors.email && (
                    <span
                      className="error-message"
                      style={{ color: "red", fontSize: "10px" }}
                    >
                      {errors.email},{" "}
                    </span>
                  )}
                  {errors.password && (
                    <span
                      className="error-message"
                      style={{ color: "red", fontSize: "10px" }}
                    >
                      {errors.password}
                    </span>
                  )}
                </div>
                <div className="remember-me-recoverpas">
                  <div className="remember">
                    <Switch
                      checked={checked}
                      onChange={onChange}
                      style={{
                        backgroundColor: checked ? "#4CAF50" : "#EFF3FB",
                      }}
                    />
                    <p>Remember me</p>
                  </div>

                  <Link to="/recoverpassword" className="recover-password">
                    Recover Password
                  </Link>
                </div>

                <button
                  type="submit"
                  className="loginbtn"
                  style={{
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#4169E1",
                    border: "none",
                  }}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
