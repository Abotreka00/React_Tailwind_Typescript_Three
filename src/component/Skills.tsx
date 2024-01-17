import { motion } from "framer-motion"
import skillsimg from "../assets/skills-image.png"
function Skills() {

const divVariants = {
    hidden: {
        opacity: 0,
        x: -40
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            type: "spring",
            staggerChildren: 0.02,
        }
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
const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa eum recusandae excepturi non ducimus assumenda,"

  return (
    <div id="skills" className="relative flex flex-col justify-between py-[140px]">
        <div className="flex flex-col md:items-center md:flex-row md:mx-[40px] mx-[20px] gap-20 md:gap-4">
            <motion.div 
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once : true, amount: .5}}
            className="md:w-2/6 w-full">
                <h2 className="text-white font-bold text-3xl font-opensans mb-4">MY <span className="text-red font-serif">SKILLS</span></h2>
                <div className="w-[50%] h-[2px] bg-gradient-to-r from-blue via-red to-yellow mb-10"></div>
                {
                    paragraph.split("").map((span, index) => (
                        <motion.span key={index} variants={h3Variants} className="text-white opacity-80 text-[13px]">{span}</motion.span>
                    ))
                } 
            </motion.div>
            <div className="relative md:w-2/3 w-full z-10 before:absolute before:z-[-1] before:w-[70%] before:h-full before:bg-transparent before:border-2 before:border-blue before:-top-10 before:left-[46%] before:-translate-x-1/2">
                <img className="hover:filter w-2/3 mx-auto hover:saturate-200 transition duration-500" alt="" src={skillsimg} />
            </div>
        </div>
        <div
            className="w-full px-[40px] my-[60px] grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-10">
            <motion.div 
            initial={{opacity: 0,y: 100}} whileInView={{opacity: 1,y: 0}} transition = {{duration: 1,type: "spring"}} 
            viewport={{once: true, amount: 0.5}}
            >
                <div className="w-full py-3 px-5 rounded-md bg-gradient-to-r from-deep-blue from-[30%] to-blue to-[90%] ">
                    <p className="text-white font-serif font-bold text-3xl">01</p>
                    <p className="text-white font-serif font-bold text-2xl mt-2">SALEH</p>
                </div>
                <p className="text-white mt-4 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore at blanditiis earum consectetur odio?</p>
            </motion.div>
            <motion.div 
            initial={{opacity: 0,y: 100}} whileInView={{opacity: 1,y: 0}} transition = {{delay : .5, duration: 1,type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            >
                <div className="w-full py-3 px-5 rounded-md bg-gradient-to-r from-deep-blue from-[30%] to-red to-[90%] ">
                    <p className="text-white font-serif font-bold text-3xl">02</p>
                    <p className="text-white font-serif font-bold text-2xl mt-2">HAMZA</p>
                </div>
                <p className="text-white mt-4 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore at blanditiis earum consectetur odio?</p>
            </motion.div>
            <motion.div 
            initial={{opacity: 0,y: 100}} whileInView={{opacity: 1,y: 0}} transition = {{delay : 1, duration: 1,type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            >
                <div className="w-full py-3 px-5 rounded-md bg-gradient-to-r from-deep-blue from-[30%] to-yellow to-[90%] ">
                    <p className="text-white font-serif font-bold text-3xl">03</p>
                    <p className="text-white font-serif font-bold text-2xl mt-2">MAHMOUD</p>
                </div>
                <p className="text-white mt-4 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore at blanditiis earum consectetur odio?</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Skills