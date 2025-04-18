import React from 'react'
import { NavLink} from 'react-router-dom'
import { HeaderContext } from './HeaderContext'

function Menu() {

  const {setTileHeader} = React.useContext(HeaderContext)

  const handleChangeTitle = (title) => {
    setTileHeader(title)
  }

  return (
    <div className="menu">

                {/* MENU */}

        <nav className="menu">
          <NavLink  to = "/logo" className = {({isActive}) => `child ${ isActive ? 'active' : ''}`} onClick={()=>handleChangeTitle("Dashboard")}>
             <img src="/Image 1858.png" alt="" height="20%"/>
          </NavLink>
          <NavLink to = "/" end className = {({isActive}) => `child ${ isActive ? 'active' : ''}`} onClick={()=>handleChangeTitle("Dashboard")}>
              <img src="/Squares four 1.png" alt="" /> Dashboard
          </NavLink>
          <NavLink to = "/teams" className = {({isActive}) => `child ${ isActive ? 'active' : ''}`} onClick={()=>handleChangeTitle("Teams")}>
              <img src="Groups.png" alt="" /> Teams
          </NavLink>
          <NavLink to = "/anatylics" className = {({isActive}) => `child ${isActive ? 'active' : ' '}`} onClick={()=>handleChangeTitle("Anatylics")}>
             <img src="/Pie chart.png" alt="" /> Anatylics
          </NavLink>    
          <NavLink to = "/messengers" className = {({isActive}) => `child ${isActive ? 'active' : ''}`} onClick={()=>handleChangeTitle("Messengers")}>
              <img src="/Chat.png" alt="" /> Messengers
          </NavLink>
          <NavLink to = "/intergrations" className={({isActive}) => `child ${isActive ? 'active' : ''}`} onClick={()=>handleChangeTitle("Intergrations")}>
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
