import logoColor from '../../assets/vorro-logo.png';
import logoWhite from '../../assets/vorro-white.png';

export default function VorroLogo({ white = false, height = 34 }) {
  // Use stacked images with opacity transition for smooth crossfade
  return (
    <div style={{ position: 'relative', height, width: 'auto', display: 'inline-block' }}>
      <img
        src={logoWhite}
        alt=""
        height={height}
        style={{
          display: 'block',
          width: 'auto',
          objectFit: 'contain',
          opacity: white ? 1 : 0,
          transition: 'opacity 0.15s ease',
        }}
      />
      <img
        src={logoColor}
        alt="Vorro"
        height={height}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'block',
          width: 'auto',
          objectFit: 'contain',
          opacity: white ? 0 : 1,
          transition: 'opacity 0.15s ease',
        }}
      />
    </div>
  );
}
