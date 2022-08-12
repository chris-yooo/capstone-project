import styled from 'styled-components';

export default function Imprint() {
  return (
    <StyledMain>
      <h2>Imprint</h2>
      <p>
        chRat © 2022
        <br /> <br />
        Angaben gemäß § 5 TMG
        <br /> <br />
        Christian Strassow
        <br />
        Ebertallee 172
        <br />
        22607 Hamburg
        <br />
        Germany
        <br /> <br />
        <a href="mailto:info@strassow.de, info@strassow.com">info (at) strassow.de</a>
        <br /> <br />
        Haftungsausschluss:
        <br />
        Haftung für Inhalte:
        <br /> <br />
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
        Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
        TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
        wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
        Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
        möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;

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
    font-size: 15px;
    line-height: 18px;
    margin: 20px;
    margin-top: 0;
  }
  a {
    font-size: 1.6rem;
    color: #fff;
  }
`;
