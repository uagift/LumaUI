import './Input.css';

function Input({
  label,
  id,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  required = false,
  disabled = false,
  error = '',
  ariaLabel,
}) {
  const inputId =
    id ||
    `lumaui-input-${label?.toLowerCase().replace(/\s+/g, '-') || 'field'}`;

  const errorId = `${inputId}-error`;

  return (
    <div className="lumaui-input">
      {label && (
        <label htmlFor={inputId} className="lumaui-input__label">
          {label}
          {required && (
            <span aria-hidden="true"> *</span>
          )}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        aria-label={!label ? ariaLabel : undefined}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        className={`lumaui-input__field ${
          error ? 'lumaui-input__field--error' : ''
        }`}
      />

      {error && (
        <p
          id={errorId}
          className="lumaui-input__error"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;