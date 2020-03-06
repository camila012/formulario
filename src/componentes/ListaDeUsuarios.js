import React from 'react';

const ListaDeUsuarios = ({ usuarios }) => (

  <div className="row d-flex justify-content-center">
    <ul className="col-md-6">
      {usuarios.map((usuario) => (
        <li

          key={usuario.id}
        >
          <div>
            <b>Nombre:</b>
            <p>
              {usuario.name}


            </p>
          </div>

          <div>

            <b>
              Correo:
            </b>
            <p>

              {usuario.email}
            </p>

            <b> Telefono:</b>
            <br />
            <p>
              {usuario.phone}
            </p>

          </div>

        </li>

      ))}


    </ul>
  </div>
);

export default ListaDeUsuarios;
