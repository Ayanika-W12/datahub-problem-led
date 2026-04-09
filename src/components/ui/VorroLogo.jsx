import logoColor from '../../assets/vorro-logo.png';
import logoWhite from '../../assets/vorro-white.png';

export default function VorroLogo({ white = false, height = 34 }) {
  return (
    <img
      src={white ? logoWhite : logoColor}
      alt="Vorro"
      height={height}
      style={{ display: 'block', width: 'auto', objectFit: 'contain' }}
    />
  );
}
