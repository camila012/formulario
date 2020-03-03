import React, { useState } from 'react';

import Contactos from './Contactos';


const Formulario = () => {
  const [contactos, guardarContactos] = useState([

    {
      nombre: '', email: '', cedula: '',
    },
  ]);


  return (
    <>


      <div className="row justify-content-center">
        <div className="u-full-width">
          {contactos.map((contacto) => (
            <Contactos
              key={contacto.id}
              contacto={contacto}
              guardarContactos={guardarContactos}

            />
          ))}

        </div>
      </div>

    </>
  );
};

export default Formulario;
