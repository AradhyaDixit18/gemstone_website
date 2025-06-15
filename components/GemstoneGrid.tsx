'use client';

import styles from '../styles/GemstoneGrid.module.css';
import { useState } from 'react';
import stoneData from '../data/stones.json';
import { useCart } from './CartContext';

type Props = {
  shape: string;
  onBack: () => void;
};

export default function GemstoneGrid({ shape, onBack }: Props) {
  const stones = (stoneData as any)[shape] || [];
  const [selectedStone, setSelectedStone] = useState<any>(null);
  const { addToCart } = useCart();

  if (selectedStone) {
    return (
      <div className={styles.details}>
        <button onClick={() => setSelectedStone(null)} className={styles.backBtn}>← Back</button>
        <h2 className={styles.detailTitle}>{selectedStone.name}</h2>
        <img src={selectedStone.img} className={styles.detailImage} alt={selectedStone.name} />

        <div className={styles.infoBlock}>
          <h4 className={styles.sectionHeading}>Colors</h4>
          <div className={styles.colorOptions}>
            {selectedStone.colors.map((color: string, idx: number) => (
              <span key={idx} className={styles.colorDot} style={{ backgroundColor: color }}></span>
            ))}
          </div>
        </div>

        <div className={styles.infoBlock}>
          <h4 className={styles.sectionHeading}>Sizes</h4>
          <select className={styles.selectBox}>
            {selectedStone.sizes.map((s: string, i: number) => <option key={i}>{s}</option>)}
          </select>
        </div>

        <div className={styles.infoBlock}>
          <h4 className={styles.sectionHeading}>Cut</h4>
          <select className={styles.selectBox}>
            {selectedStone.cuts.map((c: string, i: number) => <option key={i}>{c}</option>)}
          </select>
        </div>

        <div className={styles.infoBlock}>
          <h4 className={styles.sectionHeading}>Dimensions</h4>
          <p className={styles.dimensions}>{selectedStone.dimensions}</p>
        </div>

        <button className={styles.cartBtn} onClick={() => addToCart(selectedStone)}>🛒 Add to Cart</button>
      </div>
    );
  }

  return (
    <div className={styles.gridWrapper}>
      <button onClick={onBack} className={styles.backBtn}>← Back to Shapes</button>
      <h2 className={styles.heading}>{shape.toUpperCase()} Gemstones</h2>
      <div className={styles.grid}>
        {stones.map((stone: any, idx: number) => (
          <div key={idx} className={styles.card} onClick={() => setSelectedStone(stone)}>
            <img src={stone.img} className={styles.cardImage} alt={stone.name} />
            <div className={styles.cardName}>{stone.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
