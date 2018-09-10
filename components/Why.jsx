import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 72px;
  box-sizing: border-box;
  position: relative;

  @media all and (max-width: 860px) {
    padding: 72px 48px;
  }

  @media all and (max-width: 670px) {
    flex-flow: column nowrap;
  }

  @media all and (max-width: 520px) {
    padding: 72px 24px;
  }
`;

const SectionCard = styled.article`
  width: 50vw;
  height: 60vh;
  padding: 48px;
  box-sizing: border-box;
  background: #FFFFFF;
  box-shadow: 0 2px 16px -2px rgba(159,159,159,0.32);
  z-index: 8;

  @media all and (max-width: 1000px) {
    width: 75vw;
  }

  @media all and (max-width: 670px) {
    width: 75vw;
    height: auto;
    padding: 24px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: #0f0f0f;
  margin: 0 0 24px 0;
`;

const SectionCopy = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: #9f9f9f;
  margin: 0;
  padding: 0;
`;

const SectionImage = styled.div`
  width: 66vw;
  height: calc(100vh - 144px);
  background: #9f9f9f;
  display: flex;
  position: absolute;
  top: 72px;
  right: 72px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  @media all and (max-width: 860px) {
    right: 48px;
  }

  @media all and (max-width: 670px) {
    width: 100vw;
    right: 0;
    left: 0;
    top: 24px;
  }
`;

const Why = ({}) => (
  <Section className="why">
    <SectionCard className="why__card">
      <SectionTitle className="why__card--title">
        Why Bland?
      </SectionTitle>
      <SectionCopy className="why__card--copy">
        By merging disruptive technology with industry standards, we are able to create a one-of-a-kind presence for your brand. From social media management and content creation to a full-blown branding and identity overhaul, we have the power, expertise, and drive to bring your vision to life. From startups to established business, we’re ready for the opportunity to embrace your big idea.
      </SectionCopy>
    </SectionCard>
    <SectionImage image="/static/speaker.jpg"/>
  </Section>
);

export default Why;
