import React, { useState } from 'react';
import "./ManualUpload.css"
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ManualUpload = () => {
  const recordType="manual";
  const [entryType,setEntryType]=useState("");
  const [details,setDetails]=useState("");
  const token=useSelector((state)=>state.app?.token)
  console.log(token)
  console.log(details)
  console.log(entryType)

  const handleManualUpload=()=>{
    if(!entryType || !details){
      toast.error("please input datas")
    }
    else{
      const url = "https://medical-record-project.onrender.com/api/v1/addRecord";
      const data = {
        recordType,
        'manualData[entryType]': entryType,
        'manualData[details]': details,
        // 'manualData[additionalInfo]': additionalInfo,
      };

      axios.post(url,data,{
        headers:{
          application:"application/json",
          Authorization:`Bearers ${token}`
        }
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }
  return (
    <div className='manualUploadBody'>
      <ToastContainer/>
      <h3>Manual record upload</h3>
      <label htmlFor="">Entry Type</label>
      <select name="" id="" onChange={(e)=>setEntryType(e.target.value)}>
        <option value="">select entry type</option>
      <option value="medication">medication</option>
      <option value="doctorNotes">Doctornotes</option>
      <option value="healthMetrics">Healthmetrics</option>
      <option value="appointmentDetails">Appointment details</option>
      <option value=""></option>
    </select>
    {/* <label htmlFor="">Record Name</label>
      <input type="text"/> */}
      <label htmlFor="">Notes</label>
     <textarea name="" id="" placeholder='Type information about this record' onChange={(e)=>setDetails(e.target.value)}></textarea>
     <button onClick={handleManualUpload}>Upload</button>
    </div>
  )
}

export default ManualUpload