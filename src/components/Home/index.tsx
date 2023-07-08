import { SelectedPage } from '@/shared/types'
import mainImg from "@/assets/images/mainSk.webp"
import CTA from '@/shared/CTA'
import Lottie from "lottie-react";
import treePoseSvg from "@/assets/images/treepose.json"



type Props = {
    setSelectedPage: (value: SelectedPage)=> void;
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <section id="home"
    className='gap-16 bg-gray-300 py-10 md:h-full md:pb-0'
    >
      {/* MAIN HEADER*/}
      <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/* MAIN TITLE */}
        <div className='z-10 mt-32 md:basis-3/5'>
            {/* HEADINGS */}
            <div className='md:-mt-20'>
                <div>
                    <div>
                        <h1 className='text-5xl font-bold sm:text-7xl'>YOGA</h1>
                        <h2 className='text-5xl font-bold sm:text-7xl'>WITH STACEY</h2>
                    </div>
                </div>
                <p className='mt-8 text-sm '>
                    Connection is why we're here
                    <br />
                    Stay aligned with your own energy and let people meet you there.
                    <br />
                    Every class I get to teach is genuinely special to me.
                </p>
            </div>
            {/* ACTIONS */}
            <div className='mt-8 flex items-center gap-8 md:justify-start'>
                <CTA setSelectedPage={setSelectedPage}>
                    <button>CONTACT</button>
                </CTA>
                <CTA setSelectedPage={setSelectedPage}>
                    <button 
                    className='px-2'
                    onClick={()=> setSelectedPage(SelectedPage.Contact)}

                    >ABOUT</button>
                </CTA>
            </div>
        </div>
        {/* IMAGE */}
        <div className='flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end '>
            <img src={mainImg}
            className='rounded-lg'
            alt='stacey doing yoga with temple behing her'/>
        </div>
      </div>
    </section>
  )
}

export default Home