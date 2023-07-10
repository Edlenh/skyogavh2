// import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"

type Props = {
    icon: JSX.Element;
    name: string,
    desc: string,
    setSelectedPage: (value:SelectedPage)=> void
}

const CustomerReview = ({icon, name, desc}: Props) => {
  return (
    <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>

        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                {icon}
                </div>
            </div>
            <h4 className="font-bold">{name}</h4>
            <p className="my-3 text-gray-500">{desc}</p>
            {/* <AnchorLink>
                Something maybe im not sure  
            </AnchorLink> */}
        </div>
  )
}

export default CustomerReview