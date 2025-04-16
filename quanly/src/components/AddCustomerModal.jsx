import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

function AddCustomerModal({ open, close_method}) {
    if (!open) return null;

    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [image, setImage] = useState("")
    const [orderValue, setOrderValue] = useState("")
    const [orderDate, setOrderDate] = useState(new Date())
    const [status, setStatus] = useState("New")

    
    const postData = {
        customerName : name,
        avatar : image,
        company : company,
        orderValue : orderValue,
        orderDate : orderDate,
        status : status
    }

    const jsonData = JSON.stringify(postData)

    const url = "http://localhost:3001/customer"

    const options = {
        method: "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body: jsonData
    }

    


    const handleAdd = () => {
        console.log("link ảnh:" + image)
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log("Dữ liệu đã thêm: " + data)
        })

    }

  return (
    <Dialog open = {open} className='update-customer-modal'>
        <div className = "title-modal">
            <DialogTitle id="alert-dialog-title">
                Add customer
            </DialogTitle>
            <button onClick={close_method}>X</button>
        </div>
       
        <DialogContent>
            <label htmlFor="">Customer name:</label><br />
            <input type="text" name=""  onChange={(e)=>setName(e.target.value)}/><br />

            <label htmlFor="">Avatar:</label><br />
            <input type="file" src="" alt="" accept='.png' onChange={(e)=> setImage(e.target.files[0].name)}/>
            <br />

          

            <label htmlFor="">Company:</label><br />
            <input type="text" name=""   onChange={(e)=>setCompany(e.target.value)}/><br />

            <label htmlFor="">Order value:</label><br />
            <input type="text" name=""   onChange={(e)=>setOrderValue(e.target.value)}/><br />

            <label htmlFor="">Order date:</label><br />
            <input type="date" name=""  onChange={(e)=>setOrderDate((e.target.value))}/><br />


            <label htmlFor="">Status:</label><br />
            <form >
                <input readOnly type="radio" name="status"  value="New" checked = {status ==="New"}  onChange={(e)=>setStatus((e.target.value))}/>New 
                <input readOnly type="radio" name="status"  value = "In-progress" checked = {status === "In-progress"} onChange={(e)=>setStatus((e.target.value))}/>In-progress
                <input readOnly type="radio" name="status"  value="Completed" checked = {status === "Completed"} onChange={(e)=>setStatus((e.target.value))}/>Completed
            </form>

            <button type="submit" onClick={()=> {handleAdd(); close_method()}}>Add</button>



        </DialogContent>
    </Dialog>
  )
}

export default AddCustomerModal
