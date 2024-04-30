import { Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function Contact() {
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <Typography>
                        Get in Touch
                    </Typography>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>

                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={5.5} sx={{ marginRight: '20px' }}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" color="secondary" fullWidth />
                        </Grid>
                        <Grid item xs={6}  >
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" color="secondary" fullWidth />
                        </Grid>

                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth sx={{ marginTop: '10px' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth sx={{ marginTop: '10px' }} />

                    </Grid>
                    <Button variant="contained" sx={{ backgroundColor: "#9A7DCD", color: "#FFFFFF" }} fullWidth>Submit</Button>




                </Grid>
            </Grid>
        </>
    )
}