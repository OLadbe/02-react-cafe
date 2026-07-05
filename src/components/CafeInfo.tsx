import css from '../styles/CafeInfo.module.css';

export default function CafeInfo() {
return (
    <div className={css.cafeInfo}>
      <h2 className={css.cafeTitle}>Sip Happens Café</h2>
      <p className={css.cafeDescription}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
} 