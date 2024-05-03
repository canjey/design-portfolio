import React from "react";
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';




export default function Projects() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const allProjects = [{
        title: "E-Commerce Website",
        image: 'Cmak.png',
        type: 'frontend'

    },
    {
        title: "Community Website",
        image: "Community.png",
        type: 'frontend',
    },
    {
        title: 'Portfolio Website',
        image: 'Kate.png',
        type: 'frontend'

    },
    {
        title: 'Business Website',
        image: 'bullion.png',
        type: 'frontend'
    },
    {
        title: 'Banking System',
        image: 'Banking1.png',
        type: 'UI'
    },
    {
        title: 'Guest Management System',
        image: 'Guest.png',
        type: 'UI'
    },
    {
        title: 'Organization Management System',
        image: 'Org.png',
        type: 'UI'
    },
    {
        title: 'Event Management System',
        image: 'bullion.png',
        type: 'UI'
    }

    ];
    const filteredProjects = allProjects.filter(project => project.type === 'frontend');
    const filteredUI = allProjects.filter(project => project.type === 'UI');

    return (


        <>

            <Grid container id="portfolio">
                <Grid item xs={6}>
                    <Typography variant="p">
                        Recent Works
                    </Typography>
                    <Typography variant="h3">
                        My Best <span style={{ color: "yellow" }}> Projects</span>

                    </Typography>

                </Grid>
                <Grid item xs={6}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="All Project" value="1" color="white" />
                                <Tab label="Web Development" value="2" />
                                <Tab label="UI/UX Design" value="3" />
                            </TabList>
                        </Box>

                    </TabContext>
                </Grid>


            </Grid>
            <Grid container>
                <TabContext value={value}>

                    <TabPanel value="1">
                        <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>

                            {allProjects.map((item) => (
                                <Card sx={{ width: '350px', backgroundColor: '', marginLeft: '30px', marginTop: '10px' }}>
                                    <CardContent>
                                        <img src={item.image} style={{ height: '180px' }} />
                                        <Typography variant="body1" sx={{ marginTop: '15px' }}> {item.title}</Typography>
                                    </CardContent>

                                </Card>

                            ))}
                        </Grid>



                    </TabPanel>
                    <TabPanel value="2">
                    <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            {filteredProjects.map((item) => (
                                <Card sx={{ width: '350px', backgroundColor: '', marginLeft: '30px', marginTop: '10px' }}>
                                <CardContent>
                                    <img src={item.image} style={{ height: '180px' }} />
                                    <Typography variant="body1" sx={{ marginTop: '15px' }}> {item.title}</Typography>
                                </CardContent>

                            </Card>
                            ))}
                        </Grid></TabPanel>
                        <TabPanel value="3">
                        <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            {filteredUI.map((project, index) => (
                                <Card sx={{ width: '350px', backgroundColor: '#000000cf', marginLeft: '30px', marginTop: '10px' }}>
                                <CardContent>
                                    <img src={project.image} style={{ height: '180px' }} />
                                    <Typography variant="body1" sx={{ marginTop: '15px' }}> {project.title}</Typography>
                                </CardContent>

                            </Card>
                            ))}
                        </Grid>
                    </TabPanel>
                </TabContext>

            </Grid>
        </>
    )
}