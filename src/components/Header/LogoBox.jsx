import React from "react";
import { StyledTypography } from "./NavbarStyles";
import Box from "@mui/material/Box";
import Logo from "../../assets/Logo.png";

function LogoBox() {
return (
    <Box sx={{ flexGrow: 1 }}>
        <StyledTypography variant="h5" component="a" href="/">
            <img src={Logo} alt="DermPal Logo" style={{ height: '50px', marginRight: '0px' }} />
        </StyledTypography>
    </Box>
);
}

export default LogoBox;
