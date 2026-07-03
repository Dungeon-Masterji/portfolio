import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { customIcons } from "./customIcons";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {this.props.logos.map((logo) => {
              // Only set when portfolio.js gives a `component` key that
              // matches a real inline SVG registered in customIcons.js
              const CustomIcon = logo.component
                ? customIcons[logo.component]
                : null;

              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li className="software-skill-inline" name={logo.skillName}>
                    {/* Path 1: Iconify — already inline SVG, unchanged */}
                    {logo.fontAwesomeClassname && (
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}

                    {/* Path 2: real .svg converted to a React component —
                        true inline SVG, behaves exactly like Iconify */}
                    {!logo.fontAwesomeClassname && CustomIcon && (
                      <span className="skill-svg" style={logo.style}>
                        <CustomIcon />
                      </span>
                    )}

                    {/* Path 3: PNG/JPG fallback — rendered as a CSS
                        background-image on a span instead of <img>, so
                        there's no image element for the browser to show
                        "Open Image" / "Save Image As" on */}
                    {!logo.fontAwesomeClassname &&
                      !CustomIcon &&
                      logo.imageSrc && (
                        <span
                          className="skill-image-bg"
                          role="img"
                          aria-label={logo.skillName}
                          style={{
                            ...logo.style,
                            backgroundImage: `url(${process.env.PUBLIC_URL}/skills/${logo.imageSrc})`,
                          }}
                        ></span>
                      )}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
