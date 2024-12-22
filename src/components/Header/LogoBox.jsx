import React from "react";
import { StyledTypography } from "./NavbarStyles";
import Box from "@mui/material/Box";
import ImageIcon from "@mui/icons-material/Image";

function LogoBox() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledTypography variant="h5" component="a" href="/">
        <ImageIcon />
        DermPal
      </StyledTypography>
    </Box>
  );
}

export default LogoBox;
