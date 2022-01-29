/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { NavLink } from "../Header/Header";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss} style={{}}>
      <Backdrop />
      <Content aria-label="Mobile Menu">
        <InnerWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="x" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220, 5%, 40%, 0.8);
  animation: ${fadeIn} 500ms both;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: ${COLORS.white};
  width: 300px;
  height: 100%;
  padding: 32px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} 500ms both;
  animation-delay: 250ms;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${COLORS.gray[900]};
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  padding: 16px;
  margin: -16px;
`;

export default MobileMenu;
