import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

function UpdateCustomerModal({ open, customer , close_method}) {
    if (!open) return null;

    const [name, setName] = useState(customer.name)
    const [company, setCompany] = useState(customer.company)
    const [orderValue, setOrderValue] = useState(customer.orderValue)
    const [orderDate, setOrderDate] = useState(customer.orderDate)
    const [status, setStatus] = useState(customer.status)

    // Nếu đã đúng định dạng yyyymmdd thì không cần đổi
    const convertToYYYYMMDD = (yyyymmdd) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/
        if (regex.test(yyyymmdd) == true) return yyyymmdd
        const [d, m, y] = yyyymmdd.split("/")
        return `${y}-${m}-${d}`
    }

//     console.log("Lấy dữ liệu từ phần tử đầu tiên")
//     fetch('http://localhost:3001/customer/1')
//  .then(response => response.json())
//  .then(data => console.log(data));

    // PUT
    // Định nghĩa dữ liệu bạn muốn cập nhật
    const updateData = {
        id : customer.id, 
        avatar : customer.avatar,
        customerName: name ,
        company: company,
        orderValue: orderValue,
        orderDate: orderDate,
        status: status,

     };

     const jsonData = JSON.stringify(updateData)

     // Định nghĩa URL của điểm cuối máy chủ
     const url =`http://localhost:3001/customer/${customer.id}`

     //Cấu hình Fetch
     const options = {
        method: "PUT",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : jsonData
    };
    

    const handleSave = () => {

        //Thực hiện PUT
        fetch(url, options)
            .then(response =>
                response.json()
            )
            .then(response=>{
                fetchData();

            })
            .then(data => console.log("Đã cập nhật:" + data))


    }

  return (
    <Dialog open = {open} className='update-customer-modal'>
        <div className = "title-modal">
            <DialogTitle id="alert-dialog-title">
                Update customer
            </DialogTitle>
            <button onClick={close_method}>X</button>
        </div>
       
        <DialogContent>
            <label htmlFor="">Customer name:</label><br />
            <input type="text" name="" value={name} onChange={(e)=>setName(e.target.value)}/><br />


            <label htmlFor="">Company:</label><br />
            <input type="text" name="" value={company}  onChange={(e)=>setCompany(e.target.value)}/><br />

            <label htmlFor="">Order value:</label><br />
            <input type="text" name="" value={orderValue}  onChange={(e)=>setOrderValue(e.target.value)}/><br />

            <label htmlFor="">Order date:</label><br />
            <input type="date" name="" value={convertToYYYYMMDD(orderDate)}  onChange={(e)=>setOrderDate((e.target.value))}/><br />


            <label htmlFor="">Status:</label><br />
            <form >
                <input readOnly type="radio" name="status"  value="New" checked = {status ==="New"}  onChange={(e)=>setStatus((e.target.value))}/>New 
                <input readOnly type="radio" name="status"  value = "In-progress" checked = {status === "In-progress"} onChange={(e)=>setStatus((e.target.value))}/>In-progress
                <input readOnly type="radio" name="status"  value="Completed" checked = {status === "Completed"} onChange={(e)=>setStatus((e.target.value))}/>Completed
            </form>

            <button type="submit" onClick={()=> {handleSave(); close_method()}}>Save</button>



        </DialogContent>
    </Dialog>
  )
}

export default UpdateCustomerModal
