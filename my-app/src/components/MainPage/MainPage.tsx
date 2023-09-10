import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";


const MainPage = () => {
    return(
        <div>
        <NavBar />
        <div className="w-screen h-4/5 bg-yellow-900 flex flex-col justify-center gap-48 pb-20">
            <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.5, duration:1}} className="flex flex-col items-center gap-12 mt-20">
                <div className="max-md:w-3/4 w-2/4 h-64 bg-gray-50 rounded"></div>
                <p className="text-white w-3/5" style={{fontFamily:'Montserrat'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt, dolorem corporis dolores quia minus nemo excepturi, nihil, quisquam recusandae sunt est quod in eos impedit maiores quae reiciendis? Dolorum!</p>
            </motion.div>
            <motion.div initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.5, duration:1}} className="flex flex-col items-center">
                <h2 className="mb-14 text-white text-4xl" style={{fontFamily:'Montserrat'}}>FAQ</h2>
                <Accordion className="w-3/5">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                >
                    <Typography style={{fontFamily:'Montserrat'}}>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                     <Typography style={{fontFamily:'Montserrat'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="w-3/5">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                >
                    <Typography style={{fontFamily:'Montserrat'}}>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                     <Typography style={{fontFamily:'Montserrat'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="w-3/5">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                >
                    <Typography style={{fontFamily:'Montserrat'}}>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                     <Typography style={{fontFamily:'Montserrat'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="w-3/5">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                >
                    <Typography style={{fontFamily:'Montserrat'}}>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                     <Typography style={{fontFamily:'Montserrat'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="w-3/5">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                >
                    <Typography style={{fontFamily:'Montserrat'}}>Accordion 1</Typography>
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

export default MainPage