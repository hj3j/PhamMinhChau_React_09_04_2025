import React from 'react'
import { useEffect, useState } from 'react'
import AddCustomerModal from '../components/AddCustomerModal'
import EnhancedTable from '../components/Table.jsx'

function Content() {

    const [overviews, setOverviews] = useState([])
      const [customers, setCustomers] = useState([])
      const [openModal, setOpenModal] = useState(false); 

      
  useEffect  (()=>{
    fetch('http://localhost:3000/overview')
      .then(data=> data.json())
      .then(turnover=>{
        console.log("in ket qua 1")
        setOverviews(turnover)
      })
  }, [])

    // codeee
    useEffect(()=>{
      fetch("http://localhost:3001/customer")
        .then(data=>data.json())
        .then(customers=>{
          console.log("in ket qua")
          console.log(customers)  
          setCustomers(customers)
        })
        .catch(err=>{
          console.log("Lỗi!!!!!!")
        })
    }, [])

    const LoadAgain = useEffect(()=>{
      fetch("http://localhost:3001/customer")
        .then(data=>data.json())
        .then(customers=>{
          console.log("in ket qua")
          console.log(customers)  
          setCustomers(customers)
        })
        .catch(err=>{
          console.log("Lỗi!!!!!!")
        })
    }, [])


      const handleClickOpenModal = () => {
        console.log("Đã click button Add")
        setOpenModal(true)
      }
  
      const handleClickCloseModal = () => {
        setOpenModal(false)
      }

  return (
    <div className="content">  
    <div className="child">
          <img src="/Squares four 1.png" alt="" />
          <h4>Overview</h4>
    </div>
      
    <div className="child" >
          <ul>
            {
                  overviews.map((overview , index)=> (
                    <li key={index}>
                        
                          <div className= {`grandchild-${index} grandchild`} >
                            <div className="child-of-grandchild">
                              <h5>{overview.title}</h5>
                              <h4>{overview.unit}{overview.value}</h4>
                              <span>{overview.change}</span><span>% period of change</span>
                            </div>
                            <div className="child-of-grandchild">
                              <img src={overview.img} alt="" />
                            </div>
                          </div>
                      
                    </li>
                  ))
            }
          </ul>
      </div> 

      <div className="child">
        <div className="grandchild">
          <img src="/File text 1.png" alt="" />
          <h4>Detailed report</h4>
        </div>
        <div className="grandchild">
          {/* HÚUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU */}
          <button onClick = {() => handleClickOpenModal()} >+ Add</button>
          <AddCustomerModal open = {openModal} close_method = {handleClickCloseModal} />
        </div>
    
      </div>

      <div className="child">
          <EnhancedTable customersProps = {customers}/>
      </div>
    </div>
  )
}

export default Content

