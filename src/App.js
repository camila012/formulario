import React from 'react';
import styled from '@emotion/styled';
import Wizard from './componentes/Wizard';

const Jumbotron = styled.div`
background-color: #30475e;
color:#fff;

`;


function App() {
  return (
    <>
      <Jumbotron className="jumbotron">
        <h1 className="text-center">
          Formulario
        </h1>

      </Jumbotron>


      <Wizard />

    </>
  );
}

export default App;
