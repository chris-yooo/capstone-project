import styled from 'styled-components';
import Input from '../components/Input';
import Chat from '../components/Chat';
// import $ from 'jquery';

export default function CHRAT({messages, onNewMessage}) {
  function goToScrollDown() {
    //   $('#mainChat').scrollTop($('#mainChat')[0].scrollHeight);
  }
  return (
    <>
      <ChratBody>
        <Header>
          <h1>chRat</h1>
        </Header>
        <Main id={'mainChat'}>
          <Chat messages={messages} goToScrollDown={goToScrollDown} />
          {/* {window.scrollTo(0, document.body.scrollHeight)} */}
        </Main>
        <Input onNewMessage={onNewMessage} />
      </ChratBody>
    </>
  );
}

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

  height: 550px;
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
