import React from 'react';

export default function producto(props) {
  const { producto, onAdd } = props;
  return (
    <div>
      <img className="Tienda" src={producto.image} alt={producto.name} />
      <h3>{producto.name}</h3>
      <div>${producto.price}</div>
      <div>
        <button onClick={() => onAdd(producto)}>Agregar</button>
      </div>
    </div>
  );
}