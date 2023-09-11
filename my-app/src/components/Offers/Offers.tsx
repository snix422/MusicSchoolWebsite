import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from "framer-motion";

const Offers = () => {
    return (
        <div className="min-h-screen">
            <NavBar />
            <div className="w-screen min-h-screen bg-yellow-900 flex flex-col items-center gap-28 pb-10 max-sm:justify-center max-sm:gap-10 xl:pt-48 lg:pt-48 md:pt-28 sm:pt-28">
                <motion.h2 initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.5, duration:1}} className="text-white text-3xl max-sm:pb-28" style={{fontFamily:'Montserrat'}}>Oferta edukacyjna</motion.h2>
                <motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.5, duration:1}} className="w-screen flex flex-col items-center">
                <Accordion className="w-3/5  max-md:w-4/5">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                >
                    <Typography style={{fontFamily:'Montserrat'}}>Gitara</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                     <Typography style={{fontFamily:'Montserrat'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="w-3/5 max-md:w-4/5">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                >
                    <Typography style={{fontFamily:'Montserrat'}}>Fortepian</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                     <Typography style={{fontFamily:'Montserrat'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="w-3/5  max-md:w-4/5">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                >
                    <Typography style={{fontFamily:'Montserrat'}}>Skrzypce</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                     <Typography style={{fontFamily:'Montserrat'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="w-3/5  max-md:w-4/5">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                >
                    <Typography style={{fontFamily:'Montserrat'}}>Perkusja</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                     <Typography style={{fontFamily:'Montserrat'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default Offers