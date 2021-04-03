import React from 'react';
import Producto from './Producto';

export default function main(props) {
  const { productos, onAdd } = props;
  return (
      
    <main className="block col-2">
      <h2>Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} onAdd={onAdd}></Producto>
        ))}
      </div>
    </main>
  );
}