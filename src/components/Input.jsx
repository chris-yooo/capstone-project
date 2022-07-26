import styled from 'styled-components';
import {Icon} from '@iconify/react';

export default function Input({addNewMessage}) {
  function handleOnSubmit(e) {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    addNewMessage(inputValue);
  }

  return (
    <Wrapper>
      <InputForm onSubmit={handleOnSubmit}>
        <InputStyled autoComplete="off" type="text" name="message" id="message" label="message input"></InputStyled>
        <InputButton type="submit" id="sendMessage">
          <Icon icon="carbon:send-alt" style={{fontSize: '28px'}} />
        </InputButton>
      </InputForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-between;
  width: 346px;
  height: 45px;
  background: #d9d9d9;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const InputForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InputStyled = styled.input`
  width: 100%;
  font-size: 2rem;
  padding: 0.4rem;
  padding-left: 0.8rem;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: none;

  &:hover {
    outline: 1px solid #0060df;
  }
`;

const InputButton = styled.button`
  width: 7rem;
  border: none;
  border-radius: 12px;

  &:hover {
    outline: 1px solid #0060df;
  }
`;
