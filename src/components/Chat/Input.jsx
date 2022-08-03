import styled from 'styled-components';
import {Icon} from '@iconify/react';

export default function Input({onNewMessage}) {
  function handleOnSubmit(e) {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    onNewMessage(inputValue);
    document.getElementById('deleteForm').reset();
  }

  return (
    <StyledDiv>
      <StyledInputForm onSubmit={handleOnSubmit} id="deleteForm">
        <StyledInput
          autoComplete="off"
          type="text"
          name="message"
          id="message"
          label="message input"
          required
        ></StyledInput>
        <StyledInputButton label="send message button" type="submit" id="sendMessage">
          <Icon icon="carbon:send-alt" style={{fontSize: '28px'}} />
        </StyledInputButton>
      </StyledInputForm>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-between;
  width: 346px;
  height: 45px;
  background: #d9d9d9;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledInputForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  padding: 0.4rem;
  padding-left: 0.8rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-style: normal;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

  &:hover {
    outline: 1px solid #0060df;
  }
`;

const StyledInputButton = styled.button`
  width: 7rem;
  border: none;
  border-radius: 12px;

  &:hover {
    outline: 1px solid #0060df;
  }
`;
