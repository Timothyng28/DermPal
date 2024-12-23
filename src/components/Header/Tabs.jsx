import React from 'react';
import Box from '@mui/material/Box';
import {DropDown, StyledMenuList, NavButton} from './NavbarStyles';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom'

function Tabs() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const location = useLocation();

    const handleOpenMenu = (event) => {
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const isActive = (path) => {
        if (path === '/features') {
            return location.pathname.includes('/features');
        }
        return location.pathname === path;
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexGrow: 1 }}>
            <NavButton component = {Link} to = '/' isActive={isActive('/')}>Home</NavButton>
            <Box>
                <NavButton onClick={handleOpenMenu} isActive = {isActive('/features')}>Features</NavButton>
                <DropDown anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} MenuListProps={{ "aria-labelledby": "basic-button", component: StyledMenuList}} >
                    <MenuItem component = {Link} to = '/features/dermai' >DermAI</MenuItem>
                    <MenuItem component = {Link} to = '/features/dermjournal'>DermJournal</MenuItem>
                    <MenuItem component = {Link} to = '/features/dermmart' >DermMart</MenuItem>
                </DropDown>
            </Box>
            <NavButton component = {Link} to = '/about' isActive={isActive('/about')}>About</NavButton>
            <NavButton component = {Link} to = '/our-team' isActive={isActive('/our-team')}>Our Team</NavButton>
        </Box>
    );
}

export default Tabs;