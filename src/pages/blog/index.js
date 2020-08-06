import React from "react";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import styled from "styled-components";
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

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section id="page-wrap">
          <Grid>
            <Row middle="md">
              <Col xs={12} md={8}>
                <Title>Clandestine Labs Blog</Title>
                <br />
              </Col>
            </Row>
            <BlogRoll />
          </Grid>
        </section>
      </Layout>
    );
  }
}
