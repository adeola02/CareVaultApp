import React from 'react';
import "./ManualUpload.css"

const ManualUpload = () => {
  return (
    <div className='manualUploadBody'>
      <h3>Manual record upload</h3>
      <label htmlFor="">Record Type</label>
      <select name="" id="">
      <option value="">Lab Test</option>
      <option value="">Report</option>
      <option value=""></option>
    </select>
    <label htmlFor="">Record Name</label>
      <input type="text"/>
      <label htmlFor="">Notes</label>
     <textarea name="" id="" placeholder='Type information about this record'></textarea>
     <button>Upload</button>
    </div>
  )
}

export default ManualUpload