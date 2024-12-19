import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import { StyledTypography } from './NavbarStyles';
import Box from '@mui/material/Box';

function LogoBox() {
    return (
    <Box sx = {{flexGrow: 1}}>
    <StyledTypography variant="h6" component = "a" href = "#" sx={{flexGrow: 1}}>
        <ImageIcon />
            DermPal
    </StyledTypography>
    </Box>
    )};

export default LogoBox;