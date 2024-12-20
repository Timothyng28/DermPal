import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { StyledAppBar} from './NavbarStyles';
import LogoBox from './LogoBox';
import Box from '@mui/material/Box';
import Tabs from './Tabs';


function Navbar() {

    return (
    <StyledAppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <LogoBox />
            <Tabs />
            <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;