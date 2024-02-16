import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

import "./styles.css";

const skillsData = [
  {
    name: "HTML+CSS",
    level: "advanced",
    colour: "#e5c494",
  },
  {
    name: "JavaScript",
    level: "advanced",
    colour: "#66c2a5",
  },
  {
    name: "Web Development",
    level: "advanced",
    colour: "#fc8d62",
  },
  {
    name: "Git & GitHub",
    level: "intermediate",
    colour: "#8da0cb",
  },
  {
    name: "React",
    level: "beginer",
    colour: "#e78ac3",
  },
  {
    name: "SQL",
    level: "advanced",
    colour: "#a6d854",
  },
  {
    name: "MongoDB",
    level: "beginer",
    colour: "#ffd92f",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar imageAvatar="avatar.jpg" />
      <div className="data">
        <Intro
          name="Elena Cristescu"
          bio="Learning JavaScript and React in order to become a front-end developer. Reacent graduate of Bussiness, Economics and IT at KEA."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skillsData={skillsData} />
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <div className="avatar">
      <img className="avatarImg" src={props.imageAvatar} alt="avatar" />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.bio}</h3>
    </div>
  );
}

function SkillList({ skillsData }) {
  return (
    <ul className="skill-list">
      {skillsData.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  const skillType = function () {
    switch (skillObj.level) {
      case "beginer":
        return "🐣";
      case "intermediate":
        return "🐥";
      default:
        return "🐤";
    }
  };
  return (
    <div style={{ backgroundColor: `${skillObj.colour}` }} className="skill">
      {skillObj.name}
      {skillType()}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
