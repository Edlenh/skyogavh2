import { SelectedPage } from '@/shared/types'
import mainImg from "@/assets/images/mainSk.webp"
// import CTA from '@/shared/CTA'
import Lottie , { LottieRefCurrentProps } from "lottie-react";
import treePoseSvg from "@/assets/images/treepose.json"
import { useRef } from 'react';
import {motion} from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage)=> void;
}

const Home = ({setSelectedPage}: Props) => {
  const flowerAni = useRef<LottieRefCurrentProps>(null)
  return (
    <section id="home">
      <motion.div 
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
      className="md:-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 0.95}}
      variants={{
        hidden:{opacity: 0, x:-10},
        visible: {opacity: 1, x:0},
      }}
      >
    <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-20 md:flex-row md:py-40'>
      <div className='sm:ml-5 md:w-1/3 md:mt-8'>   
                <h1 className='mx-auto font-serif font-bold text-4xl mt-6 md:text-6xl md:mt-0'>YOGA <br />
                   WITH <br />
                    STACEY</h1>
                      
                                </div>
         <div className='flex'>
                <Lottie onComplete={()=> flowerAni.current?.goToAndPlay(2,true)} lottieRef={flowerAni} animationData={treePoseSvg} loop={false}/>
            </div>
        <div className="mx-auto md:mt-2 md:w-2/5 md:mr-2">
            <img src={mainImg}
            height={400}
            width={400}
            className='h-auto max-w-full rounded-lg '
            alt='stacey doing yoga with temple behing her'/>
            </div>    
          
        </div>
        <motion.div className='md:mb-6 md:pb-30'
         initial="hidden"
         whileInView="visible"
         viewport={{once: true, amount: 0.5}}
         transition={{duration: 0.95}}
         variants={{
           hidden:{opacity: 0, x:-10},
           visible: {opacity: 1, x:0},}}
        >
        <p className='mx-auto text-md md:mb-6 text-center font-serif font-italic text-4xl mt-6 md:text-6xl md:mt-0'>Connection is why we're here. </p>
        </motion.div>
       
        </motion.div>
    </section>
  )
}

export default Home

    