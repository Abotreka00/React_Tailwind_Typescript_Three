import { useRef } from "react"
import imgBg from "../assets/contact-image.jpeg"
import { motion } from "framer-motion"


function Contact() {
    const refText = useRef(document.createElement("input"))
    const refTextchild = useRef(document.createElement("p"))
    const refEmail = useRef(document.createElement("input"))
    const refEmailchild = useRef(document.createElement("p"))
    
    const handleValue = () => {

        if (refText.current.value === "") {
            refTextchild.current.textContent = "This field is requird (Your Name)"
         }
        else {
            refTextchild.current.style.display = "none"
        }
        if (refEmail.current.value === "") {
            refEmailchild.current.textContent = "This field is requird (Your Name)"
        } else {
            refEmailchild.current.style.display = "none"
        }
    }
  return (
    <div id="contact" className="relative w-full px-[20px] md:px-[40px] gap-10 mt-[200px] flex flex-col md:flex-row items-center">
        <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}
        transition={{duration:1, type: "spring"}}
        variants={{hidden:{opacity: 0, x: -200}, visible: {opacity: 1, x: 0}}}
        className="w-full md:w-1/2">
            <img src={imgBg} alt="" />
        </motion.div>
        <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}
        transition={{duration:1, type: "spring", stiffness: 200, mass: 0.5}}
        variants={{hidden:{opacity: 0, x: 200}, visible: {opacity: 1, x: 0}}}
        className="w-full md:w-1/2">
            <h3 className="font-serif mb-4 text-3xl text-white"><span className="uppercase text-yellow">contact me</span> to get started</h3>
            <form className="flex flex-col gap-4">
                <input ref={refText} required className="py-2 pl-4 rounded-lg bg-blue placeholder:text-white font-bold" type="text" placeholder="Your Name" />
                <p className="text-rose-900 font-bold" ref={refTextchild}></p>
                <input ref={refEmail} required className="py-2 pl-4 rounded-lg bg-blue placeholder:text-white font-bold" type="email" placeholder="Your Email" />
                <p className="text-rose-900 font-bold" ref={refEmailchild}></p>
                <textarea className="py-2 pl-4 rounded-lg bg-blue min-h-[190px] placeholder:text-white font-bold" placeholder="Any a Quaitions ?"></textarea>
                <input onClick={() => {handleValue()}} type="submit" value="SEND ME A MESSAGE" className="text-black font-bold w-fit bg-yellow p-2 rounded-md cursor-pointer" />
            </form>
        </motion.div>
    </div>
  )
}

export default Contact
