import React from 'react';
import Box from '@mui/material/Box';
import {DropDown, StyledMenuList} from './NavbarStyles';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

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
            <Button component = {Link} to = '/'>Home</Button>
            <Box>
                <Button onClick={handleOpenMenu}>Features</Button>
                <DropDown anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} MenuListProps={{ "aria-labelledby": "basic-button", component: StyledMenuList}} >
                    <MenuItem component = {Link} to = '/dermai' >DermAI</MenuItem>
                    <MenuItem component = {Link} to = '/dermjournal'>DermJournal</MenuItem>
                    <MenuItem component = {Link} to = '/dermmart' >DermMart</MenuItem>
                </DropDown>
            </Box>
            <Button component = {Link} to = '/about'>About</Button>
            <Button component = {Link} to = '/our-team'>Our Team</Button>
        </Box>
    );
}

export default Tabs;