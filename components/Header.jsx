import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 72px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 144px 0 72px;
  box-sizing: border-box;
  z-index: ${props => props.open === false && '8'};;

  @media all and (max-width: 860px) {
    padding: 0 96px 0 24px;
  }

  @media all and (max-width: 520px) {
    padding: 0 72px 0 24px;
  }
`;

const HeaderLogo = styled.a`
  width: 61px;
  height: 19px;
  background-image: url('/static/bland.svg');
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const HeaderContact = styled.a`
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

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
    background: #0f0f0f;
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

const MenuToggle = styled.div`
  width: 72px;
  height: 72px;
  position: fixed;
  right: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 888;

  @media all and (max-width: 860px) {
    right: 24px;
  }

  @media all and (max-width: 520px) {
    right: 0;
  }
`;

const MenuToggleIcon = styled.div`
  width: 24px;
  height: 12px;
  position: relative;
  transform: rotate(0deg);
  transition: .3s ease-out;
  cursor: pointer;

  & span {
    width: 100%;
    height: 3px;
    display: block;
    position: absolute;
    background: ${props => props.open ? '#fff' : '#0f0f0f'};
    transform: rotate(0deg);
    transition: .3s ease-out;
  }

  & span:nth-child(1) {
    top: ${props => props.open ? '6px' : '0'};
    left: ${props => props.open ? '0' : '0'};
    transform: ${props => props.open ? 'rotate(135deg)' : 'rotate(0)'};
  }

  & span:nth-child(2) {
    top: ${props => props.open ? '6px' : '9px'};
    left: ${props => props.open ? '0px' : '0'};
    transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    transform-origin: bottom-right;
  }
`;

const Header = ({handleMenuToggle, open}) => (
  <HeaderWrapper className="header" open={open}>
    <Link href="/" prefetch passHref>
      <HeaderLogo className="header__logo" />
    </Link>
    <Link href="/contact" prefetch passHref>
      <HeaderContact className="header__contact">
        Contact
      </HeaderContact>
    </Link>
    <MenuToggle>
      <MenuToggleIcon open={open} onClick={() => handleMenuToggle()}>
        <span></span>
        <span></span>
      </MenuToggleIcon>
    </MenuToggle>
  </HeaderWrapper>
);

export default Header;
