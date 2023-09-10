import { motion } from "framer-motion"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

const AboutUs = () => {
    return (
        <div className="min-h-screen">
            <NavBar />
            <div className="w-screen h-screen bg-yellow-900 flex flex-col items-center gap-28 max-sm:justify-center max-sm:gap-10 xl:pt-48 lg:'pt-48 md:pt-48 sm:pt-48">
                <motion.h2 initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.5, duration:1}} className="text-white text-3xl" style={{fontFamily:'Montserrat'}}>O nas</motion.h2>
                <motion.p initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.5, duration:1}} className="text-white text-lg w-3/5" style={{fontFamily:'Montserrat'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta facilis laboriosam aperiam molestiae et! Magni, consequatur! Ipsam labore, iusto illo aliquam ex sequi consequuntur facere dicta error fuga itaque!</motion.p>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs