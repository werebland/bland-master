import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import Menu from '../components/Menu'
import Services from '../components/Services'

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

class ServicesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    }
  }

  render() {
    return (
      <PageWrapper className="pageWrapper__services">
        <Menu open={this.state.menuVisible}/>
        <Header handleMenuToggle={() => this.setState({ menuVisible: !this.state.menuVisible})} open={this.state.menuVisible}/>
        <Services />
      </PageWrapper>
    );
  }

}

export default ServicesPage;
