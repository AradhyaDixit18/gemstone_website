'use client';

import { useState } from 'react';
import ShapeSelector from '../components/ShapeSelector';
import GemstoneGrid from '../components/GemstoneGrid';
import CartView from '../components/CartView';
import { CartProvider } from '../components/CartContext';

export default function Home() {
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <CartProvider>
      <main>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
          <h1>Gemstone Explorer</h1>
          <button onClick={() => setShowCart(!showCart)} style={{ padding: '10px' }}>
            {showCart ? 'Close Cart' : 'View Cart'}
          </button>
        </header>
        {showCart ? (
          <CartView />
        ) : !selectedShape ? (
          <ShapeSelector onSelect={setSelectedShape} />
        ) : (
          <GemstoneGrid shape={selectedShape} onBack={() => setSelectedShape(null)} />
        )}
      </main>
    </CartProvider>
  );
}
