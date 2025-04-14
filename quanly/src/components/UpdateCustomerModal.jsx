import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

function UpdateCustomerModal({ open, customer }) {
    if (!open) return null;

    const convertToYYYYMMDD = (yyyymmdd) => {
        const [d, m, y] = yyyymmdd.split("/")
        return `${y}-${m}-${d}`
    }
      
  return (
    <Dialog open = {open} className='update-customer-modal'>
        <DialogTitle id="alert-dialog-title">
            Update customer
        </DialogTitle>
        <DialogContent>
            <label htmlFor="">Customer name:</label><br />
            <input type="text" name="" value={customer.name} /><br />


            <label htmlFor="">Company:</label><br />
            <input type="text" name="" value={customer.company} /><br />

            <label htmlFor="">Order value:</label><br />
            <input type="text" name="" value={customer.orderValue}/><br />

            <label htmlFor="">Order date:</label><br />
            <input type="date" name="" id="" value={convertToYYYYMMDD(customer.orderDate)}/><br />


            <label htmlFor="">Status:</label><br />
            <form >
                <input type="radio" name="status" id="" value="New" checked = {customer.status ==="New"}/>New 
                <input type="radio" name="status" id="" value = "In-progress" checked = {customer.status === "In-progress"}/>In-progress
                <input type="radio" name="status" id="" value="Completed" checked = {customer.status === "Completed"} />Completed
            </form>

            <button type="submit">Save</button>



        </DialogContent>
    </Dialog>
  )
}

export default UpdateCustomerModal
