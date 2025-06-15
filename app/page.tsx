'use client';

import { useState } from 'react';
import ShapeSelector from '../components/ShapeSelector';
import GemstoneGrid from '../components/GemstoneGrid';
import CartView from '../components/CartView';
import { CartProvider, useCart } from '../components/CartContext';

/* -----------------------------  Header  ----------------------------- */
function Header({
  showCart,
  toggleCart,
}: {
  showCart: boolean;
  toggleCart: () => void;
}) {
  const { cart } = useCart();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1>Gemstone Explorer</h1>

      {/* ----------  View Cart Button with Badge  ---------- */}
      <button
        onClick={toggleCart}
        style={{ padding: '10px', position: 'relative' }}
      >
        {showCart ? 'Close Cart' : 'View Cart'}
        {cart.length > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-10px',
              backgroundColor: '#e63946',
              color: '#fff',
              borderRadius: '50%',
              padding: '2px 8px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
            }}
          >
            {cart.length}
          </span>
        )}
      </button>
    </header>
  );
}

/* -----------------------------  Home Page  ----------------------------- */
export default function Home() {
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);

  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <CartProvider>
      <Header showCart={showCart} toggleCart={toggleCart} />

      <main>
        {showCart ? (
          <CartView />
        ) : !selectedShape ? (
          <ShapeSelector onSelect={setSelectedShape} />
        ) : (
          <GemstoneGrid
            shape={selectedShape}
            onBack={() => setSelectedShape(null)}
          />
        )}
      </main>
    </CartProvider>
  );
}
