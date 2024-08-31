import SideBar from "./SideBar";
import UserNavbar from "./UserNavbar";
import { ChangeEvent, useCallback, useState } from "react";
import { useImageContext } from "./ContextAPI/Context";
import Avatar from "./assets/images/imgplaceholder.svg";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import "./FormSwitcher.css";
import LogoutBtn from "./LogoutBtn";

const Profilepage = () => {
  const { addImage, images } = useImageContext();

  // Handle the image upload
  const handleUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0];

        // Validate file type and size
        if (!file.type.startsWith("image/")) {
          alert("Please upload a valid image file");
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          // 5MB limit
          alert("File size should be less than 5MB");
          return;
        }

        const url = URL.createObjectURL(file); // Create a URL for the image
        addImage({ url, file }); // Add the image to the context

        // Cleanup URL object when the component unmounts
        return () => URL.revokeObjectURL(url);
      }
    },
    [addImage]
  );
  //   const uploadInput = document.querySelector<HTMLInputElement>(".uploadImg");
  //   if (uploadInput) {
  //     uploadInput.click();
  //   }

  //   profile form handler fucntion

  const [activeForm, setActiveForm] = useState<"password" | "pin">("password");

  // Function to handle button clicks and set the active form
  const handleFormChange = (formType: "password" | "pin") => {
    setActiveForm(formType);
  };

  // Helper function to generate a unique key
  const generateUniqueKey = () => {
    return `image-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
  };

  return (
    <div className="profile-page-container">
      <div className="profile-leftside">
        <SideBar />
        <LogoutBtn />
      </div>
      <div className="profile-rightside">
        <div className="edit-profile">
          <UserNavbar />
          <div className="edit-leftside">
            <div className="the-left-side">
              <div className="activity profile-image">
                <div>
                  {images.length === 0 ? (
                    // Show default avatar if no image is uploaded
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                      src={Avatar}
                      alt="Default Avatar"
                    />
                  ) : (
                    // Show uploaded image with a unique key
                    images.map((image) => (
                      <img
                        key={generateUniqueKey()} // Use the unique key generator
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                        }}
                        src={image.url}
                        alt="Uploaded"
                      />
                    ))
                  )}
                </div>
                <input
                  className="uploadImg"
                  type="file"
                  accept="image/*"
                  onChange={handleUpload} // Accessibility improvement
                  placeholder="upload your img"
                  style={{
                    border: "none",
                    outline: "transparent",
                    width: "120px",
                    backgroundColor: "transparent",
                  }}
                />
                <div
                  className="upload-container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  //   onClick={() => uploadInput}
                >
                  <CameraAltOutlinedIcon />
                  <div className="uploadimg">Upload Image</div>
                </div>
              </div>

              <div className=" profile-details">
                <div className="detail">
                  <div className="detail-disc">Name</div>
                  <div className="detail-values">Lawal Wahab Babatunde</div>
                </div>
                <div className="detail">
                  <div className="detail-disc">Email</div>
                  <div className="detail-values">wabdotmail@gmail.com</div>
                </div>
                <div className="detail">
                  <div className="detail-disc">
                    <p>Phone Number</p>
                  </div>
                  <div className="detail-values">
                    <p>0906 856 2949</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="detail-disc ">
                    <p>Account Status</p>
                  </div>
                  <div className="detail-values acc-active">Active</div>
                </div>
                <div className="detail">
                  <div className="detail-disc">
                    <p>Referral Link</p>
                  </div>
                  <div className="detail-values">www.subsum.com/tre/wd...</div>
                </div>
                <div className="copy">
                  <ContentCopyOutlinedIcon />
                  <span>Copy</span>
                </div>
                <div className="edit-this">
                  <div>Edit Details</div>
                </div>
              </div>
            </div>
            <div className="changer-password-container">
              <div className="switch-forms">
                <div className="button-container">
                  <button
                    className={`form-button ${
                      activeForm === "password" ? "active" : ""
                    }`}
                    onClick={() => handleFormChange("password")}
                  >
                    Change Password
                  </button>
                  <button
                    className={`form-button ${
                      activeForm === "pin" ? "active" : ""
                    }`}
                    onClick={() => handleFormChange("pin")}
                  >
                    Change PIN
                  </button>
                </div>
                <div className="form-content">
                  <div className="forms">
                    <div
                      className={`form-slide ${
                        activeForm === "password" ? "show" : ""
                      }`}
                    >
                      <form>
                        <div className="inputs-div">
                          <label
                            htmlFor=""
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Enter Current Password
                            <input
                              type="email"
                              placeholder="Enter Current Password"
                              required
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
                        <div className="inputs-div">
                          <label
                            htmlFor=""
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            New Password
                            <input
                              type="email"
                              placeholder="Enter New Password"
                              required
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
                        <div className="inputs-div">
                          <label
                            htmlFor=""
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Confirm New Password
                            <input
                              type="email"
                              placeholder="Confirm New Password"
                              required
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
                        <button type="submit">Submit</button>
                      </form>
                    </div>
                    <div
                      className={`form-slide ${
                        activeForm === "pin" ? "show" : ""
                      }`}
                    >
                      <form>
                        <div className="inputs-div">
                          <label
                            htmlFor=""
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Enter Current Password
                            <input
                              type="email"
                              placeholder="Enter Current Password"
                              required
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
                        <div className="inputs-div">
                          <label
                            htmlFor=""
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            New Password
                            <input
                              type="email"
                              placeholder="Enter New Password"
                              required
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
                        <div className="inputs-div">
                          <label
                            htmlFor=""
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Confirm New Password
                            <input
                              type="email"
                              placeholder="Confirm New Password"
                              required
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
                        <button type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
