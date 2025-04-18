import {  useEffect, useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import './App.css'


import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import Content from './pages/Content.jsx'
import Footer from './components/Footer.jsx'
import Rout from './components/Router.jsx'
import { AlertTitle } from '@mui/material'
import { HeaderContext } from './components/HeaderContext.jsx'



function App() {

  
  const [titleHeader , setTileHeader] = useState("Dashboard")

  return (
    <>
      <HeaderContext.Provider value = {{titleHeader, setTileHeader }}>
        <BrowserRouter>
            <div className="container">
              <Header/>

                <Menu/>
                <Rout/>
                {/* <Content/> */}
              
                <Footer/>
            </div>
          </BrowserRouter>
      </HeaderContext.Provider>
    
    </>
  )
}

export default App
