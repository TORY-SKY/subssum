import SideBar from "./SideBar";
import UserNavbar from "./UserNavbar";
import { ChangeEvent, useCallback } from "react";
import { useImageContext } from "./ContextAPI/Context";
import Avatar from "./assets/images/imgplaceholder.svg";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

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
  const uploadInput = document.querySelector<HTMLInputElement>(".uploadImg");
  if (uploadInput) {
    uploadInput.click();
  }
  return (
    <div className="profile-page-container">
      <div className="profile-leftside">
        <SideBar />
      </div>
      <div className="profile-rightside">
        <div className="edit-profile">
          <UserNavbar />
          <div className="edit-leftside">
            <div className="activity profile-image">
              <div>
                <img src={Avatar} alt="" />
                {images.map((image) => (
                  <img src={image.url == "" ? Avatar : image.url} alt="" />
                ))}
              </div>
              <input
                className="uploadImg"
                type="file"
                accept="image/*"
                onChange={handleUpload} // Accessibility improvement
                placeholder="upload your img"
              />
              <div
                className="upload-container"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => uploadInput}
              >
                <CameraAltOutlinedIcon />
                <div className="uploadimg">Upload Image</div>
              </div>
            </div>
            <div className="profile-details"></div>
          </div>
          <div className="edit-rightside"></div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
