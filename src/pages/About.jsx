import React from 'react';
import styled from 'styled-components';

export default function About() {
  return (
    <Main>
      <h2>About</h2>
      <p>
        chRat - gesprochen “Krät” ist ein Chat/Messender der im späteren Verlauf Whatsapp völlig überflüssig machen
        wird. Jeder User der bis Dato hinterlegt ist kann sich auf der Loginpage einloggen und nach einem klick auf
        “Login” Nachrichten versenden die wiederrum jeder lesen kann der eingeloggt ist. Spätere Änderungen sind z.b
        direkte Nachrichten an bestimmte vorab ausgewählte Benutzer. Die nächste Stufe wird sein auch Bilder in den Chat
        zu stellen und oder dann an direkte vorab ausgewählte User zu versenden.
      </p>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 415px;

  h2 {
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 55px;
  }

  p {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    margin: 20px;
    margin-top: 0;
  }
`;
