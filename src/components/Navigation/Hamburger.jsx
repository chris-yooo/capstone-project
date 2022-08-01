import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from '@iconify/react';
import React, {useState} from 'react';

export default function Hamburger() {
  const handleToggle = () => {
    setNavbarOpen(prev => !prev);
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <StyledButton onClick={handleToggle}>
      <StyledNav>
        {/* {navbarOpen ? 'Close' : 'Open'} */}
        <Icon icon="charm:menu-hamburger" style={{fontSize: '28px'}} />

        {/* <StyledLink to="/">Chat</StyledLink> */}
        {/* <StyledLink to="/About">About</StyledLink> */}
        {/* <StyledLink to="/Imprint">Imprint</StyledLink> */}
      </StyledNav>
    </StyledButton>
  );
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: auto;

  /* position: absolute; */
  top: 618px;
  width: 375px;
  height: 49px;
  background: linear-gradient(180deg, #d9d9d9 0%, rgba(217, 217, 217, 0) 100%);
  filter: drop-shadow(0 0 40px rgba(0, 0, 0, 0.25));
  border-radius: 12px 12px 0 0;
`;

const StyledButton = styled.button`
  border: none;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 53px;
  gap: 10px;
  width: 175px;
  height: 35px;
  background: #d9d9d9;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  /* &.active {
    background-color: black;
    color: white;
  } */
`;
