import React from 'react'
import { HeaderContext } from './HeaderContext.jsx'

function Header() {

  const {titleHeader} = React.useContext(HeaderContext)
  return (
    <div className="header">
        <div className="child"><h2>{titleHeader}</h2></div>

        <div className="child">
            <input type="text"  placeholder='Search...' style={{height:"30%", width:"50%"}}/>
            <img src="/Bell 1.png" alt="" height="50%"/>
            <img src="/Question 1.png" alt="" height="50%" />
            <img src="/Avatar 313.png" alt=""  height="80%"/>
        </div>
    </div>      
  )
}

export default Header
