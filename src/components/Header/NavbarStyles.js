import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  allignItems: "center",
  flexGrow: 1,
});

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.gradients.primary,
  color: "#fff",
}));

export const NavButton = styled(Button)(({ theme, isActive }) => ({
    backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
    color: isActive ? "lightgrey" : 'black',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      backgroundColor: 'teal',
      color: 'white',
    },
  }));

export const DropDown = styled(Menu)({
  backgroundColor: "transparent",
  color: "black",
  borderRadius: "5px",
  position: "absolute",
  top: "22px",
  right: "0px",
  zIndex: 1300,
  padding: "0px",
  margin: "0px",
});

export const StyledMenuList = styled("ul")({
  backgroundColor: "#e0f7fa",
  borderRadius: "8px",
  padding: "10px 0",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
});

export const StyledTypography = styled(Typography)({
  textDecoration: "none",
  color: "teal",
  fontWeight: "bold",
  letterSpacing: ".2rem",
});
