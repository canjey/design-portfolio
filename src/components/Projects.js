import React from "react";
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";


export default function Projects() {
    return (

        <>
        <Grid container>
            <Grid item>
                <Typography variant="body1">
                    Recent Works
                </Typography>
                <Typography variant="h3">
                    My Best <span style={{color:"yellow"}}> Projects</span>

                </Typography>

            </Grid>
            <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={6}>
                <img src="Cmak.png" width="90%" />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4">
                E-Commerce Website
                </Typography>
                <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography>
            </Grid>
            </Grid>
            <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={6}>
                <img src="bullion.png" width="90%" />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4">
                Business Website
                </Typography>
                <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography>
            </Grid>
            </Grid>
            <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={6}>
                <img src="Community.png" width="90%" />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4">
                Community Website
                </Typography>
                <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography>
            </Grid>
            </Grid>
            <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={6}>
                <img src="Kate.png" width="90%" />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4">
                Portfolio Website
                </Typography>
                <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography>
            </Grid>
            </Grid>


        </Grid>
        </>
    )
}