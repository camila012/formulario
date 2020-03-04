import React, { useState } from 'react';

import Contactos from './Contactos';


const Formulario = () => {
  const [contactos] = useState([

    {
      nombre: '', email: '', cedula: '',
    },
  ]);


  return (
    <>


      {contactos.map((contacto) => (
        <Contactos
          key={contacto.id}
          contacto={contacto}
        />

      ))}

      <br />


    </>
  );
};

export default Formulario;
