import React from 'react';
import styled from 'styled-components';

export default function Imprint() {
  return (
    <Main>
      <h2>Imprint</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem, totam velit beatae
        laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores? Facilis odit quia obcaecati nemo
        fugit qui dignissimos esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem,
        totam velit beatae laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores? Facilis odit quia
        obcaecati nemo fugit qui dignissimos esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
        exercitationem, totam velit beatae laboriosam asperiores veniam consectetur adipisci debitis nostrum maiores?
        Facilis odit quia obcaecati nemo fugit qui dignissimos esse.
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    margin-bottom: 55px;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
    margin: 20px;
    margin-top: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
  }
`;
