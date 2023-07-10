// import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types";
import {motion} from "framer-motion"


const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1},
}

type Props = {
    icon: JSX.Element;
    name: string,
    desc: string,
    setSelectedPage: (value:SelectedPage)=>void;
}

const CustomerReview = ({icon, name, desc}: Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                {icon}
                </div>
            </div>
            <h4 className="font-bold">{name}</h4>
            <p className="my-3 text-gray-500">{desc}</p>
         
        </motion.div>
  )
}

export default CustomerReview