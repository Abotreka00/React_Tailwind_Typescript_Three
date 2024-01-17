import {motion} from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"


function Footer() {
  return (
    <div className="relative px-10 pt-10 pb-5 bg-red w-full h-40 mt-[100px]">
        <div className="flex gap-3 text-white mb-10">
            <motion.a
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1,x: 0,transition: {delay: 2, duration: 1, type: "spring" , stiffness: 200}}}
                className="hover:text-yellow cursor-pointer duration-300"><Linkedin /></motion.a>
            <motion.a
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1,x: 0,transition: {delay: 2, duration: 1, type: "spring" , stiffness: 200}}}className="hover:text-yellow cursor-pointer duration-300"><Twitter /></motion.a>
            <motion.a
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1,x: 0,transition: {delay: 2, duration: 1, type: "spring" , stiffness: 200}}}className="hover:text-yellow cursor-pointer duration-300" href="https://www.facebook.com/saleh.hossam.988"><Facebook /></motion.a>
            <motion.a initial={{opacity: 0, x: -50}}animate={{opacity: 1,x: 0,transition: {delay: 2, duration: 1, type: "spring" , stiffness: 200}}}className="hover:text-yellow cursor-pointer duration-300"><Instagram /></motion.a>
        </div>
        <div className="text-yellow flex justify-between font-bold">
            <p className="uppercase">Saleh hossam</p>
            <p>@2024 Saleh All Eights Reserved</p>
        </div>
    </div>
  )
}

export default Footer