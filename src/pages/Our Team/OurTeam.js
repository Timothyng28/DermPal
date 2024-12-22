import React from 'react';
import './OurTeam.css';
import TeamCard from './TeamCard';
import Grid2 from '@mui/material/Grid2';

function OurTeam() {

    const teamMembers = [
        { name : 'Timothy' , role : 'Full-Stack/AI Developer' , image : 'https://media.licdn.com/dms/image/v2/D5603AQGJHXDAddxyIA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724936959007?e=1740009600&v=beta&t=ZI9RwqqlgBXsVLkpyo-vvbK0PEUSfR9MyhDkNxK_c-Y', linkedin : 'https://www.linkedin.com/in/timothy-luke-ng/', email : "timothyng28@gmail.com"},
        { name : 'LOL' , role : 'Front-End Developer' , image : 'https://pbs.twimg.com/profile_images/1836825106716172288/C_MFCpeJ_400x400.jpg'},];

    return (
        <div id = "content">
            <h1 id = "header" >Our Team</h1>
            <div style = {{height : "50px"}} />
            <Grid2 container spacing={10} alignItems='center' justifyContent='center' transform = 'translate'>
                {teamMembers.map((member, index) => (
                    <Grid2 item xs={12} sm={6} md={4} lg={3} key = {index} >
                        <TeamCard name={member.name} role={member.role} image={member.image} linkedin = {member.linkedin} email = {member.email}/>
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
}

export default OurTeam;