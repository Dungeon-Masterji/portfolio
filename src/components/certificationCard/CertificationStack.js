import React, { Component } from "react";
import "./CertificationStack.css";
import { Fade } from "react-reveal";

class CertificationStack extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { stack, theme } = this.props;
    const { isOpen } = this.state;
    const count = stack.certificates.length;

    return (
      <Fade bottom duration={2000} distance="20px">
        <div className={`cert-stack ${isOpen ? "cert-stack--open" : ""}`}>
          <button
            type="button"
            className="cert-stack-toggle"
            onClick={this.toggleOpen}
            aria-expanded={isOpen}
          >
            <div
              className="cert-stack-header"
              style={{ backgroundColor: stack.color_code }}
            >
              <img
                className="cert-stack-logo"
                src={require(`../../assets/images/${stack.logo_path}`)}
                alt={stack.alt_name}
              />
              <span
                className={`cert-stack-chevron ${
                  isOpen ? "cert-stack-chevron--open" : ""
                }`}
              >
                ▾
              </span>
            </div>
            <div className="cert-stack-body">
              <h2 className="cert-stack-title" style={{ color: theme.text }}>
                {stack.title}
              </h2>
              <h3
                className="cert-stack-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {count} Certification{count !== 1 ? "s" : ""}
              </h3>
            </div>
          </button>

          <div
            className="cert-stack-drawer"
            style={{ maxHeight: isOpen ? `${count * 45 + 16}px` : "0px" }}
          >
            <ul className="cert-stack-list">
              {stack.certificates.map((cert, idx) => (
                <li key={idx} className="cert-stack-item">
                  <a
                    href={cert.certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-stack-link"
                  >
                    <span className="cert-stack-item-index">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="cert-stack-item-title"
                      style={{ color: theme.text }}
                    >
                      {cert.title}
                    </span>
                    <span className="cert-stack-item-arrow">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationStack;
