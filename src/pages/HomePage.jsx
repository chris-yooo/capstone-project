import styled from 'styled-components';
import Input from '../components/Chat/Input';
import Chat from '../components/Chat/Chat';
import Hamburger from '../components/Navigation/Hamburger';
import {Routes, Route} from 'react-router-dom';
import Imprint from './Imprint';
import About from './About';

// import $ from 'jquery';

export default function CHRAT({messages, onNewMessage}) {
  function goToScrollDown() {
    //   $('#mainChat').scrollTop($('#mainChat')[0].scrollHeight);
  }
  return (
    <>
      <ChratBody>
        {/* Header */}
        <Header>
          <h1>chRat</h1>
        </Header>
        <Routes>
          {/* Chat Inhalt Page */}
          <Route
            path="/"
            element={
              <>
                {/* Chat Inhalt */}
                <Main id={'mainChat'}>
                  <Chat messages={messages} goToScrollDown={goToScrollDown} />
                </Main>
                {/* Message Input */}
                <Input addNewMessage={onNewMessage} />
              </>
            }
          />
          {/* About Page Route */}
          <Route
            path="/About"
            element={
              <>
                <About />
              </>
            }
          />
          {/* Imprint Page Route */}
          <Route
            path="/Imprint"
            element={
              <>
                <Imprint />
              </>
            }
          />
        </Routes>
        {/* Hamburger Menü */}
        <Hamburger />
      </ChratBody>
    </>
  );
}

/* {window.scrollTo(0, document.body.scrollHeight)} */

const ChratBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 375px;
  height: 667px;
  background-color: rgba(154, 154, 154, 0.5);
`;

const Header = styled.header`
  margin: 10px;
  h1 {
    /* margin: 0; */
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 4rem;
    text-align: center;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
`;

const Main = styled.main`
  width: 375px;

  /* height: 475px; */

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
  }
`;
