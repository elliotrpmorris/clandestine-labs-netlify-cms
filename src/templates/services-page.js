import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Service from "../components/Service";
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
  @media (min-width: 414px) {
    font-size: 1.1rem;
  }
`;

export const ServicesPageTemplate = () => {
  return (
    <section id="page-wrap">
      <Grid>
        <Row>
          <Col xs={12}>
            <Title>Services</Title>
          </Col>
          <Col xs={12}>
            <SubTitle>Here's what we have to offer.</SubTitle>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Service
              title="Website Development"
              description="We offer bespoke website development, we can work from provided templates or create our own depending
              on your requirements. Whether you require just static pages or customisable content using a (CMS) we will help to
              consult on the best solution for you. (All websites will be mobile friendly and speed tested!)"
            />
          </Col>
          <Col xs={12} md={4}>
            <Service
              title="Website hosting"
              description="Now you have your shiny new website it needs a home. We can provide this home and are happy to provide
              further updates to your site on a retainer as agreed in the contract that will be discussed."
            />
          </Col>
          <Col xs={12} md={4}>
            <Service
              title="Web App development"
              description="Need more than just a website? We can provide full web applications to help your business grow. Contact us 
              for more information on how! This includes any business process which could be turned into an application"
            />
          </Col>
          <Col xs={12} md={4}>
            <Service
              title="Website optimization"
              description="Is your current site slow or not displaying nicely on Mobile? Not to worry we can help with this
              by reviewing your site and seeing what improvements can be made to increase site performance or refreshing the sites look and feel for mobile!"
            />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

const ServicesPage = () => {
    return (
      <Layout>
        <ServicesPageTemplate />
      </Layout>
    );
  };

export default ServicesPage;
