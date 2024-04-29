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

        </Grid>
        </>
    )
}