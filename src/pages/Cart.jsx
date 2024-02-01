import React, { useContext, useState } from 'react';
import AppContext from '../components/context';

function Cart() {
  const {cartItems, deleteCartItems} = useContext(AppContext);
  
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  console.log(totalPrice);

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className='cart-product'>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-products d-flex justify-between">
          <img className='cart-products-pizza' width={40}  src={item.imageUrl} />
          <div>
            <h3>{item.title}</h3>
            <p>Популярна</p>
            <span>грн {item.price}</span>
          </div>
          <div onClick={() => deleteCartItems(item.id)} className="cart-delete">
            <img width={10} src="/img/cross.png" />
          </div>
        </div>
      ))}
      </div>
      <div className="cart-total">
        <div className="d-flex align-center justify-between">
          <h2>Total price</h2>
          <h4>{totalPrice} грн</h4>
        </div>
        <button className="cart-btn">Замовити</button>
      </div>
    </div>
  );
}

export default Cart;
