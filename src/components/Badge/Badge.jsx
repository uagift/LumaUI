import './Badge.css';

function Badge({
  children,
  variant = 'default',
}) {
  return (
    <span className={`lumaui-badge lumaui-badge--${variant}`}>
      {children}
    </span>
  );
}

export default Badge;