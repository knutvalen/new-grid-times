import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';
import VisuallyHidden from "../VisuallyHidden";

const LeftActions = () => {
  return (
    <>
      <IconButton>
        <Search size={24} />
        <VisuallyHidden>Search</VisuallyHidden>
      </IconButton>
      <IconButton>
        <Menu size={24} />
        <VisuallyHidden>Open menu</VisuallyHidden>
      </IconButton>
    </>
  );
};

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <LeftActions />
          </ActionGroup>
          <ActionGroup>
            <IconButton>
              <User size={24} />
            </IconButton>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LeftActionsWrapper>
          <LeftActions />
        </LeftActionsWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <RightActionsWrapper>
          <Button>Subscribe</Button>
          <Link href="/">Already a subscriber?</Link>
        </RightActionsWrapper>
      </MainHeader>
    </header>
  );
};

const IconButton = styled.button`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 1fr min(100%, 1fr) 1fr;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const LeftActionsWrapper = styled(ActionGroup)`
  display: none;
  
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    grid-column: 1;
  }
`;

const LogoWrapper = styled.div`
  grid-column: 1 / -1;
  
  @media ${QUERIES.desktopAndUp} {
    grid-column: 2;
  }
`;

const RightActionsWrapper = styled(ActionGroup)`
  display: none;
  flex-direction: column;
  grid-column: 3;
  justify-self: end;
  align-items: center;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const Link = styled.a`
  font-family: var(--font-family-serif);
  font-style: italic;
  text-decoration-line: underline;
`;



export default Header;
