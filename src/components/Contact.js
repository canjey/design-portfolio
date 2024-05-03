import { Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { hover } from "@testing-library/user-event/dist/hover";



export default function Contact() {
    return (
        <>
            <Grid container sx={{ marginTop: '50px' }}>
                <Grid item xs={6}>
                    <Typography variant="p">
                        Get in Touch
                    </Typography>
                    <Typography>
                        As a frontend developer passionate about creating intuitive and visually appealing user interfaces,
                        I'm excited to collaborate on innovative projects. Whether you have a question, want to discuss a
                        potential collaboration, or simply want to say hello, feel free to reach out through the form below or connect with me on LinkedIn.
                    </Typography>

                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={5.5} sx={{ marginRight: '20px' }}>
                            <TextField id="outlined-basic" label="First Name" variant="outlined"  sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white', // Set border color to white
                                    },
                                    '& input': {
                                        color: 'white', // Set text color to white
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white', // Set label text color to white
                                    },
                                },
                            }} fullWidth />
                        </Grid>
                        <Grid item xs={6}  >
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white', // Set border color to white
                                    },
                                    '& input': {
                                        color: 'white', // Set text color to white
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white', // Set label text color to white
                                    },
                                },
                            }}  fullWidth />
                        </Grid>

                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Subject" variant="outlined" sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Set border color to white
                                },
                                '& input': {
                                    color: 'white', // Set text color to white
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white', // Set label text color to white
                                },
                            },
                            marginTop:'10px'
                        }} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Message" variant="outlined" sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Set border color to white
                                },
                                
                                '& input': {
                                    color: 'white', // Set text color to white
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white', // Set label text color to white
                                },
                            },
                            marginTop:'10px'
                        }} fullWidth />

                    </Grid>
                    <Button variant="contained" sx={{ backgroundColor: "#9A7DCD", color: "#FFFFFF" }} fullWidth>Submit</Button>




                </Grid>
            </Grid>
        </>
    )
}