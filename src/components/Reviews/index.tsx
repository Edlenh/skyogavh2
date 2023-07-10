import { SelectedPage, ReviewType } from "@/shared/types"
import { motion } from "framer-motion";
import { HiHeart , HiOutlineSparkles , HiOutlineHeart } from "react-icons/hi";
import Headers from "@/shared/Headers";
import CustomerReview from "./review";

const reviews: Array<ReviewType> = [
    {
        icon: <HiHeart className="h-6 w-6"/>,
        desc: "Stacey is one of the most knowledgeable, caring, passionate and FUN teachers i've ever encountered. She's extremely encouraing and empowering, and shows up not only as a humble leader, but also as a compassionate fellow yogi. Her precense was a game changer during our 300hr yoga teacher training.",
        name: "K.A"
    }, 
    {
        icon: <HiOutlineSparkles className="h-6 w-6"/>,
        desc: "Couldn't recommend Stacey enough!! I did my 200YTT with Stacey as my instructor, she brought so much fresh energy and her passion for yoga shined through in every class! Thanks to Stacey I managed to get a yoga job four days after completing my course. Thank you again Stacey.",
        name: "J.T"
    }, 
    {
        icon: <HiOutlineHeart className="h-6 w-6"/>,
        desc: "I had the immense pleasure of being a student of Stacey's 300YTT in Koh Phangan, Thailand. From day one Stacey made me feel comfortable with her charismatic and warm demeanor. The dedication and care she took into teaching us each session was evident in the way she positively interacted with every student.",
        name: "A.M"
    }, 
]




type Props = {
    setSelectedPage: (value: SelectedPage)=> void;
}

function Reviews({ setSelectedPage }: Props) {
  return (
    <section id="reviews" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.Review)}
        //   className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.95}}
          variants={{
            hidden:{opacity: 0, x:-10},
            visible: {opacity: 1, x:0},
          }}
        >
            <Headers>WHAT THEY'RE SAYING</Headers>
            <p className="my-5 text-sm">Every Class I get to teach is special to me</p>
           

            <div className="md:flex items-center justify-between gap-4 mt-5">
                {reviews.map((review: ReviewType)=>(
                    <CustomerReview
                    key={review.desc}
                    icon={review.icon}
                    name={review.name}
                    desc={review.desc}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
                 </div>
           

        </motion.div>
    </section>
  )
}

export default Reviews