import Chat from '../components/Chat/Chat';
import Input from '../components/Chat/Input';
import About from './About';
import Imprint from './Imprint';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import Nav from '../components/Navigation/Nav';

export default function CHRAT({messages, onNewMessage}) {
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
              <Chat messages={messages} />
              <div id="jumpto"></div>
              <Input onNewMessage={onNewMessage} />
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

  @media (max-height: 667px), (max-width: 375px) and (orientation: portrait) {
    width: 375px;
    height: 581px;
  }

  @media (max-height: 800px), (max-width: 375px) and (orientation: portrait) {
    width: 375px;
    height: 751px;
  }

  width: 100%;
  height: 100%;
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
