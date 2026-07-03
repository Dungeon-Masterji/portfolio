import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import ProjectsImg from "./ProjectsImg";

function GetSkillSvg(props) {
  switch (props.fileName) {
    case "DataScienceImg":
      return <DataScienceImg theme={props.theme} />;
    case "FullStackImg":
      return <FullStackImg theme={props.theme} />;
    case "CloudInfraImg":
      return <CloudInfraImg theme={props.theme} />;
    case "ProjectsImg":
      return <ProjectsImg theme={props.theme} />;
    default:
      return <DesignImg theme={props.theme} />;
  }
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        {skills.data.map((skill, i) => {
          const imageOnRight =
            skill.title === "Data Engineering" ||
            skill.title === "UI/UX Design";

          return (
            <div key={i} className="skills-main-div">
              {imageOnRight ? (
                <>
                  {/* TEXT */}
                  <div className="skills-text-div">
                    <Fade left duration={1000}>
                      <h1
                        className="skills-heading"
                        style={{ color: theme.text }}
                      >
                        {skill.title}
                      </h1>
                    </Fade>

                    <Fade left duration={1500}>
                      <SoftwareSkill logos={skill.softwareSkills} />
                    </Fade>

                    <Fade left duration={2000}>
                      <div>
                        {skill.skills.map((skillSentence, index) => (
                          <p
                            key={index}
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            {skillSentence}
                          </p>
                        ))}
                      </div>
                    </Fade>
                  </div>

                  {/* IMAGE */}
                  <Fade right duration={2000}>
                    <div className="skills-image-div">
                      <GetSkillSvg fileName={skill.fileName} theme={theme} />
                    </div>
                  </Fade>
                </>
              ) : (
                <>
                  {/* IMAGE */}
                  <Fade left duration={2000}>
                    <div className="skills-image-div">
                      <GetSkillSvg fileName={skill.fileName} theme={theme} />
                    </div>
                  </Fade>

                  {/* TEXT */}
                  <div className="skills-text-div">
                    <Fade right duration={1000}>
                      <h1
                        className="skills-heading"
                        style={{ color: theme.text }}
                      >
                        {skill.title}
                      </h1>
                    </Fade>

                    <Fade right duration={1500}>
                      <SoftwareSkill logos={skill.softwareSkills} />
                    </Fade>

                    <Fade right duration={2000}>
                      <div>
                        {skill.skills.map((skillSentence, index) => (
                          <p
                            key={index}
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            {skillSentence}
                          </p>
                        ))}
                      </div>
                    </Fade>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
