import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
//import logo

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) =>void
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";

    return ( 
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}> 
                    <h1>LOGO</h1>
                    <ul className={`${flexBetween} gap-8 text-sm `} >
                        <Link page ="Home"selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page ="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                        <Link page ="Gallery"selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                        <Link page ="Reviews" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                        <Link page ="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
