import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Title = styled.h2`      
    color: #323741;  
    text-align: center;
    font-size: 1.75rem;
    margin: 0;
`;

export const Description = styled.p`      
    color: #323741;  
    font-size: 1.1rem;
    text-align: center;
`;

export const CardContainer = styled.div`   
    border-radius: 0.75rem;
    padding: 1.25rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #323741;
  margin: 0 .5rem;
  font-size: 1.75rem;
  
`;

const Service = ({ title, description}) => (
    <CardContainer>
      <Row middle="md">
        <Col xs={12}>
          <Title>{title}</Title>
        </Col>
        <Col xs={12}>
          <Description>{description}</Description>
        </Col>
      </Row>
    </CardContainer>
  )

export default Service 