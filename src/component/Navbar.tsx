import { Menu, XIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function Navbar() {
    const [ShowMenu, setShowMenu] = useState(true)
    function navScroll() {
        if (window.scrollY > 0) {
          // Replace all classes from element after 50px of scroll
          if (refbg.current != null) {
              refbg.current.classList.add("bg-red")
              refbg.current.classList.remove("bg-deep-blue")
          }
        } else {
            if (refbg.current != null) {
                refbg.current.classList.add("bg-deep-blue")
                refbg.current.classList.remove("bg-red")
            }
        }
    }
    const refbg = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        window.addEventListener('scroll', navScroll)
        const hundler = () => {
            setShowMenu(true)
        } 
        document.addEventListener("mousedown", hundler)
    }, [])
return (
    <>
    <div ref={refbg} className="fixed w-full flex items-center z-50">
        <div className="flex py-[10px] items-center flex-1 justify-between mx-10 ">
            <a href="https://github.com/Abotreka00" className="text-white font-bold text-3xl">SALEH.</a>
            <ul className="hidden md:flex items-center text-white gap-4">
                <li className="cursor-pointer hover:text-yellow duration-300"><a href="#home">Home</a></li>
                <li className="cursor-pointer hover:text-yellow duration-300"><a href="#skills">Skills</a></li>
                <li className="cursor-pointer hover:text-yellow duration-300"><a href="#projects">Projects</a></li>
                <li className="cursor-pointer hover:text-yellow duration-300"><a href="#testimainas">Testimainas</a></li>
                <li className="cursor-pointer hover:text-yellow duration-300"><a href="#contact">Contact</a></li>
            </ul>
            <div onClick={() => setShowMenu(!ShowMenu)} className="text-white md:hidden bg-red p-2 cursor-pointer hover:bg-red/80 duration-300 rounded-full">
                {ShowMenu ? <Menu /> : <XIcon />}
            </div>
        </div>
        <div className={`${ShowMenu ? "hidden" : "flex" }`}>
            <ul className="md:hidden flex flex-col absolute top-[60px] px-10 py-10 left-0 bg-red w-full text-white gap-4">
                <li onClick={() => setShowMenu(true)} className="cursor-pointer hover:text-yellow duration-300 font-bold"><a href="#home">Home</a></li>
                <li onClick={() => setShowMenu(true)} className="cursor-pointer hover:text-yellow duration-300 font-bold"><a href="#skills">Skills</a></li>
                <li onClick={() => setShowMenu(true)} className="cursor-pointer hover:text-yellow duration-300 font-bold"><a href="#projects">Projects</a></li>
                <li onClick={() => setShowMenu(true)} className="cursor-pointer hover:text-yellow duration-300 font-bold"><a href="#testimainas">Testimainas</a></li>
                <li onClick={() => setShowMenu(true)} className="cursor-pointer hover:text-yellow duration-300 font-bold"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
    </>
)
}

export default Navbar