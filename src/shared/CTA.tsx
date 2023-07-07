import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode; 
    setSelectedPage:(value: SelectedPage)=> void 
}

const CTA = ({children, setSelectedPage}: Props) => {
  return (
   <AnchorLink
   className="text-white rounded-md px-6 py-2 hover:bg-primary-300  bg-primary-400 hover:text-white"
   onClick={()=> setSelectedPage(SelectedPage.Contact)}
   href="#contact"
   >
    {children}
   </AnchorLink>
  )
}

export default CTA