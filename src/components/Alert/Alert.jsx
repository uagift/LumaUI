import './Alert.css';

function Alert({
  children,
  variant = 'info',
  role = 'alert',
}) {
  return (
    <div
      className={`lumaui-alert lumaui-alert--${variant}`}
      role={role}
    >
      {children}
    </div>
  );
}

export default Alert;