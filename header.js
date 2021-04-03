import React from 'react';

export default function header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Carrito de compras</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> Registrate </a>
      </div>
    </header>
  );
}