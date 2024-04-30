import React from "react";
import Topbar from "../components/Topbar";
import About from "../components/About";
import { ThemeProvider, createTheme, duration } from '@mui/material/styles';
import Aboutme from "../components/Aboutme";
import Services from "../components/services";
import Skills from "../components/skills";
import { motion } from 'framer-motion';
import Contact from "../components/Contact";
import darkTheme from "../Theme/theme";
import Projects from "../components/Projects";


export default function Homepage() {
    const variants = {
        hidden: {
          opacity: 0,
          y: 20, // Initial position below (you can adjust this value)
        },
        visible: {
          opacity: 1,
          y: 0, // Final position at the top
          transition: {
            duration: 1.5, // Animation duration
            ease: 'easeOut', // Easing function
          },
        },
      };
    

    
    return (
        <>
            <div>
                <ThemeProvider theme={darkTheme}>
                    <div style={{ padding: '100px' }}>
                        <About />
                        <motion.Grid
                            initial="hidden"
                            animate="visible"
                            variants={variants}>
                            <Aboutme />

                        </motion.Grid>
                        <Services />
                        <Skills />
                        <Projects />
                        <Contact />

                    </div>

                </ThemeProvider >
            </div >
        </>
    )
}
