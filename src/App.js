import React from 'react';
import styled from '@emotion/styled';
import Formulario from './componentes/ Formulario';

const Inicio = styled.div`
background-color:#000;
font-family: Arial, Helvetica, sans-serif;
width: 100%;
padding:10%;


`;

const Titulo = styled.h1`

color:#fff;
text-align: center;

`;

function App() {
  return (
    <>

      <Inicio>
        <Titulo>contacto</Titulo>
      </Inicio>

      <br />

      <Formulario />

    </>
  );
}

export default App;
