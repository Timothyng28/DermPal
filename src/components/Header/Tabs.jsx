import React from 'react';
import Box from '@mui/material/Box';
import { NavButton, DropDown, StyledMenuList} from './NavbarStyles';
import MenuItem from '@mui/material/MenuItem';

function Tabs() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpenMenu = (event) => {
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexGrow: 1 }}>
            <NavButton>Home</NavButton>
            <Box>
                <NavButton onClick={handleOpenMenu}>Features</NavButton>
                <DropDown anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} MenuListProps={{ "aria-labelledby": "basic-button", component: StyledMenuList}} >
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
                </DropDown>
            </Box>
            <NavButton>About</NavButton>
            <NavButton>Our Team</NavButton>
        </Box>
    );
}

export default Tabs;