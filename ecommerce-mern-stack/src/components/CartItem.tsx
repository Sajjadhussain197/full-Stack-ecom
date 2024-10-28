import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
type CartItemProps = {  
    item:  any;
    
}

const CartItem = ({ item }: CartItemProps) => {
    
    const {id, name, quantity, price, image} = item;
  return (
    <div className='cart-item'>
      <img src={image} alt={item.name} />
      <article>
        <Link to={`/products/${id}`}>{name}</Link>
        <span>${price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button className='cart-item-remove'><FaTrash /></button>
    </div>
  )
}

export default CartItem
