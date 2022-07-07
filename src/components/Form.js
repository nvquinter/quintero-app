import React from 'react'

const form = ({ handleChange, data, handleSubmit }) => {
  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
        <input
            placeholder="Nombre"
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
        />
           <input
            placeholder="Apellido"
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
        />
        <input
            placeholder="Email"
            type="text"
            name="email"
            onChange={handleChange}
            value={data.email}
        />
        <input
            placeholder="Telefono"
            type="number"
            name="phone"
            onChange={handleChange}
            value={data.phone}
        />
    </form>
</div>
  )
}

export default form