import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import What from "../components/What";
import Who from "../components/Who";
import How from "../components//How";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

export const Title = styled.h1`
  color: #20232a;
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  margin-bottom: 0;
  @media (min-width: 414px) {
    font-size: 4rem;
  }
`;

export const SubTitle = styled.p`
  color: #20232a;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  @media (min-width: 414px) {
    font-size: 1.1rem;
  }
`;

export const AboutPageTemplate = () => {
  return (
    <section id="page-wrap">
      <Grid>
        <Row>
          <Col xs={12}>
            <Title>About Us</Title>
          </Col>
          <Col xs={12}>
            <SubTitle>Learn more about us and what we do.</SubTitle>
          </Col>
        </Row>
      </Grid>
      <Who />
      <br />
      <What />
      <br />
      <How />
      <br />
    </section>
  );
};

const AboutPage = () => {
  return (
    <Layout>
      <AboutPageTemplate />
    </Layout>
  );
};

export default AboutPage;
