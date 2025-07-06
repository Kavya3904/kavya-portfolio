import React from "react";
import "./Details.css";
import reacticon from "../../assets/reactIcon.png";
import angularIcon from "../../assets/angularIcon.png";
import reduxIcon from "../../assets/reduxIcon.png";
import nodeJsIcon from "../../assets/nodejsIcon.png";
import epressJs from "../../assets/expressIcon.png";
import GraphQlIcon from "../../assets/graphIcon.png";
import agile from "../../assets/agileIcon.png";
import cypressIcon from "../../assets/cypressIcon.png";
import jfrogIcon from "../../assets/JfrogIcon.png";
import adobeIcon from "../../assets/adobeIcon.png";
import checkmarxIcon from "../../assets/checkmarxsIcon.png";
import githubIcon from "../../assets/githubIcon.png";
import jestIcon from "../../assets/icons8-jest-24.png";
import jasmineIcon from "../../assets/jasminIcon.png";
import jiraIcon from "../../assets/jiraIcon.png";
import playwrightIcon from "../../assets/nodejsIcon.png";
import sonacubeIcon from "../../assets/sonarcubeIcon.png";
import splunkIcon from "../../assets/spluckIcon.png";
import jenkinsIcon from "../../assets/jenkinsIcon.png";
export default function Skills() {
  return (
    <div className="main-div">
      <div className="skill-heading">Skills / Knowledge</div>
      <div className="skill-main-div">
        <div className="each-skill-div">
          <div className="skill-heading">Frontend Frameworks & Libraries</div>
          <div className="skills-div">
            <div className="skills">
              ReactJs{" "}
              <img className="skill-img" src={reacticon} alt="" srcset="" />{" "}
            </div>
            <div className="skills">
              Angular{" "}
              <img className="skill-img" src={angularIcon} alt="" srcset="" />{" "}
            </div>
            <div className="skills">
              Redux{" "}
              <img className="skill-img" src={reduxIcon} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="each-skill-div">
          <div className="skill-heading">Backend & APIs</div>
          <div className="skills-div">
            <div className="skills">
              NodeJs{" "}
              <img className="skill-img" src={nodeJsIcon} alt="" srcset="" />{" "}
            </div>
            <div className="skills">
              ExpressJS{" "}
              <img className="skill-img" src={epressJs} alt="" srcset="" />
            </div>
            <div className="skills">
              Graphql{" "}
              <img className="skill-img" src={GraphQlIcon} alt="" srcset="" />{" "}
            </div>
          </div>
        </div>
        <div className="each-skill-div">
          <div className="skill-heading">Testing Tools</div>
          <div className="skills-div">
            <div className="skills">
              Playwright{" "}
              <img
                className="skill-img"
                src={playwrightIcon}
                alt=""
                srcset=""
              />{" "}
            </div>
            <div className="skills">
              Cypress{" "}
              <img className="skill-img" src={cypressIcon} alt="" srcset="" />
            </div>
            <div className="skills">
              Jest <img className="skill-img" src={jestIcon} alt="" srcset="" />
            </div>
            <div className="skills">
              Jasmine/Karma{" "}
              <img className="skill-img" src={jasmineIcon} alt="" srcset="" />
            </div>
          </div>
        </div>

        <div className="each-skill-div">
          <div className="skill-heading">CI/CD & DevOps</div>
          <div className="skills-div">
            <div className="skills">
              Jenkins
              <img
                className="skill-img"
                src={jenkinsIcon}
                alt=""
                srcset=""
              />{" "}
            </div>
            <div className="skills">
              JFrog{" "}
              <img className="skill-img" src={jfrogIcon} alt="" srcset="" />
            </div>
            <div className="skills">
              SonarQube{" "}
              <img className="skill-img" src={sonacubeIcon} alt="" srcset="" />
            </div>
            <div className="skills">
              Checkmarx
              <img
                className="skill-img"
                src={checkmarxIcon}
                alt=""
                srcset=""
              />{" "}
            </div>
            <div className="skills">
              Splunk{" "}
              <img className="skill-img" src={splunkIcon} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="each-skill-div">
          <div className="skill-heading">Web Platforms & CMS</div>
          <div className="skills-div">
            <div className="skills">
              Adobe Experience Manager (AEM){" "}
              <img className="skill-img" src={adobeIcon} alt="" srcset="" />{" "}
            </div>
          </div>
        </div>
        <div className="each-skill-div">
          <div className="skill-heading">Project & Task Management</div>
          <div className="skills-div">
            <div className="skills">
              JIRA <img className="skill-img" src={jiraIcon} alt="" srcset="" />{" "}
            </div>
            <div className="skills">
              Git{" "}
              <img className="skill-img" src={githubIcon} alt="" srcset="" />{" "}
            </div>
            <div className="skills">
              Agile Methodology{" "}
              <img className="skill-img" src={agile} alt="" srcset="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
