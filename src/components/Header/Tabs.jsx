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
            <NavButton onClick={() => window.location.href = '/'}>Home</NavButton>
            <Box>
                <NavButton onClick={handleOpenMenu}>Features</NavButton>
                <DropDown anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} MenuListProps={{ "aria-labelledby": "basic-button", component: StyledMenuList}} >
                    <MenuItem onClick={() => window.location.href = '/dermai'} >DermAI</MenuItem>
                    <MenuItem onClick={() => window.location.href = '/dermjournal'} >DermJournal</MenuItem>
                    <MenuItem onClick={() => window.location.href = '/dermmarket'} >DermMarket</MenuItem>
                </DropDown>
            </Box>
            <NavButton onClick={() => window.location.href = '/about'}>About</NavButton>
            <NavButton onClick = {() => window.location.href = '/our-team'} >Our Team</NavButton>
        </Box>
    );
}

export default Tabs;

// ...existing code...
<div className='intro'>
    <div>
        <h1>Welcome to Dermpal</h1>
    </div>
    <div>
        <p>Your one stop skincare solution</p>
    </div>
</div>
// ...existing code...