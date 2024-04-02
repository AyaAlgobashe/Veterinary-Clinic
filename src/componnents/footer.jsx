import { Box, Container, Grid, Typography } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#468FAF", }}>
            <Container >
                <Box p={5} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box>
                        <Box mb={5} sx={{ width: { md: "8vw", xs: "20vw" }, height: "13vh", marginLeft: { md: "15%", xs: "25%" } }} >
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src='https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/Logo-Vetheal-White.png' />
                        </Box>
                        <Box mb={3} sx={{
                            display: "flex",
                            color: "white"
                        }}>
                            <Box mr={3}>
                                <LocalPhoneIcon />
                            </Box>
                            <Typography variant='h6'>
                                +676 5456 5443
                            </Typography>
                        </Box>
                        <Box mb={3} sx={{
                            display: "flex",
                            color: "white"
                        }}>
                            <Box mr={3}>
                                <MailIcon />
                            </Box>
                            <Typography variant='h6'>
                                vit@gmail.com
                            </Typography>
                        </Box>
                        <Box mb={2} sx={{
                            display: "flex",
                            color: "white"
                        }}>
                            <Box mr={3}>
                                <PlaceIcon />
                            </Box>
                            <Typography variant='h6'>
                                Ajman , UAE
                            </Typography>
                        </Box>

                    </Box>

                </Box>
                <Box  sx={{
                    display: "flex",
                    justifyContent:"center",
                    color: "white"
                }}>
                    <p>
                        Copyright &copy;2024 LocalCrafts. All rights reserved.
                    </p>
                </Box>
            </Container>


        </Box>
    )
}

export default Footer