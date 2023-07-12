import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import Headers from "@/shared/Headers";
import CTA from "@/shared/CTA";
import aboutImg from "@/assets/images/backwards.webp"

type Props = {
    setSelectedPage:(value:SelectedPage) => void;
}

const About = ({setSelectedPage}: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.About)}>
        <motion.div
          className="md:my-5 md:w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.95}}
          variants={{
          hidden:{opacity: 0, x:-10},
          visible: {opacity: 1, x:0},
          }}
        >
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            <div>
            <img src={aboutImg}
                    height={400}
                    width={400}
                    className='mx-auto rounded-lg mb-16'
                    alt='stacey doing yoga bending backwards'/>
            </div>
                 <div>
                 <Headers>
                  MY <span className="text-primary-400">MISSION</span>   
                 </Headers>
                 <div>
                  <p className="my-5 text-center">My intention for every class I teach is for students to be safe, find gratitude for themselves, their mind, body, and spirit.
                  I value every class I teach and every student I get to connect with.
                  </p>
                  <p className="mb-5 text-center">Go where your energy is reciprocated. celebrated, and appreciated</p>
                 </div>
                 <div className="mt-8 flex mb-8 justify-center">
                  <CTA setSelectedPage={setSelectedPage}> LETS CONNECT </CTA>
                 </div>
                 <div>
                 </div>
                </div>
                 </div>
            </motion.div>
            </motion.div>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.95}}
               variants={{
               hidden:{opacity: 0, x:-10},
               visible: {opacity: 1, x:0},
               }}>
            <p className='mx-auto text-md text-center font-serif font-italic text-4xl mt-8 md:text-6xl'>Enjoy the beauty of becoming.</p>
            </motion.div>
           
        </section>
  )
}

export default About