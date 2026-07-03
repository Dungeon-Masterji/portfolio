import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import CertificationStack from "../../components/certificationCard/CertificationStack";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert, idx) => {
            if (cert.isStack) {
              return (
                <CertificationStack key={idx} stack={cert} theme={theme} />
              );
            }
            return (
              <CertificationCard key={idx} certificate={cert} theme={theme} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
