import React, { Component } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'
import MediaQuery from 'react-responsive';
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
  overflow: ${props => props.open ? 'hidden' : 'scroll'};
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
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  position: relative;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid #fff;

  & i {
    transition: 0.2s ease-out all;
    transform: translateX(0);
    font-size: 2.5rem;
  }

  &:hover i {
    transform: translateX(4px);
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
      <PageWrapper open={this.state.menuVisible}>
        <Head>
          <title>Bland | A Halifax Agency Creating Tasteful Presences</title>
        </Head>
        <Menu open={this.state.menuVisible}/>
        <Header handleMenuToggle={() => this.setState({ menuVisible: !this.state.menuVisible})} open={this.state.menuVisible}/>
        <MediaQuery query="(min-width: 1160px)">
          <Contact />
        </MediaQuery>
        <Hero />
        <Floaty className="about">
          <FloatyContent className="about__content">
            Bland is an agile marketing agency devoted to first impressions with a focus on the food and beverage industry. We sweat the details of content and identity to create tangible and expansive presences that capture customers and lead to real-world growth.
          </FloatyContent>
          <Link href="/services" prefetch passHref>
            <FloatyButton  className="about__button">
              See what Bland can do
              <i class="material-icons">
                chevron_right
              </i>
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
