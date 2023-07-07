import "./index.css"
import { useState } from "react"
import Navbar from "@/components/Navi"
import {SelectedPage} from "@/shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className='app text-primary-200'> 
    <Navbar 
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage} 
    />  
    </div>
  )
}

export default App
