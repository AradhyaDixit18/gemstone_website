'use client';

import styles from '../styles/CartView.module.css';
import { useCart } from './CartContext';

export default function CartView() {
  const { cart } = useCart();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty. Add some shiny stones!</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item: any, index: number) => (
            <li key={index} className={styles.cartItem}>
              <img src={item.img} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h4 className={styles.itemName}>{item.name}</h4>
                <p className={styles.itemDimension}>📐 {item.dimensions}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
