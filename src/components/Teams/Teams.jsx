import React from "react";
import { Briefcase, UserCheck, Target } from "lucide-react";
import team1 from "../../Assets/Ceo-invest.avif";
import team2 from "../../Assets/assceo.avif";
import team3 from "../../Assets/melisa.avif";
import team4 from "../../Assets/lastman.avif";
import "./Teams.css";

const teamMembers = [
  {
    id: 1,
    name: "Peter Jack",
    title: "Chief Executive Officer",
    image: team1,
    description:
      "Peter leads our company with years of experience in building wealth and helping people grow their money through smart financial choices.",
    icon: <Briefcase size={24} />,
  },
  {
    id: 2,
    name: "Robert Daniel",
    title: "Senior Vice President",
    image: team2,
    description:
      "Robert specializes in managing investments and finding the best ways to grow your money safely and effectively.",
    icon: <UserCheck size={24} />,
  },
  {
    id: 3,
    name: "Melissa Angela",
    title: "Operations Manager",
    image: team3,
    description:
      "Melissa makes sure all investment plans work smoothly and helps clients understand their financial options clearly.",
    icon: <Target size={24} />,
  },
  {
    id: 4,
    name: "Christopher Mark",
    title: "Senior Advisor",
    image: team4,
    description:
      "Christopher helps clients make smart money decisions and creates personalized investment plans that fit their financial goals.",
    icon: <Briefcase size={24} />,
  },
];

const Teams = () => {
  return (
    <section className="team-section">
      <h2 className="team-header">Our Amazing Team</h2>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="card-top">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <div className="team-info-inline">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
              </div>
              <div className="team-icon">{member.icon}</div>
            </div>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
