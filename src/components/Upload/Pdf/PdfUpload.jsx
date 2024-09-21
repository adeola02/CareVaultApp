import React from "react";
import "./PdfUpload.css";
import { LuUpload } from "react-icons/lu";

const PdfUpload = () => {
  return (
    <div className="pdfUploadBody">
      <h3>File/document upload</h3>
      <label htmlFor="file-upload" className="custom-file-upload">
        Choose file
      </label>
      <input type="file" style={{ display: "none" }} id="file-upload" />
      <label>Upload record</label>
      <select name="" id="">
        <option value="">Lab Test</option>
        <option value="">Report</option>
        <option value=""></option>
      </select>
      <button>
        {" "}
        <LuUpload />
        Upload
      </button>
    </div>
  );
};

export default PdfUpload;
