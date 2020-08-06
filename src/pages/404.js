import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

export const Title = styled.h1`
  color: #323741;
  text-align: center;
  margin: 0;
  font-size: 3.2rem;

  @media (min-width: 360px) {
    font-size: 3.5rem;
  }
  @media (min-width: 415px) {
    font-size: 4.5rem;
  }
`;

export const Text = styled.p`
  color: #323741;
  text-align: center;
  margin: 0 0 1rem 0;
`;

const NotFoundPage = () => (
  <Layout>
    <div id="page-wrap">
      <Row middle="md">
        <Col xs={12}>
          <Title>PAGE NOT FOUND</Title>
          <Text>Please go back home.</Text>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default NotFoundPage;
