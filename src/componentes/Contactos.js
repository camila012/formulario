import React, { useState } from 'react';
import Registrado from './Registrado';


const Contactos = ({ contacto }) => {
  const [contactos, guardarContactos] = useState([

    {
      nombre: '', email: '', cedula: '',
    },
  ]);
  const [error, guardarError] = useState(false);


  const { nombre, email, cedula } = contacto;


  const onclick = (e) => {
    guardarContactos({
      ...contactos,
      [e.target.name]: e.target.value,

    });
  };

  const enviar = (e) => {
    e.preventDefault();
    if (nombre.trim() === '' || email.trim() === '' || cedula.trim() === '') {
      guardarError(true);
    }
    guardarError(false);
  };


  return (
    <>


      <form
        className="row justify-content-center"
        onSubmit={enviar}
      >


        {error ? <p className="red darken-4">TODOS LOS CAMPOS SON OBLIGATORIOS</p> : null}


        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nombre.id}
          onClick={onclick}
        />

        <input
          type="email"
          name="email"
          placeholder="email"
          value={email.id}
          onClick={onclick}
        />


        <input
          type="text"
          name="cedula"
          placeholder="Cedula"
          value={cedula.id}
          onClick={onclick}
        />


        <div>
          <input className="btn btn-dark" type="submit" value="Enviar" />
        </div>


      </form>
      <br />
      <div className="row justify-content-center">

        <Registrado
          guardarContactos={guardarContactos}

        />


      </div>

    </>
  );
};

export default Contactos;
