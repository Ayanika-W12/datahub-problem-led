import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  icon,
  iconRight,
  disabled = false,
  ...props
}) => {
  const base = `btn btn-${variant} btn-${size} ${className}`;

  const content = (
    <>
      {icon && <span className="btn-icon-left">{icon}</span>}
      {children}
      {iconRight && <span className="btn-icon-right">{iconRight}</span>}
    </>
  );

  if (to) {
    return <Link to={to} className={base} {...props}>{content}</Link>;
  }

  if (href) {
    return <a href={href} className={base} {...props}>{content}</a>;
  }

  return (
    <button className={base} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
