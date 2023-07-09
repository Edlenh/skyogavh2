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
    <section id="home">
    <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-20 md:flex-row md:py-40'>
      <div className='sm:ml-5 md:w-1/2 md:mt-2'>   
                <h1 className='mx-auto font-serif font-bold text-4xl mt-6 md:text-7xl md:mt-0'>YOGA <br />
                   WITH <br />
                    STACEY</h1>
                        <p className='mx-auto text-md mt-4 mb-6'>
                            Connection is why we're here
                                <br />
                             Stay aligned with your own energy and let people meet you there.
                                <br />
                                Every class I get to teach is genuinely special to me.
                                </p>
                                </div>
         <div className='flex justify-center  md:mt-8 md:justify-items-end'>
                <Lottie animationData={treePoseSvg} />
            </div>
        <div className="mx-auto md:mt-2 md:w-2/5">
            <img src={mainImg}
            height={400}
            width={400}
            className='h-auto max-w-full rounded-lg'
            alt='stacey doing yoga with temple behing her'/>
            </div>
        </div>
    </section>
  )
}

export default Home

    