import { Typography } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import CardContent from '@mui/material/CardContent';


const Myskills = () => {
    const skills = [
        { img: '', title: 'React', proficiency: '' },
        { img: '', title: 'CSS', proficiency: '' },
        { img: '', title: 'JavaScript', proficiency: '' },
        { img: '', title: 'HTML', proficiency: '' },
    ];
    return (
        <>
            {skills.map((item) => (
                <Card sx={{ width: 150, height:200, marginLeft:'10px', marginTop:'10px' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }}  >
                            {console.log(item.title)}
                            {item.title}
                        </Typography>

                        <Typography sx={{ mb: 1.5 }}>
                            {item.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}

export default function Skills() {
    return (
        <>
            <Grid container columnSpacing={1} sx={{height:'50vh', marginTop:'30px', }}>
                <Grid item xs={6}>
                    <Typography >
                        My Skills
                    </Typography>
                    <Typography variant="h3" sx={{marginTop:'20px'}}>
                        My <span style={{color:'yellow'}}>
                            Skills
                            </span> & Experiences
                    </Typography>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{display:'flex'}}>
                    <Myskills />
                </Grid>
            </Grid>
        </>
    )
}