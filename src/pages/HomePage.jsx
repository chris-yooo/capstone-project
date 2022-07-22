import styled from 'styled-components';
import Input from '../components/Input';
import Chat from '../components/Chat';

export default function CHRAT() {
  return (
    <>
      <ChratBody>
        <Header>
          <h1>chRat</h1>
        </Header>
        <Main>
          <Chat />
        </Main>
        <Input />
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
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;

const Main = styled.main`
  width: 375px;
  /* height: 475px; */
  height: 550px;
  overflow-y: scroll;
  p {
    margin: 20px;
    margin-top: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
