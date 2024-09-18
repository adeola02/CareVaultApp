import { useEffect, useState } from "react";
import "./ImageUpload.css";
import { LuUpload } from "react-icons/lu";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMedicalRecords } from "../../../Global/slice";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl,setImageUrl]=useState("")
  const [entryType,setEntryType]=useState("");
  const [recordType,setRecordType]=useState("");
  
  const token=useSelector((state)=>state.app?.token)
 const dispatch=useDispatch();

  const uploadImage = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const imageUrl = URL.createObjectURL(selectedFile);
    setImageUrl(imageUrl);
  };
  // console.log(image);

  const addImageRecord = () => {
    if (!file) {
      toast.error("Please choose an image to upload");
    } else {
      const url = "https://medical-record-project.onrender.com/api/v1/addRecord";
      
      // Create FormData object
      const formData = new FormData();
      formData.append('recordType', recordType);
      formData.append('entryType', entryType);
      formData.append('file', file); // Append the file itself
  // console.log(formData)
      axios
        .post(url, formData, {
          headers: {
            // 'Content-Type' is automatically set when sending FormData
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setMedicalRecords(res?.data?.datas));
          // console.log(res?.data?.data)
        })
        .catch((error) => {
          console.log(error);
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
      {imageUrl ? <img src={imageUrl} alt="Selected" /> : <p>No image selected</p>}

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
      <select name="" id="" onChange={(e)=>setRecordType(e.target.value)}>
          <option value="file">File</option>
          <option value="image">Image</option>
      </select>
      <label htmlFor="">Entry Type</label>
      <select name="" id="" onChange={(e)=>setEntryType(e.target.value)}>
        <option value="lab test">Lab Test</option>
        <option value="report">Report</option>
        <option value="drug prescription">Drug prescription</option>
      </select>
      <button onClick={addImageRecord}>
        <LuUpload />
        Upload
      </button>
    </div>
  );
};

export default ImageUpload;
