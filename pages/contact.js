import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Head from 'next/head'

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    }
  }

  render() {
    return (
      <PageWrapper>
        <Head>
          <title>Contact Bland | A Halifax Agency Creating Tasteful Presences</title>
        </Head>
        <Menu open={this.state.menuVisible}/>
        <Header handleMenuToggle={() => this.setState({ menuVisible: !this.state.menuVisible})} open={this.state.menuVisible}/>
        <Contact />
      </PageWrapper>
    );
  }

}

export default ContactPage;
