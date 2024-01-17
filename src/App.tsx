import './App.css'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Landing from './component/Landing'
import Navbar from './component/Navbar'
import Projects from './component/Projects'
import Skills from './component/Skills'
import Testimainas from './component/Testimainas'

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <div className="w-full h-[2px] bg-gradient-to-r from-blue via-red to-yellow"></div>
      <Skills />
      <div className="w-full h-[2px] bg-gradient-to-r from-blue via-red to-yellow"></div>
      <Projects />
      <div className="w-full h-[2px] bg-gradient-to-r from-blue via-red to-yellow"></div>
      <Testimainas />
      <div className="w-full h-[2px] bg-gradient-to-r from-blue via-red to-yellow"></div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
