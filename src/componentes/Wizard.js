import React, { useState, useEffect } from 'react';
import StepWizard from 'react-step-wizard';
import axios from 'axios';
import Formulario from './ Formulario';
import ListaDeUsuarios from './ListaDeUsuarios';
import { placeholderUrl } from '../utils/constants';

const Wizard = () => {
  const [usuarios, guardarUsuarios] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://jsonplaceholder.typicode.com'; const responde = await axios.get(url);
      guardarUsuarios(responde.data);
    }; consultarAPI();
  }, [usuarios, guardarUsuarios]);

  async function onSubmitForm(newFormData) {
    console.log('La data para enviar es', newFormData);
    const response = await axios.post(`${placeholderUrl}/users`, newFormData);
    if (response.status === 201) {
      guardarUsuarios([...usuarios, response.data]);
    }
  }

  return (
    <>
      <h2>Resultado</h2>
      <StepWizard>
        <Formulario onSubmit={onSubmitForm} />
        <ListaDeUsuarios usuarios={usuarios} />
      </StepWizard>
    </>
  );
};

export default Wizard;
