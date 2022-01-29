import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />

      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <MainText>Sale</MainText>
            <HoverText>Sale</HoverText>
          </NavLink>
          <NavLink href="/new">
            <MainText>New&nbsp;Releases</MainText>
            <HoverText>New&nbsp;Releases</HoverText>
          </NavLink>
          <NavLink href="/men">
            <MainText>Men</MainText>
            <HoverText>Men</HoverText>
          </NavLink>
          <NavLink href="/women">
            <MainText>Women</MainText>
            <HoverText>Women</HoverText>
          </NavLink>
          <NavLink href="/kids">
            <MainText>Kids</MainText>
            <HoverText>Kids</HoverText>
          </NavLink>
          <NavLink href="/collections">
            <MainText>Collections</MainText>
            <HoverText>Collections</HoverText>
          </NavLink>
        </DesktopNav>
        <Filler></Filler>

        <MobileActions>
          <UnstyledButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open card</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  overflow-x: auto;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media ${QUERIES.mobileAndDown} {
    padding: 18px 16px;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.mobileAndDown} {
    gap: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9vw - 4.5rem, 3rem);
  margin: 0 32px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;
  overflow: hidden;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 350ms;
  will-change: transform;

  @media (prefers-reduced-motion: no-preference) {
    ${NavLink}:hover & {
      transform: translateY(var(--translate-to));
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;

  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: ${WEIGHTS.bold};
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

export default Header;
