import { useEffect, useState } from 'react'
import './App.css'
// import Table from './components/Table.jsx'
import EnhancedTable from './components/Table.jsx'

function App() {

  const [overviews, setOverviews] = useState([])
  const [customers, setCustomers] = useState([])

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




  return (
    <>
      
      
      <div className="container">
        <div className="header">
              <div className="child"><h2>Dashboard</h2></div>

              <div className="child">
                  <input type="text"  placeholder='Search...' style={{height:"30%", width:"50%"}}/>
                  <img src="/Bell 1.png" alt="" height="50%"/>
                  <img src="/Question 1.png" alt="" height="50%" />
                  <img src="/Avatar 313.png" alt=""  height="80%"/>
              </div>
        </div>

        {/* MENU */}
        <div className="menu">
          <div className="child">
            <img src="/Image 1858.png" alt="" height="20%"/>
          </div>
          <div className="child">
            <img src="/Squares four 1.png" alt="" /> Dashboard
          </div>
          <div className="child">
            <img src="Groups.png" alt="" /> Teams
          </div>
          <div className="child">
            <img src="/Pie chart.png" alt="" /> Anatylics
          </div>
          <div className="child">
            <img src="/Chat.png" alt="" /> Messengers
          </div>
          <div className="child">
            <img src="/Code.png" alt="" /> Intergrations
          </div>

          <div className="child">
               <img src="/Group.png" alt="" />
              <button>Try now</button>
          </div>
        
        </div>

        {/* CONTENT */}
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
              <button>+ Add</button>
            </div>
          </div>

          <div className="child">
                {/* <ul>
                  {
                    customers.map(customer=>(
                      <li><img src={customer.avatar} alt="" /></li>
                    ))
                  }
                </ul> */}
              {/* <Table prop= {customers}/> */}
              <EnhancedTable customersProps = {customers}/>
          </div>
        </div>
        
        {/* FOOTER */}
        <div className="footer">
          
        </div>
      </div>
      
    </>
  )
}

export default App
