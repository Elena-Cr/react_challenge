import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar imageAvatar="public\avatar.jpg" />
      <div className="data">
        <Intro
          name="Elena Cristescu"
          bio="Learning JavaScript and React in order to become a front-end developer. Reacent graduate of Bussiness, Economics and IT at KEA."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.imageAvatar} alt="avatar" />
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

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" />
      <Skill skill="JavaScript" />
      <Skill skill="Web Development" />
      <Skill skill="Git & GitHub" />
      <Skill skill="React" />
      <Skill skill="SQL" />
      <Skill skill="MongoDB" />
    </div>
  );
}

function Skill(props) {
  return <div className="skill">{props.skill}</div>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
