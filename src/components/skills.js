import { Typography } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';


import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const Myskills = () => {
    const skills = [
        { img: 'logo.png', title: 'React', proficiency: 70 },
        { img: 'css.png', title: 'CSS', proficiency: 90 },
        { img: 'js.png', title: 'JavaScript', proficiency:60 },
        { img: 'html.png', title: 'HTML', proficiency: 80 },
    ];
    return (
        <>
            {skills.map((item) => (
                <Card sx={{ width: 150, height:200, marginLeft:'10px', marginTop:'10px', backgroundColor:'#9A7DCD'}}>
                    <CardContent>
                        <Typography textAlign ="center" sx={{ fontSize: 14 }}  >
                            {console.log(item.title)}
                            {item.title}
                        </Typography>

                        <img src={item.img} style={{height:'80px'}}/>

                        <Typography sx={{ mb: 1.5 }}>
                            {item.description}
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={item.proficiency} />

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
                    <Typography variant="p">
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