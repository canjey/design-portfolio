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
import Box from '@mui/material/Box';
import Header from "../components/Header";


const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
}

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
          <Header />
          <div style={{ padding: '100px' }}>
            <Box>
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}

              >
                <About />

              </motion.div>
            </Box>
            <Box>
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}

              >
                <Aboutme />

              </motion.div>
            </Box>
            <Box>
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}

              >
                <Services />

              </motion.div>
            </Box>
            <Box>
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}

              >
                <Skills />

              </motion.div>
            </Box>
            <Box>
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}

              >
                <Projects />

              </motion.div>
            </Box>
            <Box>
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}

              >
                <Contact />

              </motion.div>
            </Box>

          </div>

        </ThemeProvider >
      </div >
    </>
  )
}
