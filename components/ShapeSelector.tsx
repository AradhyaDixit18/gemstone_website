import styles from '../styles/ShapeSelector.module.css';

type ShapeSelectorProps = {
  onSelect: (shape: string) => void;
};

const shapes = [
  { name: 'Round', img: '/images/round.png' },
  { name: 'Oval', img: '/images/oval.png' },
  { name: 'Emerald', img: '/images/emerald.png' },
  { name: 'Pear', img: '/images/pear.png' },
  { name: 'Cushion', img: '/images/cushion.png' },
  { name: 'Princess', img: '/images/princess.png' },
];

export default function ShapeSelector({ onSelect }: ShapeSelectorProps) {
  return (
    <div className={styles.container}>
      {shapes.map((shape) => (
        <div
          key={shape.name}
          className={styles.card}
          onClick={() => onSelect(shape.name.toLowerCase())}
        >
          <img src={shape.img} alt={shape.name} className={styles.image} />
          <p className={styles.name}>{shape.name}</p>
        </div>
      ))}
    </div>
  );
}
