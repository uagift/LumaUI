import './Button.css';

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      className={`lumaui-button lumaui-button--${variant} lumaui-button--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
