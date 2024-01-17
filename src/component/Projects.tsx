
import { motion } from "framer-motion"
import imgOne from "../assets/project-1.jpeg"
import imgTwo from "../assets/project-2.jpeg"
import imgThree from "../assets/project-3.jpeg"
import imgFour from "../assets/project-4 (1).png"
import imgFive from "../assets/project-5.jpeg"

const divVariants = {
    hidden: {
        x: -40
    },
    visible: {
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
const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa eum recusandae excepturi non ducimus assumenda,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa eum recusandae excepturi non ducimus assumenda,"

function Projects() {
  return (
    <div id="projects" className="pt-[100px]">
        <div className="text-center">
            <h2 className="text-white font-bold text-3xl font-opensans mb-4"><span className="text-red font-serif">PRO</span>JECTS</h2>
            <div className="w-[200px] mx-auto h-[2px] bg-gradient-to-r from-blue via-red to-yellow mb-10"></div>
                <motion.div 
                variants={divVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once : true, amount: .5}}
                className="md:w-1/2 w-[90%] mx-auto">
                    {paragraph.split("").map((span, index) => (<motion.span key={index} variants={h3Variants} className="text-white opacity-80 text-[13px]">{span}</motion.span>))} 
                </motion.div>
            </div>
        <div className="relative my-16 mx-[40px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            <motion.div 
            initial={{opacity: 0,y: 100}} whileInView={{opacity: 1, y: 0}} transition = {{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            className="bg-red flex text-center items-center h-72 md:h-full w-full justify-center text-white text-2xl font-bold">
                <p className="w-2/3">Lorem ipsum dolor sit amet.</p>
            </motion.div>
            <motion.div 
            initial={{opacity: 0,y: 100}} whileInView={{opacity: 1, y: 0}} transition = {{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            className="relative group overflow-hidden">
                <img src={imgOne} alt=""/>
                <div className="absolute -translate-x-[100%] group-hover:translate-x-0 duration-300 bg-white/60 w-full h-full top-0 left-0 py-10 px-10">
                    <h3 className="mb-4 text-2xl font-bold">Project 1</h3>
                    <p className="text-[17px]">praesentium possimus soluta ratione totam, placeat itaque, voluptatem, qui aperiam recusandae eveniet magnam autem.</p>
                </div>
            </motion.div>
            <motion.div 
            initial={{opacity: 0,x: 100}} whileInView={{opacity: 1, x: 0}} transition= {{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            className="relative group overflow-hidden">
                <img src={imgTwo} alt="" />
                <div className="absolute translate-x-[100%] group-hover:translate-x-0 duration-300 bg-white/60 w-full h-full top-0 left-0 py-10 px-10">
                    <h3 className="mb-4 text-2xl font-bold">Project 2</h3>
                    <p className="text-[17px]">praesentium possimus soluta ratione totam, placeat itaque, voluptatem, qui aperiam recusandae eveniet magnam autem.</p>
                </div>
            </motion.div>
            <motion.div 
            initial={{opacity: 0,x: 100}} whileInView={{opacity: 1, x: 0}} transition= {{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            className="relative group overflow-hidden">
                <img src={imgThree} alt="" />
                <div className="absolute -translate-y-[100%] group-hover:translate-y-0 duration-300 bg-white/60 w-full h-full top-0 left-0 py-10 px-10">
                    <h3 className="mb-4 text-2xl font-bold">Project 3</h3>
                    <p className="text-[17px]">praesentium possimus soluta ratione totam, placeat itaque, voluptatem, qui aperiam recusandae eveniet magnam autem.</p>
                </div>
            </motion.div>
            <motion.div 
            initial={{opacity: 0,x: -100}} whileInView={{opacity: 1, x: 0}} transition= {{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            className="relative group overflow-hidden">
                <img src={imgFour} alt="" />
                <div className="absolute translate-y-[100%] group-hover:translate-y-0 duration-300 bg-white/60 w-full h-full top-0 left-0 py-10 px-10">
                    <h3 className="mb-4 text-2xl font-bold">Project 4</h3>
                    <p className="text-[17px]">praesentium possimus soluta ratione totam, placeat itaque, voluptatem, qui aperiam recusandae eveniet magnam autem.</p>
                </div>
            </motion.div>
            <motion.div 
            initial={{opacity: 0,x: -100}} whileInView={{opacity: 1, x: 0}} transition= {{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            className="relative group overflow-hidden">
                <img src={imgFive} alt="" />
                <div className="absolute -translate-x-[100%] group-hover:translate-x-0 duration-300 bg-white/60 w-full h-full top-0 left-0 py-10 px-10">
                    <h3 className="mb-4 text-2xl font-bold">Project 5</h3>
                    <p className="text-[17px]">praesentium possimus soluta ratione totam, placeat itaque, voluptatem, qui aperiam recusandae eveniet magnam autem.</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Projects