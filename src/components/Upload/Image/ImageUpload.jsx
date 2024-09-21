import { useEffect, useState } from "react";
import "./ImageUpload.css";
import { LuUpload } from "react-icons/lu";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMedicalRecords } from "../../../Global/slice";
import { useNavigate } from "react-router-dom";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [entryType, setEntryType] = useState("");
  const [recordType, setRecordType] = useState("");
  console.log(recordType);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.app?.token);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const uploadImage = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const imageUrl = URL.createObjectURL(selectedFile);
    setImageUrl(imageUrl);
  };

  const addImageRecord = () => {
    if (!file) {
      toast.error("Please choose an image to upload");
    } else {
      setIsLoading(true);
      const url =
        "https://medical-record-project.onrender.com/api/v1/addRecord";

      // Create FormData object
      const formData = new FormData();
      formData.append("recordType", recordType);
      formData.append("entryType", entryType);
      formData.append("file", file); // Append the file itself
      // console.log(formData)
      axios
        .post(url, formData, {
          headers: {
            // 'Content-Type' is automatically set when sending FormData
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsLoading(false);
          console.log(res?.data);
          console.log(res?.data?.data);
          dispatch(setMedicalRecords(res?.data?.data));
          toast.success("you just made a successful upload");
          setTimeout(() => {
            nav("/dashBoard");
          }, 2000);
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error?.response?.data?.error);
        });
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="pdfUploadBody">
      <ToastContainer />
      <h3>Image upload</h3>
      <div className="image-upload-div">
        {imageUrl ? (
          <img src={imageUrl} alt="Selected" />
        ) : (
          <p>No image selected</p>
        )}
      </div>
      <label htmlFor="file-upload" className="custom-file-upload">
        Browse image
      </label>
      <input
        type="file"
        style={{ display: "none" }}
        id="file-upload"
        onChange={uploadImage}
      />
      <label htmlFor="">Record Type</label>
      <select
        className="image-upload-select"
        name=""
        id=""
        onChange={(e) => setRecordType(e.target.value)}
      >
        <option value="select">Select</option>
        <option value="file">File</option>
        <option value="image">Image</option>
      </select>
      <label htmlFor="">Entry Type</label>
      <select
        className="image-upload-select"
        name=""
        id=""
        onChange={(e) => setEntryType(e.target.value)}
      >
        <option value="select">Select</option>
        <option value="lab test">Lab Test</option>
        <option value="report">Report</option>
        <option value="drug prescription">Drug prescription</option>
      </select>
      <button onClick={addImageRecord}>
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            <LuUpload />
            Upload
          </>
        )}
      </button>
    </div>
  );
};

export default ImageUpload;
