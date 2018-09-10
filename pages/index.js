import React, { Component } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Why from '../components/Why'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Services from '../components/Services'

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const Floaty = styled.div`
  width: 40vw;
  height: auto;
  margin: 24px auto;
  padding: 24px;
  box-sizing: border-box;
  background: #0f0f0f;

  @media all and (max-width: 860px) {
    width: calc(100vw - 96px);
  }

  @media all and (max-width: 520px) {
    width: calc(100vw - 48px);
  }
`;

const FloatyContent = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  margin: 0 0 24px 0;
  padding: 0;
`;

const FloatyButton = styled.a`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f0f0f;
  font-size: 1.5rem;
  font-weight: 400;
  position: relative;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: #9f9f9f;
    z-index: -1;
  }

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    transition: 0.3s ease-out all;
  }

  &:hover::after {
    width: 0;
  }
`;

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    }
  }

  render() {
    return (
      <PageWrapper>
        <Menu open={this.state.menuVisible}/>
        <Header handleMenuToggle={() => this.setState({ menuVisible: !this.state.menuVisible})} open={this.state.menuVisible}/>
        <Contact />
        <Hero />
        <Floaty className="about">
          <FloatyContent className="about__content">
            Bland is an agile marketing agency devoted to first impressions with a focus on the food and beverage industry. We sweat the details of content and identity to create tangible and expansive presences that capture customers and lead to real-world growth.
          </FloatyContent>
          <Link href="/services" prefetch passHref>
            <FloatyButton  className="about__button">
              See what we can do
            </FloatyButton>
          </Link>
        </Floaty>
        <Why />
        <Services />
      </PageWrapper>
    );
  }

}

export default Index;
