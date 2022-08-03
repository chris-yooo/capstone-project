import Chat from '../components/Chat/Chat';
import Input from '../components/Chat/Input';
import About from './About';
import Imprint from './Imprint';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import Nav from '../components/Navigation/Nav';

export default function CHRAT({messages, onNewMessage}) {
  function goToScrollDown() {}
  return (
    <>
      <StyledChratDiv>
        <StyledHeader>
          <h1>chRat</h1>
        </StyledHeader>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <StyledMain>
                  <Chat messages={messages} goToScrollDown={goToScrollDown} />
                </StyledMain>
                <Input onNewMessage={onNewMessage} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/imprint"
            element={
              <>
                <Imprint />
              </>
            }
          />
        </Routes>
        <Nav />
      </StyledChratDiv>
    </>
  );
}

const StyledChratDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 375px;
  height: 667px;
  background-color: rgba(154, 154, 154, 0.5);
`;

const StyledHeader = styled.header`
  margin: 10px;

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
  width: 375px;
  height: 475px;
  overflow-y: scroll;

  p {
    margin: 20px;
    margin-top: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
`;

// unused code

// <StyledMain id={'mainChat'}>
// {window.scrollTo(0, document.body.scrollHeight)}
// import $ from 'jquery';
// $('#mainChat').scrollTop($('#mainChat')[0].scrollHeight);
