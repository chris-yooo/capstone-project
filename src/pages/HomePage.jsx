import Chat from '../components/Chat/Chat';
import Input from '../components/Chat/Input';
import About from './About';
import Imprint from './Imprint';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import Nav from '../components/Navigation/Nav';

export default function CHRAT({messages, onNewMessage, dontJump}) {
  return (
    <StyledDiv>
      <StyledHeader>
        <h1>chRat</h1>
      </StyledHeader>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StyledMain>
                <Chat messages={messages} />
                <div id="anchor" />
              </StyledMain>
              <Input onNewMessage={onNewMessage} dontJump={dontJump} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
      <Nav />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const StyledHeader = styled.header`
  margin-top: 15px;
  margin-bottom: 15px;
  height: 37px;

  h1 {
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    font-weight: 400;
    font-size: 4rem;
    line-height: 24px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const StyledMain = styled.main`
  overflow-y: scroll;
  scrollbar-width: none;

  @media (min-width: 300px) {
    width: 290px;
  }
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 600px) {
    width: 590px;
  }
  @media (min-width: 1000px) {
    width: 950px;
  }
  @media (min-width: 1500px) {
    width: 1490px;
  }
  @media (min-width: 1800px) {
    width: 1790px;
  }

  @media (min-height: 300px) {
    height: 250px;
  }
  @media (min-height: 667px) {
    height: 490px;
  }
  @media (min-height: 750px) {
    height: 580px;
  }
  @media (min-height: 950px) {
    height: 780px;
  }

  b {
    display: block;
    margin: 20px;
    word-wrap: break-word;
    margin-top: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
  }

  p {
    display: block;
    margin: 20px;
    word-wrap: break-word;
    margin-top: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
  }
`;
