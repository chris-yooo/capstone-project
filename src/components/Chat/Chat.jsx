import styled from 'styled-components';

export default function Chat({messages}) {
  function getCurrentDate(value) {
    return new Date(value)
      .toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
      .replace(/[.,]/g, match => (match === '.' ? '.' : ''));
  }

  return (
    <>
      {messages?.map(message => {
        return (
          <>
            <StyledDate key={message._id}>{`${getCurrentDate(message.date)} Uhr`}</StyledDate>
            <StyledMessage>{message.msg}</StyledMessage>
          </>
        );
      })}
    </>
  );
}

const StyledDate = styled.div`
  display: block;
  word-wrap: break-word;
  margin-top: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 18px;
  color: #adadad;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
  margin-bottom: 2px;
`;

const StyledMessage = styled.article`
  display: block;
  word-wrap: break-word;
  margin-top: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 18px;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
  margin-bottom: 12px;
`;
