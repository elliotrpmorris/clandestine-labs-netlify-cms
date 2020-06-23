import React from 'react'
import { navigate } from 'gatsby-link'
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

export const Box = styled.input`
  color: #323741;
  display: block;
  width: 100%;
  background: 0 0;
  line-height: 1.2;
  padding: 5px 5px 0 5px;
  outline: none;
  border: none;

  font-size: 1rem;
  @media (min-width: 414px) {
    font-size: 1.1rem;
  }
`;

export const InputLabel = styled.label`
  font-size: 1rem;
`;

export const WrapInput = styled.div`
  position: relative;
  border-bottom: 1px solid #323741;
  padding-bottom: 10px;
  font-size: 3rem;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Focus = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    transition: all 0.4s;
    background: #323741;
  }
`;

export const TextBox = styled.textarea`
  color: #323741;
  font-size: 1.1rem;
  min-height: 110px;
  display: block;
  width: 100%;
  background: 0 0;
  line-height: 1.2;
  padding: 5px 5px 0 5px;
  outline: none;
  border: none;
  resize: vertical;
`;

export const Btn = styled.button`
  margin-top: 1rem;
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 50px;
  border-radius: 27px;
  background: #323741;
  outline: none;
  border: none;
  position: relative;
  z-index: 1;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FormContainer = styled.form`
  padding: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  padding: 0;
  margin: 0.25rem 0;
`;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <Layout>
        <section id="page-wrap">
        <Grid>
          <Row center="xs">
            <Col xs={12} md={8} lg={6}>
              <br />
              <ContactBackground>
                <FormContainer 
                name="contact" 
                method="post"
                onSubmit={this.handleSubmit}
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                >
                  <Title>We'd love to hear from you!</Title>
                  <p>
                    Have a project you want us to help you with? Get in touch.
                  </p>
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                  <WrapInput>
                    <InputLabel>Your Name:</InputLabel>
                    <Box
                     
                      placeholder="Enter your name..."
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                    <Focus></Focus>
                  </WrapInput>
                  <WrapInput>
                    <InputLabel>Your Email:</InputLabel>
                    <Box
                      type="email"
                      placeholder="Enter your email..."
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <Focus></Focus>
                  </WrapInput>
                  <WrapInput>
                    <InputLabel>Message:</InputLabel>
                    <TextBox
                      name="message"
                      placeholder="Enter your message..."
                      value={message}
                      onChange={this.handleChange}
                    />
                  </WrapInput>
                  <br></br>
                  <Btn type="submit">Send</Btn>
                </FormContainer>
              </ContactBackground>
              <br />
            </Col>
          </Row>
        </Grid>
      </section>
      </Layout>
    )
  }
}
