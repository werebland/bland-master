import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
`;

const SectionContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding-left: 144px;
  box-sizing: border-box;
  align-items: center;

  @media all and (max-width: 860px) {
    padding-left: 48px
  }

  @media all and (max-width: 520px) {
    padding-left: 24px
  }
`;

const SectionTitle = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  color: #9f9f9f;
  margin: 0;

  & strong {
    font-weight: 500;
    color: #0f0f0f;
    display: block;
  }
`;

const SectionImage = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background: #9f9f9f;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const Hero = ({}) => (
  <Section className="hero">
    <SectionContent className="hero__content">
      <SectionTitle className="hero__content--title">
        Forget the 7 herbs and spices,
        <strong>we're your secret ingredient</strong>
      </SectionTitle>
    </SectionContent>
    <SectionImage image="/static/spices.jpg"/>
  </Section>
);

export default Hero;
