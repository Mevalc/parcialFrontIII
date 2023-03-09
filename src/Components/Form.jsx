import React, { useState } from "react";
import Card from "./Card";
import './Form.css'

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    edad: "",
    direccion: "",
    mascota: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.edad.length <3 && user.mascota !== ''){
      setShow(true)
      setError(false)
    } else {
      setShow(false)
      setError(true)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />
        <label>Edad: </label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, edad: e.target.value })}
        />
        <label>Dirección: </label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, direccion: e.target.value })}
        />

        <label>Adopción: </label>
        <select onChange={(e) => setUser({ ...user, mascota: e.target.value })}>
          <option value="">Indique la opción de su preferencia</option>
          <option value="perro">perro</option>
          <option value="gato">gato</option>
          <option value="conejo">conejo</option>
        </select>
        <button className="submit">Enviar solicitud</button>

        <h3>
          {user.nombre} revisa tu selección de mascota: {user.mascota}
        </h3>
      </form>

      {error ? 'Ingrese la información correcta' : null}
      {show ? <Card nombre={user.nombre}  direccion={user.direccion} mascota={user.mascota} /> : null}

    </div>
  );
};

export default Form;
