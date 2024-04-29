import { Typography } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import CardContent from '@mui/material/CardContent';


const ServiceDetails = () => {
    const details = [
        { img: '', title: 'Frontend Development', description: ' Proficient in HTML, CSS, and JavaScript, with hands-on experience in modern frameworks like React and Vue.js. I enjoy leveraging the latest tools and technologies to build responsive and dynamic web applications.' },
        { img: '', title: 'UI/UX Design', description: 'Skilled in creating intuitive and visually appealing designs using tools like Figma, Adobe XD, and Sketch. I focus on user research, wireframing, prototyping, and usability testing to ensure exceptional user experiences.' },
        { img: '', title: 'Wordpress', description: 'Leveraging CMS tools such as Wordpress to create appealing websites for business and organizations' },
        { img: '', title: 'Responsive Design', description: 'Experienced in implementing responsive web design principles to ensure seamless user experiences across devices, from desktops to mobile devices.' },
        { img: '', title: 'Performance Optimization', description: 'Proactively optimize front-end performance through techniques such as code splitting, lazy loading, image optimization, and caching strategies to deliver fast and efficient web experiences.' },

    ];
    return (
        <>
            {details.map((item) => (
                <Card sx={{ width: 300, height:300, 
                            marginLeft:'10px', backgroundColor:'#000821', marginTop:'10px',
                            ':hover' : {
                                backgroundColor:''
                            }
                            }}>
                    <CardContent>
                        <Typography variant="body1" textAlign="center" color="white"  gutterBottom>
                        {item.title}
                        </Typography>

                        <Typography variant="p" sx={{ mb: 1.0, }} color="white">
                        {item.description}
                        </Typography>                       
                    </CardContent>
                </Card>

            ))}

        </>
    )
}

export default function Services() {
    return (
        <>
        <Grid container sx={{height:'100vh'}}>
        <Grid item>
            <Typography variant="body1">
                My Services
            </Typography>
            <Typography variant="h3">
                My 
                <span style={{color:'yellow', marginLeft:'10px'}}>
                Services
                </span> & Expertise
            </Typography>
        </Grid>
        <Grid item sx={{display:'flex', flexWrap:'wrap'}}>
        <ServiceDetails />
        </Grid>
        </Grid>
        </>
    )
}