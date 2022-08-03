import styled from 'styled-components';

export default function About() {
  return (
    <StyledMain>
      <h2>About</h2>
      <p>
        chRat - gesprochen “Krät”
        <br />
        <br />
        ist ein Chat/Messender der im späteren Verlauf Whatsapp völlig überflüssig machen wird.
        <br />
        <br />
        Jeder User der Nachrichten schreibt sieht diese unterhalb der Demo-Daten...
        <br />
        <br />
        Spätere Änderungen sind MongoDB Anbindung, Loginseite mit Username und Password, Logout im Hamburger-Menü,
        direkte Nachrichten an User der vorher ausgewählt werden kann. direkte Nachrichten an bestimmte vorab
        ausgewählte Benutzer. Die nächste Stufe wird sein auch Bilder in den Chat zu stellen und oder dann an direkte
        vorab ausgewählte User zu versenden.
      </p>
    </StyledMain>
  );
}

const StyledMain = styled.main`
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
    margin-bottom: 20px;
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
