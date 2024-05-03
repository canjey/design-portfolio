import { Typography } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const Cardetails = () => {
    const details = [
        { figure: 10, description: "Projects Completed" },
        { figure: 5, description: "Years of Experience" },
        { figure: 20, description: "Happy Clients" },
        { figure: 2, description: "Badges Received" },
        { figure: 20, description: "Happy Clients" },
        { figure: 20, description: "Happy Clients" },
        
    ];
    return (
        <>
            {details.map((item) => (
                <Card sx={{ width: 200, height:200, 
                            marginLeft:'10px', backgroundColor:'#9A7DCD',
                            ':hover' : {
                                backgroundColor:'#FF99DC'
                            }
                            }}>
                    <CardContent>
                        <Typography variant="h3" textAlign="center"  gutterBottom>
                        {item.figure}
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.description}
                        </Typography>                       
                    </CardContent>
                </Card>

            ))}

        </>
    )
}



export default function Aboutme() {
    return (
        <>
            <Grid container sx={{height:'80vh'}}>
                <Grid item xs={6} >
                    <Typography variant="p" sx={{ fontFamily: 'poppins' }}>
                        About me
                    </Typography>
                    <Typography variant="h3" sx={{ marginTop: "30px" }}>
                        Professional 
                        <span style={{color:'yellow', marginRight:'10px'}}> Website</span>
                         for Your business
                    </Typography>
                    <Typography sx={{ marginTop: '15px' }}>
                    I am dedicated to continuous learning and staying updated with the latest trends and advancements in frontend development and UI/UX design. 
                    I regularly participate in workshops, online courses, and industry events to enhance my skills and expand my knowledge base.
                    </Typography>
                    <Typography sx={{ marginTop: '15px' }}>
                    <CheckCircleOutlineIcon sx={{color:"yellow", marginRight:'10px' }}/>
                        Frontend Development
                    </Typography>
                    <Typography>
                    <CheckCircleOutlineIcon sx={{color:"yellow", marginRight:'10px' }}/>
                        Backend Development
                    </Typography>
                    <Typography>
                    <CheckCircleOutlineIcon sx={{color:"yellow", marginRight:'10px' }}/>
                        Web Development
                    </Typography>
                    <Typography>
                    <CheckCircleOutlineIcon sx={{color:"yellow", marginRight:'10px' }}/>
                        UI/UX Designer
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', flexWrap:'wrap', marginTop:'50px' }}>
                    <Cardetails />

                </Grid>

            </Grid>
        </>
    )
}