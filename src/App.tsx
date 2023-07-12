import "./index.css"
import { useEffect, useState } from "react"


// Components / pages
import Navbar from "@/components/Navi"
import Home from "@/components/Home"
import About from "./components/About"
import {SelectedPage} from "@/shared/types"
import Reviews from "./components/Reviews"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY ===0){
        setIsTop(true)
        setSelectedPage(SelectedPage.Home)
      }
      else{
        setIsTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className='app text-primary-200'> 
    <Navbar
    isTop = {isTop} 
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage} 
    />  
    <Home setSelectedPage={setSelectedPage}/>
    <About setSelectedPage={setSelectedPage} />
    <Reviews setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
