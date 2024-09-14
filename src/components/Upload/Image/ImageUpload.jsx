import React, { useEffect, useState } from 'react';
import "./ImageUpload.css";
import { LuUpload } from "react-icons/lu";
import Aos from 'aos';
import "aos/dist/aos.css"
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const ImageUpload = () => {
  const [image,setImage]=useState();

  const uploadImage=(event)=>{
      const file=event.target.files[0];
      const imageUrl=URL.createObjectURL(file);
      setImage(imageUrl)
  }
  console.log(image)

const addImageRecord=()=>{
  if(!image){
    toast.error("please choose image to upload")
  }else{
    const url=
        "https://medical-record-project.onrender.com/api/v1/addRecord ";
        axios.post(url,image)
        .then((res)=>{
          console.log(res)
        })
        .catch((error)=>{
          console.log(error)
        })
  }
}


  useEffect(()=>{
    Aos.init();
},[])
  return (
    <div className='pdfUploadBody'>
      <ToastContainer/>
    <h3>Image upload</h3>
    <label htmlFor="" for="file-upload"  className="custom-file-upload">Choose image</label>
    <input type="file" style={{display:"none"}}  id='file-upload' onChange={uploadImage}/>
    <label htmlFor="">Record Type</label>
    <select name="" id="">
      <option value="">Lab Test</option>
      <option value="">Report</option>
      <option value=""></option>
    </select>
    <button onClick={addImageRecord}><LuUpload />Upload</button>
</div>
  )
}

export default ImageUpload