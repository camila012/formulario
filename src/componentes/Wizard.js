import React, { useState, useEffect } from 'react';
import StepWizard from 'react-step-wizard';
import axios from 'axios';
import styled from '@emotion/styled';
import Formulario from './ Formulario';
import ListaDeUsuarios from './ListaDeUsuarios';


const Wizard = () => {
  const [usuarios, guardarUsuarios] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://jsonplaceholder.typicode.com/users'; const responde = await axios.get(url);
      guardarUsuarios(responde.data);
    };
    consultarAPI();
  }, []);

  async function onSubmit(newFormData) {
    console.log('La data para enviar es', newFormData);
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', newFormData);
    if (response.status === 201) {
      guardarUsuarios([response.data, ...usuarios]);
      console.log(response.data);
      console.log(usuarios);
    }
  }


  return (
    <>

      <StepWizard>
        <Formulario onSubmit={onSubmit} />
        <ListaDeUsuarios usuarios={usuarios} />
      </StepWizard>

    </>
  );
};

export default Wizard;
