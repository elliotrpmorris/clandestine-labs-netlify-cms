import React from 'react'
import Layout from '../../components/Layout'
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

export const ContactBackground = styled.div`
  background-color: #d7d3cb;
  border-radius: 0.7em;
  animation: slit-in-horizontal 0.5s ease-out both;
  margin-top: 2.5rem;

  @media (min-width: 769px) {
    margin-top: 0;
  }
  @keyframes slit-in-horizontal {
    0% {
      -webkit-transform: translateZ(-800px) rotateX(90deg);
      transform: translateZ(-800px) rotateX(90deg);
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotateX(87deg);
      transform: translateZ(-160px) rotateX(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateX(0);
      transform: translateZ(0) rotateX(0);
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  padding: .5rem 0;
  margin: 0.25rem 0;
  text-align: center;
`;

export const SubTitle = styled.p`
  padding: 0 0 1rem 0;
  text-align: center;
`;

export default () => (
  <Layout>
        <section id="page-wrap">
        <Grid>
          <Row center="xs">
            <Col xs={12} md={8} lg={6}>
              <br />
              <ContactBackground>
              <Title>
                Thank you!
              </Title>
              <SubTitle>We will be in touch.</SubTitle>
              </ContactBackground>
              <br />
            </Col>
          </Row>
        </Grid>
      </section>
      </Layout>
)
