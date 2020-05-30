import React from "react";
import Card from "./Card";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

function Who() {
  return (
    <section>
      <Grid>
        <Row>
          <Col xs={12} lg={8}>
            <Card
              title="Who are we?"
              description="
              We are professional software developers that offer high quality web development services. 
              To help your online presence grow. Which in turn will grow your business"
            />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default Who;
