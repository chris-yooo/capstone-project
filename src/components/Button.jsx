import React from 'react';
import styled from 'styled-components';

export default function Submit() {
  return (
    <InputButton type="submit" id="sendMessage">
      <Icon icon="carbon:send-alt" style={{fontSize: '28px'}} />
    </InputButton>
  );
}

const InputButton = styled.button`
  width: 7rem;
  border: none;
  border-radius: 12px;

  &:hover {
    outline: 1px solid #0060df;
  }
`;
