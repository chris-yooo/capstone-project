import styled from 'styled-components';
import {Icon} from '@iconify/react';

export default function Input({addNewMessage}) {
  // let messageInput = {message: 'lol'};
  // function handleMessageSubmit(messageInput) {
  //   messageInput.forEach(each => {
  //     localStorage.setItem(each.message);
  //     document.getElementById('sendMessage').value = each.message;
  //     console.los(Input);
  //   });
  // }

  function handleOnSubmit(e) {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    addNewMessage(inputValue);
  }

  return (
    <>
      <Wrapper>
        <InputForm onSubmit={handleOnSubmit}>
          <InputStyled autoComplete="off" type="text" name="message" id="message" label="message input"></InputStyled>
          <InputButton type="submit" id="sendMessage">
            <Icon icon="carbon:send-alt" style={{fontSize: '28px'}} />
          </InputButton>
        </InputForm>
      </Wrapper>
    </>
  );
}

//
// onClick={e => handleMessageSubmit(messageInput)}

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

const InputForm = styled.form``;

const InputStyled = styled.input`
  width: 100%;
  /* max-width: 500px; */
  font-size: 2rem;
  padding: 0.4rem;
  padding-left: 0.8rem;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: none;

  &:hover {
    outline: 1px dotted #d0d0d0;
  }

  &:focus {
    outline: 1px dotted #d0d0d0;
  }
`;

const InputButton = styled.button`
  width: 100px;
  border: none;
  border-radius: 12px;
`;
