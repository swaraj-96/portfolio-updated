import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {
 
  return (
   <div className="flex flex-col min-h-screen dark:bg-darkBgTheme">
    <Header/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default App
