import React from "react";
import "./OurTeam.css";
import TeamCard from "./TeamCard";
import Grid2 from "@mui/material/Grid2";

function OurTeam() {
  const teamMembers = [
    {
      name: "Timothy",
      role: "Full-Stack/AI Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGJHXDAddxyIA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724936959007?e=1740009600&v=beta&t=ZI9RwqqlgBXsVLkpyo-vvbK0PEUSfR9MyhDkNxK_c-Y",
      linkedin: "https://www.linkedin.com/in/timothy-luke-ng/",
      email: "timothyng28@gmail.com",
      writeup: " I have a passion for combining AI and creativity to solve big challenges, like making skincare smarter and easier for everyone!",
    },
    {
      name: "Sarah",
      role: "Data Analyst/AI Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFsv6tsL7ATbA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728649920174?e=1740614400&v=beta&t=sDP55sQikfE3HKRRHKOpht_OCuDEAHpy0YMcD0U48Xs",
        linkedin: "https://www.linkedin.com/in/sarah-quan-zhi-yun/",
      writeup: "-",
    },
    {
        name: "Brandon",
        role: "Business Developer",
        image:
          "https://media.licdn.com/dms/image/v2/D4E03AQGPpXAIdI0J6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728446724907?e=1740614400&v=beta&t=MOIfLOoedSFI8YFx7RyHMKbCyYvjNRQ8uDxlbN1A-dA",
          linkedin: "https://www.linkedin.com/in/yuseunggyun/",
        writeup: "-",
      },
  ];

  return (
    <div id="content">
      <h1 id="header">Our Team</h1>
      <div style={{ height: "50px" }} />
      <Grid2
        container
        spacing={10}
        alignItems="center"
        justifyContent="center"
        transform="translate"
      >
        {teamMembers.map((member, index) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
            <TeamCard
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              email={member.email}
              writeup={member.writeup}
            />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default OurTeam;
