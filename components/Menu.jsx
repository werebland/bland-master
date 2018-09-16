import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose'
import Link from 'next/link'

const MenuWrapper = posed.div({
  visible: {
    y: '0vh',
    delayChildren: 200,
    staggerChildren: 100,
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

const MenuLinks = styled.ul`
  padding: 72px 0 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const MenuLink = posed.li({
  visible: {
    y: '0',
    opacity: 1,
  },
  hidden: {
    y: '20',
    opacity: 0,
  }
})

const StyledMenuLink = styled(MenuLink)`
  font-size: 3rem;
  font-weight: 500;
  color: #fff;
  list-style: none;

  & a {
    font-size: 3rem;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
  text-align: center;
  font-weight: 300;
`;

const Menu = ({ open }) => (
  <StyledMenuWrapper className="menu" pose={open ? 'visible' : 'hidden'}>
    <MenuLinks>
      <StyledMenuLink withParent>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </StyledMenuLink>
      <StyledMenuLink withParent>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </StyledMenuLink>
      <StyledMenuLink withParent>
        <a target="blank" href="https://www.facebook.com/Bland-2218276858408891/">Facebook</a>
      </StyledMenuLink>
      <StyledMenuLink withParent>
        <a target="blank" href="https://twitter.com/werebland">Twitter</a>
      </StyledMenuLink>
      <StyledMenuLink withParent>
        <a target="blank" href="https://instagram.com/werebland">Instagram</a>
      </StyledMenuLink>
    </MenuLinks>
    <Footer>
      Made with ❤️ in Halifax
      <br/>
      © 2018 Bland Marketing Agency
    </Footer>
  </StyledMenuWrapper>
);

export default Menu;
