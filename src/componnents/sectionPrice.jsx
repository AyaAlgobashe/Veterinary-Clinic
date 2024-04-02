import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const MoreInfo = () => {
  const imgStyle = {
    backgroundImage:
      "linear-gradient(rgba(9, 18, 66, 0.5), rgba(9, 18, 66, 0.5)), url('https://lh6.googleusercontent.com/0d1L9SPzjZf8u0jHv4Kc8wLq523FFIhsFMbLBEEtNsWcBOp_n-4mpTO4uEGHwr_-1JHFyzCnQqemVVEaJtzqrDSoggm1RacCLb7z-bQIdl6HcgiPfpatKVzYoTrnKnvmSoOhZCw1Y3Ug_AWvu3Wi4xA')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    objectFit: "cover",
    padding: "10%",
  }
  const outlinedButton = {
    backgroundColor: '#468FAF',
    color: 'white',
    height: "20%",
    width: {md:"20%",xs:"45%"},
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
  return (
    <>
      <Box mb={10} sx={imgStyle}>
        <Container >
          <Typography variant='h3'
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "Montserrat",
              fontWeight: "bold"


            }}>
            Quality Care at Affordable Prices

          </Typography>
          <p style={{ textAlign: "center", color: "white", }}>Our veterinary clinic offers diverse, exceptional services. From convenient Vaccinate Pet Shuttle and advanced X-Ray Clinic to expert Pet Medicine and comprehensive Pet Checkup, we prioritize pet health. Additionally, our Eye Clinic specializes in ocular care, while Free Consultation and Online Services provide accessible,
            convenient veterinary care options.</p>
            <Box sx={{display:"flex",justifyContent:"center"}}>
            <Button variant="outlined" sx={outlinedButton}>
              <Link to={"/about"} style={{textDecoration:"none",color:"#012A4A"}} >More Information</Link>
              </Button>
                        </Box>
        </Container>
      </Box>
    </>
  )
}

export default MoreInfo