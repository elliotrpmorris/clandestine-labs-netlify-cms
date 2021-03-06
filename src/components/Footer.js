import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Link = styled.a`
  text-align: center;
  text-deceration: none;
`;

export const Foot = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #323741;
  margin: 0 0.5rem;
  font-size: 1.75rem;
  :hover {
    animation: text-shadow-pop-bottom 0.6s both;
    color: #d7d3cb;
    transition: color 0.2s linear;
  }

  @keyframes text-shadow-pop-bottom {
    0% {
      text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      text-shadow: 0 1px #555555, 0 2px #555555, 0 3px #555555, 0 4px #555555;
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <Foot>
        <Grid>
          <Row middle="md">
            <Col xs={12}>
              <Link href="https://elliotmorris.dev">
                <Icon icon={faGlobe} />
              </Link>
              <Link href="https://github.com/elliotrpmorris">
                <Icon icon={faGithub} />
              </Link>
              <Link href="https://www.linkedin.com/in/elliotrpmorris/">
                <Icon icon={faLinkedin} />
              </Link>
            </Col>
          </Row>
        </Grid>
      </Foot>
    );
  }
};

export default Footer;
