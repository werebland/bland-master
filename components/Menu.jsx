import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose'

const MenuWrapper = posed.div({
  visible: {
    y: '0vh'
  },
  hidden: {
    y: '-100vh'
  }
})

const StyledMenuWrapper = styled(MenuWrapper)`
  width: 100vw;
  height: 100vh;
  background: #0f0f0f;
  z-index: 88;
  position: fixed;
  color: #fff;
  transform: translateY(-100vh)
`;

const Menu = ({ open }) => (
  <StyledMenuWrapper className="menu" pose={open ? 'visible' : 'hidden'}>
    Menu
  </StyledMenuWrapper>
);

export default Menu;
