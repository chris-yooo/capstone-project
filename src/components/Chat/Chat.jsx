import styled from 'styled-components';

export default function Chat({messages}) {
  function mapMessages() {
    messages?.map(message => {
      return <p key={message._id}>{message.msg}</p>;
      mapMessages();
    });
  }
  return (
    <StyledMain>
      <mapMessages />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;

  p {
    margin: 20px;
    margin-top: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
  }
`;
