import React, { useEffect } from 'react';
import "./ImageUpload.css";
import { LuUpload } from "react-icons/lu";
import Aos from 'aos';
import "aos/dist/aos.css"

const ImageUpload = () => {
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <div className='pdfUploadBody'>
    <h3>Image upload</h3>
    <label htmlFor="" for="file-upload"  className="custom-file-upload">Choose image</label>
    <input type="file" style={{display:"none"}}  id='file-upload'/>
    <label htmlFor="">Record Type</label>
    <select name="" id="">
      <option value="">Lab Test</option>
      <option value="">Report</option>
      <option value=""></option>
    </select>
    <button><LuUpload />Upload</button>
</div>
  )
}

export default ImageUpload