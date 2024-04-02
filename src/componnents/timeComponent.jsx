import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const OpeningHours = () => {
    const imgStyle = {
        backgroundImage:
            "linear-gradient(rgba(9, 18, 66, 0.5), #89C2D9), url('https://www.eagleanimalhospital.com/wp-content/uploads/2022/12/Treatment-for-Cat-Renal-Disease.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        objectFit: "cover",
        padding: "10%",
        borderRadius: "30px"
    }
    return (
        <>
            <Box mt={20} mb={20}>
                <Container>
                    <Grid container >
                        <Grid item xs={12} md={4}>
                            <Box sx={imgStyle}>
                                <Typography variant='h3' sx={{
                                    color: 'white',
                                    fontFamily: "Montserrat",
                                    textAlign: "center",
                                    fontWeight: "bold"
                                }}>
                                    Opening Hours
                                </Typography>
                                <Typography mt={3} mb={5} sx={{ color: "white" }}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, est. Blanditiis nobis inventore obcaecati quo magni aut odio ipsum cum soluta, totam nisi necessitatibus
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-between", color: "white" }}>
                                    <Box >
                                        <Typography variant='h5' mb={5}>Sat - Sun </Typography>
                                        <Typography variant='h5' mb={5}>Mon  - Tus  </Typography>
                                        <Typography variant='h5' mb={5}>Wen - Thu</Typography>
                                        <Typography variant='h5' mb={5}>Friday</Typography>

                                    </Box>
                                    <Box >
                                        <Typography variant='h5' mb={5} sx={{ fontFamily: "Montserrat", }}>9am - 10am </Typography>
                                        <Typography variant='h5' mb={5} sx={{ fontFamily: "Montserrat", }}>8am  - 9am  </Typography>
                                        <Typography variant='h5' mb={5} sx={{ fontFamily: "Montserrat", }}>7am - 8am</Typography>
                                        <Typography variant='h5' mb={5} sx={{ fontFamily: "Montserrat", }}>Closed</Typography>

                                    </Box>
                                </Box>

                            </Box>

                        </Grid>
                        <Grid item xs={12} md={1} mb={10} >

                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Grid container spacing={3} >

                                <Grid item xs={6}>
                                    <Box sx={{ width:{xs:"40vw",md:"20vw"} , height:{xs:"20vh",md:"40vh"}  }} >
                                        <img style={{ width: "100%", height: "100%", borderRadius: "30px" }} src='https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/dog-sits-at-examination-table-in-veterinary-clinic-2021-10-21-03-38-42-utc-800x662.jpg' />
                                    </Box>

                                </Grid>
                                <Grid item xs={6}>
                                    <Box  sx={{ width:{xs:"40vw",md:"20vw"} , height:{xs:"20vh",md:"40vh"}  }} >
                                        <img style={{ width: "100%", height: "100%", borderRadius: "30px" }} src='https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/happy-veterinarians-playing-with-dog-on-yard-at-ve-2021-08-29-22-51-18-utc-800x327.jpg' />
                                    </Box>

                                </Grid>
                            </Grid>
                            <Box mt={5} sx={{ width:{xs:"80vw",md:"40vw"} , height:{xs:"20vh",md:"40vh"}  }}>
                                <img style={{ width: "100%", height: "100%", borderRadius: "30px" }}  src="https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/veterinarians-working-with-animals-in-veterinary-c-2021-12-09-15-06-57-utc-800x662.jpg"/>
                            </Box>

                        </Grid>
                    </Grid>

                </Container>
            </Box>



        </>
    )
}

export default OpeningHours