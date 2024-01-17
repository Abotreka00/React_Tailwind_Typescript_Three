import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import logoAvatar from "../assets/profile-image.png"
import { motion } from "framer-motion"

const divVariants = {
    hidden: {
        x: -10,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
            duration: 0.1,
            type: "spring",
            stiffness: 100,
            restDelta: 0.001
        },
        
    }
}
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

const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa eum recusandae excepturi non ducimus assumenda, sapiente harum amet dolores."

function Landing() {
  return (
    <div id="home" className="relative z-40 w-full h-screen flex items-center">
        <div className="flex gap-14 flex-col-reverse md:justify-between mx-[20px] md:mx-[50px] md:flex-row-reverse items-center">
            <div className="md:w-1/2 z-10 relative before:absolute before:z-[-1] before:w-[50%] before:h-full before:bg-transparent before:border-2 before:border-blue before:-top-10 before:left-[46%] before:-translate-x-1/2 before:rounded-t-full">
                <motion.img variants={{hidden: { y: 0 },visible: { y: 40,transition: {repeat: Infinity,repeatType: "reverse", duration: 3}},}} initial="hidden" animate="visible" className="w-[50%] mx-auto hover:filter hover:saturate-200 transition duration-500" alt="" src={logoAvatar} />
            </div>
            <motion.div 
            variants={divVariants}
            initial= "hidden"
            animate= "visible"
            className="md:w-1/2">
                <h2 className="text-white md:mb-10 mb-4 font-bold text-3xl uppercase">Saleh <span className={` text-deep-blue text-[30px] inline-block w-[150px] pl-7 bg-brush bg-center bg-cover`}>Esper</span></h2>
                {
                    paragraph.split("").map((span, index) => (
                        <motion.span key={index} variants={h3Variants} className="text-white opacity-80 text-[13px]">{span}</motion.span>
                    ))
                }
                <div className="flex gap-2 md:mt-10 mt-4 items-center">

                    <motion.button
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1,x: 0}} 
                    transition = {{delay: 1, duration: 1, type: "spring"}} className="text-white bg-gradient-to-r from-blue via-red to-yellow bg-red py-2 px-6 rounded-md cursor-pointer hover:text-yellow duration-300">
                    Contact Me
                    </motion.button>

                    <motion.button
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1,x: 0,transition: {delay: 1, duration: 1, type: "spring" , stiffness: 200}}}
                    className="text-white hover:text-yellow duration-300 py-2 px-6 rounded-md cursor-pointer border-2 border-red">Let's Talk...</motion.button>

                </div>
                <div className="flex gap-3 text-white mt-10">
                    <motion.a
                        initial={{opacity: 0, x: -50}}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {delay: 2, duration: 1, type: "spring" , stiffness: 200}
                        }}
                        className="hover:text-yellow cursor-pointer duration-300"><Linkedin /></motion.a>
                    <motion.a
                        initial={{opacity: 0, x: -50}}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {delay: 2, duration: 1, type: "spring" , stiffness: 200}
                        }}
                        className="hover:text-yellow cursor-pointer duration-300"><Twitter /></motion.a>
                    <motion.a
                        initial={{opacity: 0, x: -50}}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {delay: 2, duration: 1, type: "spring" , stiffness: 200}
                        }}
                        className="hover:text-yellow cursor-pointer duration-300" href="https://www.facebook.com/saleh.hossam.988"><Facebook /></motion.a>
                    <motion.a
                        initial={{opacity: 0, x: -50}}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {delay: 2, duration: 1, type: "spring" , stiffness: 200}
                        }}
                        className="hover:text-yellow cursor-pointer duration-300"><Instagram /></motion.a>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Landing