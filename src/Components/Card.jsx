import React from 'react'

const Card = ({nombre, direccion, mascota}) => {
    const hoy = new Date()
    const dia = hoy.getDate()
    const mes = hoy.getMonth()

  return (
    <div>
        <h3>{nombre} has elegido adoptar un {mascota}</h3>
        <h3> El día {dia+5} del mes {mes+1} del año, te lo llevaremos a la dirección {direccion}</h3>
        
    </div>
  )
}

export default Card