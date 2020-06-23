import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Project from "../components/Project";
import Layout from "../components/Layout";

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
  @media (min-width: 415px) {
    font-size: 1.1rem;
  }
`;

export const ProjectsPageTemplate = () => {
  return (
    <section id="page-wrap">
      <Grid>
        <Row>
          <Col xs={12}>
            <Title>Projects</Title>
          </Col>
          <Col xs={12}>
            <SubTitle>Here are some projects we have done.</SubTitle>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Project
              title="Leeds Rhinos"
              description="On this Clandestine Labs worked on the creating the frontend templates, aswell as integration with wordpress and working on a plugin which pulled in live game stats."
              link="https://therhinos.co.uk"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Asda Money"
              description="Clandestine Labs created the current home page built from a given design template. which is completely mobile responsive.
              This website is viewed several million times a month!"
              link="https://money.asda.com"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Lesson's for less"
              description="This site allows users to compare driving lesson prices. Clandestine Labs was involved in designing of the website and
                the creation of templates."
              link="https://lessons4less.co.uk"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Treat Wisely"
              description="This was a static site built using Angular. This site is used to showcase their product and offer give the business an online presence. 
              The site shows reviews from Facebook and a gallery, in the future, this site can be expanded to take payments when the business grows."
              link="https://treatwisely.co.uk"
            />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

const ProjectsPage = () => {
  return (
    <Layout>
      <ProjectsPageTemplate />
    </Layout>
  );
};

export default ProjectsPage;
