import Header from "./components/Header"
import Home from "./pages/Home"
import { Outlet } from "react-router-dom"

function App() {
 
  return (
   <div>
    <Header/>
    <Outlet/>
   </div>
  )
}

export default App
