import React, { useState } from 'react';

const Formulario = ({ onSubmit, nextStep }) => {
  const [info, guardarInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });


  function enviar() {
    console.log('info is', info);
    onSubmit(info);
    nextStep();
    console.log('nextStep:', nextStep);
  }

  function actualizarInfo(campo, valor) {
    guardarInfo({
      ...info,
      [campo]: valor,
    });
  }


  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Nombre"
                onChange={(e) => actualizarInfo('name', e.target.value)}

              />
              <div>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Correo"
                  onChange={(e) => actualizarInfo('email', e.target.value)}
                />
              </div>

              <div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Telefono"
                  onChange={(e) => actualizarInfo('phone', e.target.value)}
                />
              </div>

              <br />
              <button
                className="btn btn-info"
                type="submit"
                onClick={enviar}

              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;
