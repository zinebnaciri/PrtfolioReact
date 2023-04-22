import React, { useState } from "react";
import profile from './img/profile.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./main.css";
import { Link } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";
import { Grid } from "semantic-ui-react";
import { styled } from '@mui/material/styles';

const Navbar = () => {
    const Img = styled('img')({
        borderRadius: '50%',
        display: 'inline-block',
        maxWidth: '30%',
        height: 'auto',
      });
    const [Mobile, setMobile] = useState(false);
    return (
<>
        <nav className="navbar">
                <h3 className="logo">Portfolio</h3>
                <ul className={Mobile? "nav-links-mobile": "nav-links"} onClick={()=> setMobile(false)}>
                    <Link to='/'> <li>Acceuil</li></Link>
                    <Link to='/experience'> <li>Experience</li></Link>
                    <Link to='/formations'> <li>Formations</li></Link>
                    <Link to='/certifs'> <li>Certificats</li></Link>
                    <Link to='/projets'> <li>Projects</li></Link>
                </ul>
                <button className="mobile-menu-icon" onClick={()=> setMobile(!Mobile)}>
                    {Mobile ? < CloseIcon /> : <MenuIcon />}
                </button>
           
        </nav>
      
     </>
    )
}

export default Navbar;