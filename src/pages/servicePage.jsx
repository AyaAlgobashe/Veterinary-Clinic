import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import AppBarComponent from '../componnents/naveBar'
import ServiceList from '../componnents/ServiceList'
import ServiceSpecial from '../componnents/specialServices'

const ServicesPage = () => {
  const imgStyle = {
    backgroundImage:
      "linear-gradient(rgba(9, 18, 66, 0.5), rgba(9, 18, 66, 0.5)), url('https://www.felixcatinsurance.com/wp-content/uploads/2023/03/image_blog_veterinary-technician-assisting-vet.jpg')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    objectFit: "cover",
    padding: "10%",
  }
  const outlinedButton = {
    backgroundColor: '#468FAF',
    color: 'white',
    height: "20%",
    width: { md: "20%", xs: "45%" },
    padding: "10px",
    marginTop: "5%",
    marginBottom: "7%",
    fontFamily: { md: "3rem", xs: ".5rem" },
    '&:hover': {
      backgroundColor: 'white',
      border: '1px solid #012A4A',
      color: '#012A4A',

    }
  }
  return (
    <>
      <AppBarComponent />
      <Box mb={10} sx={imgStyle}>
        <Container >
          <Box sx={{ display: "flex", justifyContent: "center" }} >
            <Box>
              <Typography
                mb={3}
                sx={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontStyle: "italic"
                }} >O U R   S E R V I C E S</Typography>
              <Typography variant='h1'
                sx={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontWeight: "bold"


                }}>
                Services

              </Typography>
            </Box>
          </Box>


          <Box sx={{ display: "flex", justifyContent: "center" }}>

          </Box>
        </Container>
      </Box>
      <ServiceList/>
      <ServiceSpecial/>
    </>
  )
}

export default ServicesPage