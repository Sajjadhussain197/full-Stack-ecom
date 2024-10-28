import React, { useEffect } from 'react'
import { VscError } from 'react-icons/vsc';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
const subtotal = 123;
const cartItems = [
  { id: 1, name: 'Item 1', quantity: 10, price: 10, image: 'https://appleshop.com.pk/wp-content/uploads/2020/11/macbook-gray.jpg' },
  { id: 2, name: 'Item 2', quantity : 20, price: 20, image: 'https://appleshop.com.pk/wp-content/uploads/2020/11/macbook-gray.jpg'  },
  { id: 3, name: 'Item 3', quantity : 30, price: 30,   image: 'https://appleshop.com.pk/wp-content/uploads/2020/11/macbook-gray.jpg' },
];
const tax = Math.round(subtotal * 18);
const shippingCharges = 15;
const discount = 0;
const total = subtotal + tax + shippingCharges - discount;

const Cart = () => {
  const [couponCode, setCouponCode] = React.useState('');
  const [isValidCouponCode, setIsValidCouponCode] = React.useState(false);
  useEffect(() => {
    if (couponCode === 'SUMMER20') {
      setIsValidCouponCode(true);
    }
  }, [couponCode]);
  return (
    <div className='cart'>
        <main>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))
            ) : (
                <h1>No items in cart</h1>
            )   }
        </main>
        <aside>
            <p>
                Subtotal: ${subtotal}
            </p>
            <p>
                Tax: ${tax}
            </p>
            <p>
                Shipping Charges: ${shippingCharges}
            </p>
            <p>
                Discount: <em className='red'> - ${discount}</em>
            </p>
            <p>
                <b>Total: ${total}</b>
            </p>
            <input type="text" placeholder='Enter Coupon Code' value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
            {
                couponCode && (
                    isValidCouponCode ?
                <span className='green'>${couponCode} off using the <code>{couponCode}</code> </span>
                :
                <span className='red'>
                    Invalid Coupon Code <VscError /></span>
                )
            }
            {
                cartItems.length > 0 && (
                    <Link className='btn' to='/shipping'>Checkout</Link>
                )
            }
        </aside>
      
    </div>
  )
}

export default Cart
