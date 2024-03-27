import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './layout/NavBar'
import SideBar from './layout/SideBar'
import Footer from './layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        {toggle !== true &&
         <SideBar setToggle={setToggle} />}
        <NavBar setToggle={setToggle} toggle={toggle} />
        <div  style={{ paddingTop: 70, paddingLeft: toggle?0:300 , color:"#43b4be"}}>
        <Outlet toggle={toggle} />
        </div>
        <Footer toggle={toggle} />
      </div>
    );
}
<Outlet/>
export default App
