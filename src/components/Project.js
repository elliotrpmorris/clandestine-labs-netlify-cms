import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';

export const Title = styled.h2`      
    color: #323741;  
    text-align: center;
    font-size: 1.75rem;
    margin: 0;
`;

export const SubTitle = styled.p`      
    color: #20232a;  
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: .25rem;
    text-align: center;

    @media (min-width: 415px) {
      font-size: 1.1rem;
    }
    @media (min-width: 768px) {
        text-align: left;
      }
`;

export const Box = styled.div`
    background-color: #d7d3cb;
    padding: .5rem;
`;

export const Description = styled.p`      
    color: #323741;  
    font-size: 1.1rem;
    text-align: center;
    margin: .25rem 0; 
    @media (min-width: 768px) {
      text-align: left;
    }
`;

export const Link = styled.a`      
    color: #323741;  
    font-size: 1.1rem;
`;

export const ProjectContainer = styled.div`   
    padding: 1rem;
`;


const Card = ({ title, description, link}) => (
    <ProjectContainer>
        
      <Row middle="md">
        <Col xs={12}>
          <Title>{title}</Title>
        </Col>
        <Col xs={12}>
          <SubTitle>Project description</SubTitle>
          <Description>{description}</Description>
          <Box>
            <Link target="_blank" href={link}>View site</Link>
          </Box>        
        </Col>
      </Row>
    </ProjectContainer>
  )

export default Card 