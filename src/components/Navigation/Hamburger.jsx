import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Hamburger() {
  return (
    <Nav>
      <NavLink to="/">Play</NavLink>
      <NavLink to="/Imprint">History</NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  /* position: absolute; */
  width: 375px;
  height: 49px;
  left: 0;
  top: 618px;

  filter: drop-shadow(0 0 40px rgba(0, 0, 0, 0.25));
  border-radius: 12px 12px 0 0;
`;

// const StyledLink = styled(NavLink)`
//   flex: 1;
//   background: lightseagreen;
//   text-decoration: none;
//   color: black;
//   padding: 15px;
//   display: grid;
//   place-items: center;
//   border: 2px solid black;

//   &.active {
//     background-color: black;
//     color: white;
//   }
// `;
