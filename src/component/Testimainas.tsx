import { motion } from "framer-motion"
import avatarOne from "../assets/person-1 (1).jpeg"
import avatarTwo from "../assets/person-2 (1).png"
import avatarThree from "../assets/person-3 (1).jpeg"
import { MessageCircle } from "lucide-react"


const divVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.02,
        }
    }
}
const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa eum recusandae excepturi non ducimus assumenda,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa eum recusandae excepturi non ducimus assumenda,"
const h3Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }
}

function Testimainas() {
  return (
    <div className="relative pt-[100px] mb-[200px]" id="testimainas" >
        <div className="md:mx-[40px] mx-[20px]">
            <h2 className="text-red text-3xl font-bold uppercase font-serif mb-4">Testimainas</h2>
            <div className="w-[200px] h-[2px] bg-gradient-to-r from-blue via-red to-yellow mb-10"></div>
            <motion.div variants={divVariants} initial="hidden" whileInView="visible" viewport={{once : true, amount: .5}} className="md:w-1/2 w-[90%] ">{paragraph.split("").map((span, index) => (<motion.span key={index} variants={h3Variants} className="text-white opacity-80 text-[13px]">{span}</motion.span>))} </motion.div>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:mx-[40px] mx-[20px] mb-10 mt-32">
            <motion.div variants={{hidden: {opacity: 0, scale: 0.8}, visible: {opacity: 1, scale: 1}}} initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 2, type: "spring"}} className="relative pb-14 pt-20 rounded-lg text-white px-16 bg-red">
                <img src={avatarOne} alt="" className="absolute w-24 rounded-full -top-14 left-1/2 -translate-x-1/2"/>
                <p><MessageCircle /></p>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repudiandae.</p>
            </motion.div>
            <motion.div variants={{hidden: {opacity: 0, scale: 0.8}, visible: {opacity: 1, scale: 1}}} initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.4, type: "spring", duration: 2}} className="relative pb-14 sm:mt-0 mt-14 sm: pt-20 rounded-lg text-white px-16 bg-red">
                <img src={avatarTwo} alt="" className="absolute w-24 rounded-full -top-14 left-1/2 -translate-x-1/2"/>
                <p><MessageCircle /></p>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repudiandae.</p>
            </motion.div>
            <motion.div variants={{hidden: {opacity: 0, scale: 0.8}, visible: {opacity: 1, scale: 1}}} initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.8, type: "spring", duration: 2}} className="relative pb-14 md:mt-0 mt-14 sm: pt-20 rounded-lg text-white px-16 bg-red">
                <img src={avatarThree} alt="" className="absolute w-24 rounded-full -top-14 left-1/2 -translate-x-1/2"/>
                <p><MessageCircle /></p>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repudiandae.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Testimainas