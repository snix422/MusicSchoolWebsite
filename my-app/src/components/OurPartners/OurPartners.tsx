import { motion } from "framer-motion"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

const OurPartners = () => {
    return (
        <div className="min-h-screen">
            <NavBar />
            <div className="w-screen min-h-screen bg-yellow-900 flex flex-col items-center gap-28 max-sm:justify-center max-sm:gap-10 xl:pt-36 lg:'pt-48 md:pt-28 sm:pt-28 pb-10 max-sm:pt-10">
                <motion.h2 initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.5, duration:1}} className="text-white text-3xl" style={{fontFamily:'Montserrat'}}>Nasi partnerzy</motion.h2>
                <motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.5, duration:1}} className="w-screen flex flex-wrap justify-center gap-28 max-lg:flex-col max-lg:items-center">
                    <div className="xl:w-1/5 lg:w-1/5 h-80 bg-gray-100 rounded md:w-2/5 sm:w-3/5 max-sm:w-4/5">Partner</div>
                    <div className="xl:w-1/5 lg:w-1/5 h-80 bg-gray-100 rounded md:w-2/5 sm:w-3/5 max-sm:w-4/5">Partner</div>
                    <div className="xl:w-1/5 lg:w-1/5 h-80 bg-gray-100 rounded md:w-2/5 sm:w-3/5 max-sm:w-4/5">Partner</div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default OurPartners