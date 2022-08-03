import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <StyledNav isOpen={hamburgerOpen}>
      <div onClick={toggleHamburger}>
        <HamburgerMenu />
      </div>
      <StyledUl isOpen={hamburgerOpen}>
        <StyledLink to="/">Chat</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/imprint">Imprint</StyledLink>
      </StyledUl>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${props => (props.isOpen ? '542px' : '618px')};
  width: 375px;
  height: 49px;
  background: linear-gradient(180deg, #d9d9d9 0%, rgba(217, 217, 217, 0) 100%);
  filter: drop-shadow(0 0 40px rgba(0, 0, 0, 0.25));
  border-radius: 12px 12px 0 0;
`;

const StyledUl = styled.ul`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: relative;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 375px;
  background: linear-gradient(180deg, #d9d9d9 0%, rgba(217, 217, 217, 0) 100%);
  filter: drop-shadow(0 0 40px rgba(0, 0, 0, 0.25));
  border-radius: 12px 12px 0 0;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 53px;
  margin-bottom: 8px;
  margin-top: 8px;
  gap: 10px;
  width: 175px;
  height: 35px;
  font-size: 1.6rem;
  background: #d9d9d9;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  text-decoration: none;

  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
