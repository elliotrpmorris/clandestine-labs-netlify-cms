import React from "react";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

export const Title = styled.h1`
  color: #323741;
  text-align: left;
  margin: 0;
  font-size: 2.5rem;

  @media (min-width: 360px) {
    font-size: 3rem;
  }
  @media (min-width: 415px) {
    font-size: 3.5rem;
  }
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Grid>
          <Row middle="md">
            <Col xs={12} md={8}>
              <Title>Clandestine Labs Blog</Title>
              <br />
            </Col>
          </Row>
          <BlogRoll />
        </Grid>
      </Layout>
    );
  }
}
