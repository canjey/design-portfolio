import { Typography } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

export default function About() {

    const ExampleComponent = () => {
        return (
            <TypeAnimation
                sequence={[
                    'A UI/UX DESIGNER', // Types 'One'
                    1000, // Waits 1s
                    'A FRONTEND DEVELOPER', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'A WEB DEVELOPER', // Types 'Three' without deleting 'Two'
                    () => {
                        console.log('Sequence completed');
                    },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
            />
        );
    };
    return (
        <>
            <Box sx={{ height: '80vh', }}>
                {/* <Particle /> */}
                <Grid container>
                    <Grid item xs={6} sx={{ textAlign: 'left', marginTop: '5%' }}>
                        <Typography variant="h3" sx={{ fontSize: '40px', fontWeight: 'bold', }}>
                            HI, I'M
                            <span style={{ color: 'yellow', marginLeft: '10px' }}>
                                CAROL
                            </span>

                        </Typography>
                        <ExampleComponent />
                        <Typography variant="body1" sx={{ marginTop: '30px' }}>
                            I am a passionate frontend developer with a keen eye for UI/UX design.
                            I specialize in crafting intuitive and visually appealing user interfaces that enhance the overall user experience.
                            With a solid foundation in HTML, CSS, and JavaScript, I bring creativity and technical expertise to every project I work on.
                        </Typography>
                        <Button variant="contained" sx={{ marginTop: '30px', backgroundColor: '#9A7DCD' }}>Hire Me</Button>
                        <Button variant="contained" sx={{ marginTop: '30px', marginLeft: '30px', backgroundColor: '#9A7DCD' }}>Download CV</Button>

                    </Grid>
                    <motion.Grid
                        initial={{ x: -1000 }} // Start off-screen to the left
                        animate={{ x: 0 }} // Move to the original position (left to right)
                        transition={{ duration: 1 }} // Animation duration in seconds
                    >
                        <img src='avatar-1.png' width="500px" alt="animated" height="500px" style={{ borderRadius: '50%', marginTop: '10px' }} />
                    </motion.Grid>

                </Grid>
            </Box>
        </>
    )
}