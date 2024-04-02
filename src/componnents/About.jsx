import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const containerStyle = {
    transition: "background .3s, border .3s, border-radius .3s, box-shadow .3s",
    marginTop: "0%",
    marginBottom: "5%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    // direction:"rtl"
};

const titleStyle = {
    color: 'rgb(100, 80, 37,0.3)',
    fontStyle: "italic",
    marginBottom: "0px",
    fontSize: "40px",
    textAlign: "left"
};

const contentStyle = {
    color: "black",
    textAlign: "left", 
    marginLeft:"10%",
    marginBottom: "10%",
    maxWidth: "70%",
   
};

const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    color: 'rgb(100, 80, 37)',
    // marginTop: "30%",
    position: "relative",
};
const outlinedButton = {
    backgroundColor: '#468FAF',
    color: 'white',
    height: "20%",
    width: {md:"40%",xs:"60%"},
    padding: "10px",
    marginTop: "5%",
    marginBottom:"7%",
    fontFamily:{md:"3rem",xs:".5rem"},
    '&:hover': {
        backgroundColor: 'white',
        border: '1px solid #012A4A',
        color: '#012A4A',

    }
}


const imageAnimation = {
    animation: 'flowUpDown 3s infinite alternate',
};

export default function About() {
    return (
        <Container sx={containerStyle}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={5} >
                    <Box  sx={imageContainerStyle}>
                        <style>
                            {`
                                @keyframes flowUpDown {
                                    0% {
                                        transform: translateY(0);
                                    }
                                    100% {
                                        transform: translateY(-30px);
                                    }
                                }
                            `}
                        </style>
                        
                        <img style={{ width: "40%", height: "80%", maxWidth: "40%", margin: "auto", ...imageAnimation }}
                            src='https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/tricolor-cat-in-studio-2021-08-26-17-35-36-utc.png' alt="Image 1" /><img style={{ width: "60%", height: "150%", maxWidth: "60%", margin: "auto", ...imageAnimation }}
                            src='https://www.warrenphotographic.co.uk/photography/bigs/32030-Sable-Border-Collie-bitch-white-background.jpg' alt="Image 1" />
                        
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} >
                    <Box sx={contentStyle}>
                       
                        <Typography variant='h1' sx={{
                             color: "#012A4A",
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: { md: "3.2rem", xs: "1.3rem" },
                            textAlign: { xs: "center", md: "left" },
                            fontWeight: "bold"
                        }}>
                            About Vetheal
                        </Typography>
                        <Typography mt={5} mb={5} style={{color:"#012A4A"}}>
                        The veterinary clinic in Ajman, UAE, boasts a team of skilled veterinarians 
                        providing compassionate care 24/7. With a personalized approach to pet health, they ensure every animal receives tailored treatment. This clinic is a trusted destination for pet owners seeking excellence in veterinary care and unwavering support.
                         </Typography>
                        <Button variant="outlined" sx={outlinedButton}>
                        <Link to={"/about"} style={{textDecoration:"none",color:"#012A4A"}} >Learn More</Link></Button>
                    </Box>
                </Grid>
                
            </Grid>
        </Container>
    );
}



