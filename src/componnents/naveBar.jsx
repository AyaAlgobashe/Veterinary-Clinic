import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import { Button, Grid } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { Image } from '@mui/icons-material';


const pages = ['Home', 'Services', 'About US'];
const links = ["/", "/services", "/about"]; // Corresponding page links

function AppBarComponent() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static"
            sx={{
                backgroundColor: "transparent",
                padding: "1%"
            }}
        >
            <Container>
                <Toolbar disableGutters>
                    <Grid container>
                        <Grid item xs={3} md={2}>
                            <Box sx={{width:{md:"5vw",xs:"15vw"},height:"10vh"}} >
                                <img
                                style={{ width:"100%" , height:"50px"  }}           
                                src='https://kitpro.site/vetheal/wp-content/uploads/sites/64/2022/01/Logo-Vetheal.png' />
                            </Box>
                        </Grid>
                        <Grid item xs={9} md={5} mt={2}>
                            <Box
                                sx={{ flexGrow: 1, display: {  xs: 'flex' }, justifyContent: "space-around" }}>
                                {pages.map((page, index) => (
                                    <Button
                                        key={page}
                                        component={Link} 
                                        to={links[index]} // Set the link destination
                                        sx={{
                                            color: '#012A4A',
                                            display: 'block',
                                            fontFamily: "Montserrat, sans-serif",
                                            fontSize: {md:"1rem",lg:"1.2rem",xs:".8rem"}
                                        }}
                                        onClick={handleCloseNavMenu}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item md={4} mt={3} sx={{ display: { lg: "block", xs: "none" } }}>
                            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                                    <LocalPhoneIcon sx={{ color: '#012A4A', }} />
                                    <Typography sx={{ color: '#012A4A', fontWeight: "bold" }}> +971 123 543 5678</Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                                    <FacebookIcon sx={{ color: '#012A4A', }} />
                                    <Typography sx={{ color: '#012A4A', fontWeight: "bold" }}> vetheal.id</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography component={Link} to={links[index]} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppBarComponent;
