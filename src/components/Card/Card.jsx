import './Card.css';

function Card({
  children,
  title,
  className = '',
}) {
  return (
    <article className={`lumaui-card ${className}`}>
      {title && <h2 className="lumaui-card__title">{title}</h2>}
      <div className="lumaui-card__content">
        {children}
      </div>
    </article>
  );
}

export default Card;