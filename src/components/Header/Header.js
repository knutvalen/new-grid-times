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
        <LargeDesignActionGroup>
          <LeftActions />
        </LargeDesignActionGroup>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <Link href="/">Already a subscriber?</Link>
        </SubscribeWrapper>
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

  @media ${QUERIES.laptopAndUp} {
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: revert;
    margin-top: 16px;
  }
`;

const LargeDesignActionGroup = styled(ActionGroup)`
  display: none;
  
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const LogoWrapper = styled.div`
  color: var(--color-offblack);
`;

const SubscribeWrapper = styled(LargeDesignActionGroup)`
  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    justify-self: end;
  }
`;

const Link = styled.a`
  position: absolute;
  margin-top: 8px;
  width: 100%;
  text-align: center;
  font-size: calc(14 / 16 * 1rem);
  color: var(--color-gray-900);
  font-style: italic;
  text-decoration-line: underline;
`;

export default Header;
