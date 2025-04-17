import React from 'react'
import { NavLink} from 'react-router-dom'

function Menu() {
  return (
    <div className="menu">
    {/* //       <NavLink  className="child">
    //          <img src="/Image 1858.png" alt="" height="20%"/>
    //       </NavLink>
    //       <NavLink className="child">
    //           <img src="/Squares four 1.png" alt="" /> Dashboard
    //       </NavLink>
    //       <NavLink className="child">
    //           <img src="Groups.png" alt="" /> Teams
    //       </NavLink>
    //       <NavLink className="child">
    //          <img src="/Pie chart.png" alt="" /> Anatylics
    //       </NavLink>
    //       <NavLink className="child">
    //           <img src="/Chat.png" alt="" /> Messengers
    //       </NavLink>
    //       <NavLink className="child">
    //           <img src="/Code.png" alt="" /> Intergrations
    //       </NavLink>

    //       <div className="child">
    //            <img src="/Group.png" alt="" />
    //           <button>Try now</button>
             </div> */}


                {/* MENU */}

        <nav className="menu">
          <NavLink  to = "/logo" className = {({isActive}) => `child ${ isActive ? 'active' : ''}`}>
             <img src="/Image 1858.png" alt="" height="20%"/>
          </NavLink>
          <NavLink to = "/" end className = {({isActive}) => `child ${ isActive ? 'active' : ''}`}>
              <img src="/Squares four 1.png" alt="" /> Dashboard
          </NavLink>
          <NavLink to = "/teams" className = {({isActive}) => `child ${ isActive ? 'active' : ''}`}>
              <img src="Groups.png" alt="" /> Teams
          </NavLink>
          <NavLink to = "/anatylics" className = {({isActive}) => `child ${isActive ? 'active' : ' '}`}>
             <img src="/Pie chart.png" alt="" /> Anatylics
          </NavLink>    
          <NavLink to = "/messengers" className = {({isActive}) => `child ${isActive ? 'active' : ''}`}>
              <img src="/Chat.png" alt="" /> Messengers
          </NavLink>
          <NavLink to = "/intergrations" className={({isActive}) => `child ${isActive ? 'active' : ''}`}>
              <img src="/Code.png" alt="" /> Intergrations
          </NavLink>

          <div className="child">
               <img src="/Group.png" alt="" />
              <button>Try now</button>
          </div>
        </nav>
 
     </div>
  )
}

export default Menu
