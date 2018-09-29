import React, { Component } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'
import MediaQuery from 'react-responsive';
import Drift from 'react-driftjs'
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

const Recent = styled.section`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
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

const RecentBackground = styled.div`
  width: 100%;
  height: 100%;
  background: #0f0f0f;
  position: relative;
  padding: 48px 0 48px 48px;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;

  @media all and (max-width: 770px) {
    padding: 0 24px;
  }
`;

const RecentCard = styled.article`
  height: 100%;
  background: #fff;
  box-shadow: 0 2px 16px -2px rgba(159,159,159,0.32);
  margin-bottom: 48px;
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media all and (max-width: 770px) {
    margin-bottom: 0 24px;
  }
`;

const RecentTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  margin: 0 0 24px 0;
`;

const RecentImage = styled.div`
  width: 394px;
  height: 182px;
  display: block;
  background-image: url(/static/bland-marketing-agency-client-rma.png);
  background-size: cover;
  background-position: center;
`;

const RecentCopy = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 300;
  color: #fff;
  margin: 0;
  padding: 0 48px 0 0;
  box-sizing: border-box;

  @media all and (max-width: 770px) {
    padding: 0 24px 0 0;
  }

  & a {
    color: #fff;
    font-weight: 500;
    text-decoration: none;
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
        <Drift appId="pz6ahcwgw3vh" />
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
              <i className="material-icons">
                chevron_right
              </i>
            </FloatyButton>
          </Link>
        </Floaty>
        <Why />
        <Recent className="recent">
          <RecentBackground>
            <RecentTitle>
              Bland No More
            </RecentTitle>
            <RecentCard>
              <RecentImage />
            </RecentCard>
            <RecentCopy>
              We worked closely with Dalhousie's <a href="https://dalrma.com">Rowe Marketing Association</a> to breathe new life into a young marketing association. Bland embraced that youth and created a logo that was bold yet approachable, colorful but professional. In short, the perfect brand for a marketing association.
              <br/><br/>
              We also got together with our friends at <a href="https://platinumleadmarketing.com">Platinum Lead</a> to create an expansive website and social media revamp.
            </RecentCopy>
          </RecentBackground>
        </Recent>
        <Services />
      </PageWrapper>
    );
  }

}

export default Index;
