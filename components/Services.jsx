import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose'

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  padding: 72px;
  box-sizing: border-box;
  position: relative;

  @media all and (max-width: 860px) {
    padding: 72px 48px;
  }

  @media all and (max-width: 770px) {
    flex-flow: column nowrap;
    align-items: flex-end;
    justify-content: flex-start;
  }

  @media all and (max-width: 520px) {
    padding: 72px 0;
  }
`;

const SectionContent = styled.div`
  width: calc(100vw - 144px);
  height: 70vh;
  position: absolute;
  background: #0f0f0f;
  right: 72px;
  left: 72px;
  padding: 48px 408px 48px 48px;
  box-sizing: border-box;

  @media all and (max-width: 860px) {
    width: calc(100vw - 96px);
    right: 48px;
    left: 48px;
  }

  @media all and (max-width: 770px) {
    width: 100vw;
    height: 80vh;
    left: 0;
    right: 0;
    top: 96px;
    padding: 186px 24px 24px 24px;
  }
`;

const SectionCard = styled.article`
  width: 360px;
  height: 100%;
  background: #fff;
  box-shadow: 0 2px 16px -2px rgba(159,159,159,0.32);
  z-index: 8;
  padding: 24px;
  box-sizing: border-box;

  @media all and (max-width: 770px) {
    height: auto;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: #0f0f0f;
  margin: 0 0 24px 0;
`;

const ServicesItems = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: column nowrap;

  @media all and (max-width: 770px) {
    flex-flow: row nowrap;
    overflow: scroll;
  }
`;

const ServicesItem = styled.li`
  width: 100%;
  height: 52px;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${props => props.active ? '#fff' : '0f0f0f'};
  position: relative;
  list-style: none;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease-out all;
  white-space: nowrap;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: -1;
  }

  &::after {
    content: "";
    height: 100%;
    width: ${props => props.active ? '100%' : '0'};
    background: #0f0f0f;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    transition: 0.3s ease-out all;
  }

  @media all and (max-width: 770px) {
    padding: 0 24px;
  }
`;

const ServicesChanger = posed.div({
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -24,
  }
})

const StyledServicesChanger = styled(ServicesChanger)`
  width: 100%;
  height: 100%;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  padding: 48px 408px 48px 48px;
  box-sizing: border-box;

  @media all and (max-width: 770px) {
    width: 100vw;
    left: 0;
    right: 0;
    padding: 186px 24px 24px 24px;
  }
`;

const ServicesTitle = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  margin: 0 0 24px 0;
`;

const ServicesCopy = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  margin: 0;
  padding: 0;
`;

class Services extends Component {

  constructor(props) {
    super(props);
    this.state = {
      service: 'branding'
    }
  }

  render() {
    return (
      <Section className="services">
        <SectionContent className="services__content">
          <StyledServicesChanger pose={this.state.service === "branding" ? 'visible' : 'hidden'}>
            <ServicesTitle className="services__title">
              Branding & Identity
            </ServicesTitle>
            <ServicesCopy className="services__copy">
              Your brand is who you are and it’s more than just details. It is your personality, the who, what, where, and why. We work with you to create something that we both can be proud of. A brand that wears its identity on its sleeve. Thoughtful and precise, while still being everything you could hope it could be and more.
              <br/><br/>
              From ideation and logo work, to creating style guides and ensuring brand fidelity, we’re here to make everything go right.
            </ServicesCopy>
          </StyledServicesChanger>
          <StyledServicesChanger pose={this.state.service === "content" ? 'visible' : 'hidden'}>
            <ServicesTitle className="services__title">
              Content
            </ServicesTitle>
            <ServicesCopy className="services__copy">
              Your brand is who you are and it’s more than just details. It is your personality, the who, what, where, and why. We work with you to create something that we both can be proud of. A brand that wears its identity on its sleeve. Thoughtful and precise, while still being everything you could hope it could be and more.
              <br/><br/>
              From ideation and logo work, to creating style guides and ensuring brand fidelity, we’re here to make everything go right.
            </ServicesCopy>
          </StyledServicesChanger>
        </SectionContent>
        <SectionCard className="services__card">
          <SectionTitle>
            Services
          </SectionTitle>
          <ServicesItems className="services__items">
            <ServicesItem className="services__items--item" active={this.state.service === "branding"} onClick={() => this.setState({ service: 'branding'})}>
              Branding & Identity
            </ServicesItem>
            <ServicesItem className="services__items--item" active={this.state.service === "content"} onClick={() => this.setState({ service: 'content'})}>
              Content Creation
            </ServicesItem>
            <ServicesItem className="services__items--item" active={this.state.service === "social"} onClick={() => this.setState({ service: 'social'})}>
              Social Media Management
            </ServicesItem>
            <ServicesItem className="services__items--item" active={this.state.service === "retention"} onClick={() => this.setState({ service: 'retention'})}>
              Customer Retention
            </ServicesItem>
            <ServicesItem className="services__items--item" active={this.state.service === "reputation"} onClick={() => this.setState({ service: 'reputation'})}>
              Reputation Management
            </ServicesItem>
            <ServicesItem className="services__items--item" active={this.state.service === "strategy"} onClick={() => this.setState({ service: 'strategy'})}>
              Strategy
            </ServicesItem>
          </ServicesItems>
        </SectionCard>
      </Section>
    );
  }

}

export default Services;
