import React from "react";
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";


export default function Projects() {
    return (

        <>
            <Grid container>
                <Grid item>
                    <Typography variant="p">
                        Recent Works
                    </Typography>
                    <Typography variant="h3">
                        My Best <span style={{ color: "yellow" }}> Projects</span>

                    </Typography>

                </Grid>
                <Grid container sx={{ marginTop: '20px' }}>
                    <Grid item xs={6}>
                        <img src="Cmak.png" width="90%" id="image_rotate"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="p">
                            E-Commerce Website
                        </Typography>
                        <Typography variant="body1" >
                            Overview: <br />
                            I designed and developed an e-commerce website for a fictional boutique fashion brand, targeting fashion enthusiasts looking for unique and trendy apparel and accessories.

                            Design Process:
                            I started with user research to understand the target audience's preferences and shopping behaviors. I then created wireframes and prototypes to visualize the website's layout and functionality, incorporating responsive design principles for optimal viewing on desktops, tablets, and smartphones.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ marginTop: '20px' }}>
                    <Grid item xs={6}>
                        <img src="bullion.png" width="90%" id="image_rotate" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="p">
                            Business Website
                        </Typography>
                        <Typography variant="body1" >
                            User-Centric Design Approach: <br />
                            Conducted extensive user research, including surveys and heat mapping analysis, to identify pain points and user preferences.
                            Wireframing and Prototyping:
                            Created interactive wireframes and prototypes using Figma, focusing on intuitive navigation, clear product categorization, and streamlined checkout flows.
                            Visual Design Overhaul:
                            Collaborated with the design team to revamp the visual identity, incorporating modern UI elements, vibrant color schemes, and high-quality product imagery.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ marginTop: '20px' }}>
                    <Grid item xs={6}>
                        <img src="Community.png" width="90%" id="image_rotate"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="p">
                            Community Website
                        </Typography>
                        <Typography variant="body1">
                            Overview:
                            I designed and developed an e-commerce website for a fictional boutique fashion brand, targeting fashion enthusiasts looking for unique and trendy apparel and accessories.

                            Design Process:
                            I started with user research to understand the target audience's preferences and shopping behaviors. I then created wireframes and prototypes to visualize the website's layout and functionality, incorporating responsive design principles for optimal viewing on desktops, tablets, and smartphones.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ marginTop: '20px' }}>
                    <Grid item xs={6}>
                        <img src="Kate.png" width="90%" id="image_rotate" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="p">
                            Portfolio Website
                        </Typography>
                        <Typography variant="body1" >
                        Designed and developed several responsive websites and web applications, 
                        optimizing performance and user experience across desktop and mobile devices.
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>
        </>
    )
}