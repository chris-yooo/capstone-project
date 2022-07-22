import styled from 'styled-components';
import MessageInput from './components/input';

export default function App() {
  return (
    <>
      <ChratBody>
        <Header>
          <h1>chRat</h1>
        </Header>
        <Main>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem, totam velit beatae
              laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores? Facilis odit quia obcaecati
              nemo fugit qui dignissimos esse.
            </p>
          </article>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem, totam velit beatae
              laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores? Facilis odit quia obcaecati
              nemo fugit qui dignissimos esse.
            </p>
          </article>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem, totam velit beatae
              laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores? Facilis odit quia obcaecati
              nemo fugit qui dignissimos esse.
            </p>
          </article>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem, totam velit beatae
              laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores? Facilis odit quia obcaecati
              nemo fugit qui dignissimos esse.
            </p>
          </article>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem, totam velit beatae
              laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores? Facilis odit quia obcaecati
              nemo fugit qui dignissimos esse.
            </p>
          </article>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem, totam velit beatae
              laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores? Facilis odit quia obcaecati
              nemo fugit qui dignissimos esse.
            </p>
          </article>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem, totam velit beatae
              laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores? Facilis odit quia obcaecati
              nemo fugit qui dignissimos esse.
            </p>
          </article>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem, totam velit beatae
              laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores? Facilis odit quia obcaecati
              nemo fugit qui dignissimos esse.
            </p>
          </article>
        </Main>
        <MessageInput></MessageInput>
      </ChratBody>
    </>
  );
}

const ChratBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 375px;
  height: 667px;
  background-color: rgba(154, 154, 154, 0.5);
`;

const Header = styled.header`
  margin: 10px;
  h1 {
    /* margin: 0; */
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 4rem;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;

const Main = styled.main`
  width: 375px;
  height: 475px;
  overflow-y: scroll;
  /* overflow-x: scroll; */
  p {
    margin: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
