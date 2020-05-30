import React from "react";
import Card from "./Card";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

function What() {
  return (
    <section>
      <Grid>
        <Row>
          <Col xs={12} lg={8}>
            <Card
              title="What is it?"
              description="Clandestine Labs can provide anything from basic static web sites to feature rich web applications and ecommerce sites.
              We can provide the right expertise to get the job done."
            />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default What;
