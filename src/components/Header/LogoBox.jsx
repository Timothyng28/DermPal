import React from 'react';
import { StyledTypography } from './NavbarStyles';
import Box from '@mui/material/Box';

function LogoBox() {
    return (
    <Box sx = {{flexGrow: 1}}>
    <StyledTypography variant="h5" component = "a" href = "/">
        DermPal
    </StyledTypography>
    </Box>
    )};

export default LogoBox;