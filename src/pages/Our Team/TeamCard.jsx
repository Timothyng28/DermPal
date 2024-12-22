import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Grid2 from "@mui/material/Grid2";

function TeamCard(props) {
  return (
    <Card sx={{ width: 200 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.role}
        </Typography>
        <div style={{ height: "10px" }} />
        <Typography variant="body2" color="black" style={{ height: "150px" }}>
          SHORT write up HELLO HI I LOVE IT HERE HAHAHHA LOL
        </Typography>
        <Grid2
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          {props.email && (
            <a
              href={"mailto:" + props.email}
              style={{ textDecoration: "none" }}
            >
              <EmailIcon
                style={{
                  color: "#D44638",
                  fontSize: "30px",
                  marginLeft: "10px",
                }}
              />
            </a>
          )}
          {props.linkedin && (
            <a
              href={props.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <LinkedInIcon style={{ color: "#0077B5", fontSize: "30px" }} />
            </a>
          )}
        </Grid2>
      </CardContent>
    </Card>
  );
}

export default TeamCard;
