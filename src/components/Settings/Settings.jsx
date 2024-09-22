import "./Settings.css";
import { FaCamera } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Settings = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const uploadImage = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const imageUrl = URL.createObjectURL(selectedFile);
    setImageUrl(imageUrl);
  };
  return (
    <main
      className="setting-wrapper"
      style={{
        maxWidth: isSmallScreen ? "90%" : "50%",
        transition: "max-width 0.3s ease",
        margin: "auto",
      }}
    >
      <div
        className="picture-upload-wrapper"
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "blue",
          borderRadius: "50%",
          position: "relative",
          margin: "auto",
          marginBlockEnd: "50px",
          marginBlockStart: "10px",
        }}
      >
        <label htmlFor="file-upload" className="upload-picture">
          <input
            type="file"
            style={{ display: "none" }}
            id="file-upload"
            onChange={uploadImage}
          />
          <FaCamera
            size={25}
            style={{ position: "absolute", right: "0", bottom: "10px" }}
          />
        </label>
      </div>
      <form action="" className="setting-form-wrapper">
        <label htmlFor="name">
          <input type="text" id="name" placeholder="Full name" />
        </label>
        <label htmlFor="dob">
          <input type="text" id="dob" placeholder="Date of Birth" />
        </label>
        <label htmlFor="tel">
          <input type="tel" id="tel" placeholder="Phone number" />
        </label>
        {/* <label htmlFor="gender"> */}
        <select
          style={{
            width: "100%",
            marginBottom: "40px",
          }}
        >
          <option>Select</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <button
          className="settings-btn"
          style={{
            minWidth: "100%",
            cursor: "pointer",
          }}
        >
          Update Profile
        </button>
      </form>
    </main>
  );
};

export default Settings;
