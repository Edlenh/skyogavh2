import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/medQuer";
import CTA from "@/shared/CTA";

//import logo

type Props = {
    isTop: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) =>void
};

const Navbar = ({isTop, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const largeScreens = useMediaQuery("(min-width: 720px)");
    const [isMenuToggle, setMenuToggle]= useState<boolean>(false)
    const navbarBg = isTop ? "" : "bg-gray-100 drop-shadow"

    return ( 
        <nav>
            <div className={`${navbarBg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}> 
                    <h1>LOGO</h1>
                    {largeScreens ? (
                    <ul className={`${flexBetween} gap-8 text-sm `} >
                        <Link page ="Home"selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page ="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                        <Link page ="Gallery"selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                        <Link page ="Reviews" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                        {/* <Link page ="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> */}
                        <CTA setSelectedPage={setSelectedPage} >
                            Contact Me
                        </CTA>
                        </ul>
                          ):(
                            <button className="rounded-full bg-primary-400 p-2"
                            onClick={()=> setMenuToggle(!isMenuToggle)}>
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {!largeScreens && isMenuToggle && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-400 drop-shadow-xl">
                    <div className="flex justify-end p-12"> 
                    <button onClick={()=> setMenuToggle(!isMenuToggle)}>
                    <XMarkIcon className="h-6 w-6 text-gray-50"/> 
                    </button>
                 </div>
                 <ul className="ml-[33%] flex flex-col gap-10 text-2xl text-gray-50">
                        <Link page ="Home"selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page ="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                        <Link page ="Gallery"selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                        <Link page ="Reviews" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                        <Link page ="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </ul>
            </div>
            )}
        </nav>
     );
}
 
export default Navbar;
