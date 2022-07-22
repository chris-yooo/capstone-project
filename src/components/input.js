import styled from 'styled-components';

export default function MessageInput() {
  return (
    <Wrapper>
      <InputStyled type="text" name="message" id="message"></InputStyled>
    </Wrapper>
  );
}

// onChange={onChange}

const Wrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  width: 346px;
  height: 45px;
  background: #d9d9d9;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const InputStyled = styled.input`
  width: 100%;
  /* max-width: 500px; */
  font-size: 1.6rem;
  padding: 0.4rem;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: none;

  &:hover {
    outline: 1px dotted #444;
  }

  &:focus {
    outline: 1px dotted #444;
  }
`;

const Label = styled.label`
  font-size: 0.8em;
  color: #aaa;
  margin-bottom: 4px;
`;
