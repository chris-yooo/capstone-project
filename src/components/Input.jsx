import styled from 'styled-components';
import {Icon} from '@iconify/react';

export default function Input() {
  return (
    <>
      <Wrapper>
        <InputStyled type="text" name="message" id="message" label="message input"></InputStyled>
        <InputButton>
          <Icon icon="carbon:send-alt" style={{fontSize: '28px'}} />
        </InputButton>
      </Wrapper>
    </>
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
