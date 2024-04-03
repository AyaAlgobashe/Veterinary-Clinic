import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Services, special } from '../services'

const ServiceList = () => {
  return (
    <Box>
      <Container>
        <Box mb={10}>
          <Typography variant='h3'
            sx={{
              color: '#012A4A',
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              textAlign: "center",
              fontSize:{md:"4rem",xs:"2.5rem"}


            }}
          > Our Services</Typography>
        </Box>
        <Grid container p={3}>

          {Services.map((serv, index) => (
            <Grid item xs={12} md={6} lg={4} key={index} mb={10}
              sx={{
                padding: '3%',
                textAlign: { xs: "center", md: "left" },
                '&:hover': {
                  backgroundColor: '#0e456e81',
                  color: "white",
                  borderRadius: "30px",
                  color: '#012A4A',
                }
              }}>
              <Box mb={5} sx={{
                height: { md: "10vh", xs: "10vh" },
                width: { md: "5vw", xs: "25vw" },
                marginLeft: { xs: "30%", md: "1%" }
              }}>
                <img style={{ width: "100%", height: "90%" }} src={serv.serviceImg} alt={serv.serviceName} />
              </Box>
              <Box >
                <Typography variant='h5' sx={{
                  color: '#012A4A',
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",


                }}>{serv.serviceName}</Typography>
              </Box>
              <Box mt={5} sx={{ width: { md: "70%", xs: "100%" }, color: "#7A7A7A" }}>
                <Typography variant='p'>
                  {serv.describtion}
                </Typography>

              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </Box>
  )
}

export default ServiceList;
