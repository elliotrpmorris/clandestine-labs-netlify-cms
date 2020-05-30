import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';

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
    
    @media (min-width: 1280px) {
      text-align: left;
    }
`;

export const CardContainer = styled.div`   
    border-radius: 0.75rem;
    box-shadow:  0 22px 70px 4px rgba(215,211,203,0.56), 0 0 0 1px rgba(215,211,203, 0.3);
    background-color: #d7d3cb;
    cursor: pointer;
    padding: 1rem;
`;


const Card = ({ title, description }) => (
    <CardContainer>
      <Row middle="md">
        <Col xs={12} md={3}>
          <Title>{title}</Title>
        </Col>
        <Col xs={12} md={9}>
          <Description>{description}</Description>
        </Col>
      </Row>
    </CardContainer>
  )

export default Card 