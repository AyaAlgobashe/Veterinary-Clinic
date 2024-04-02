import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { useState } from 'react';
import { Link } from 'react-router-dom';



const containerStyle = {
    transition: "background .3s, border .3s, border-radius .3s, box-shadow .3s",
    marginTop: "5%",
    marginBottom:{xs:"10%",md:"5%"},
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
};

const contentStyle = {
    color: "black",
    textAlign: "left",
    marginTop: "20%",
    marginLeft:"10%",
    marginBottom: "10%",
    maxWidth: "70%",
};
const imageContainerStyle = {
    // display: 'flex',
    // justifyContent: 'space-around',
    color: 'rgb(100, 80, 37)',

    position: "relative",
};
const outlinedButton = {
    backgroundColor: '#468FAF',
   
    color: 'white',
    height: "20%",
    display:{md:"block",xs:"none"},
    width: {md:"40%",xs:"50%"},
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
const outlinedButton2 = {
    backgroundColor: '#468FAF',
    color: 'white',
    height: "20%",
    width: {md:"40%",xs:"50%"},
  
    padding: "10px",
    
    marginBottom:"7%",
    display:{md:"none",xs:"block"},
    fontFamily:{md:"3rem",xs:".5rem"},
    '&:hover': {
        backgroundColor: 'white',
        border: '1px solid #012A4A',
        color: '#012A4A',
    }
}

const slides = [
    {
        imageUrl: 'https://th.bing.com/th/id/OIP.bDvsWZLckY89dEQLsLyQFwAAAA?w=400&h=461&rs=1&pid=ImgDetMain',
        buttonText: 'Learn More',
        title:" Offering High Quality Care For Your Pets!",
        describtion:"Helping Your Friends Be Your Friends For Longer. Because They Can’t Tell You What’s Wrong."
    },
    {
        imageUrl: 'https://www.thehealthypetclub.co.uk/wp-content/uploads/2018/03/2-dog.jpg',
        buttonText: 'Learn More',
        title:"The Kind Of Care Your Pets Deserve",
        describtion:"Compassionate and High Quality Care. Love Is The Best Medicine."
    },
    {
        imageUrl: 'https://www.supportpets.com/wp-content/uploads/2020/10/vet2.jpg',
        buttonText: 'Learn More',
        title:"Keeping Your Pet On The Path To Wellness",
        describtion:"Your pet is in good hands with us! Let your favorite get the best care in our center."
    }
];

export default function HeaderSlider() {
    const [swiper, setSwiper] = useState(null);
    
    return (
        <Container sx={containerStyle}>
            <Swiper
                loop={true}
                autoplay={{ delay: 2000 }} // 5 seconds delay between slides
                onSwiper={setSwiper}
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                sx={{ color: "beige", position: 'relative' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={7}>
                                <Box sx={contentStyle}>
                                    <Typography variant='h1' sx={{
                                        color: "#012A4A",
                                        fontFamily: "Montserrat, sans-serif",
                                        fontSize: { md: "3.2rem", xs: "1.3rem" },
                                        textAlign: { xs: "center", md: "left" },
                                        fontWeight: "bold",
                                        lineHeight:{md:"4.5rem",xs:"3rem"}
                                    }}>
                                        {slide.title}
                                    </Typography>
                                    <Typography mt={5} mb={5} style={{color:"#012A4A"}}>
                                        {slide.describtion}
                                    </Typography>
                                    <Button variant="outlined"sx={outlinedButton}>
                                        <Link to={"/services"} style={{textDecoration:"none",color:"#012A4A"}} >{slide.buttonText}</Link>
                                        
                                    </Button>
                                    
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Box sx={imageContainerStyle}>
                                    <Box sx={{height:{lg:"70vh",md:"60",xs:"40vh"},width:{md:"30vw",sx:"40vw"}}}>
                                    <img
                                        style={{ width: "100%", height: "90%", maxWidth: "100%",marginTop: "5%", }}
                                        src={slide.imageUrl}
                                        alt={`Image ${index + 1}`}
                                    /></Box>
                                    <Box>
                                    <Button variant="outlined"  sx={outlinedButton2}>
                                        {slide.buttonText}
                                    </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}
