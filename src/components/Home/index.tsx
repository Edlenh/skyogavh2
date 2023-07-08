import React from 'react'
import { SelectedPage } from '@/shared/types'
import mainImg from "@/assets/images/mainImg.webp"
import CTA from '@/shared/CTA'


type Props = {
    setSelectedPage: (value: SelectedPage)=> void;
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <section
    id="home"
    className='gap-16 bg-gray-100 py-10 md:h-full md:pb-0'
    >
        {/* background and main header */}
    <div className='md:flex mx-auto w-5/6 items-center justify-center md: h-5/6'>
        {/* main header */}
        <div className='z-10 mt-32 md:basis-3/5'>
            {/* subs */}
            <div>
                <div>
                    <div>
                        {/* <img src={mainImg} alt="main photo of stacey meditating" /> */}
                    </div>
                    <h1>YOGA WITH STACEY</h1>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia id debitis, suscipit iure quo cupiditate ipsa laboriosam! Ut </p>
        </div>
        <div>
            <CTA 
            
            setSelectedPage={setSelectedPage}>
                <button className='text-sm font-bold hover:primary-color-400'
                onClick={()=> setSelectedPage(SelectedPage.Contact)}
                > CONTACT</button>
                </CTA>
            </div>
        <div>
            <h2>STACEY STACEY</h2>
        </div>
    </div>
    </section>
  )
}

export default Home