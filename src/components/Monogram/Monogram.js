import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          {/* Nav Log Here */}
          <path className="st0" d="M8.1,0.1v6.6l14.4,7.8L14.7,0.1H8.1z M8.4,0.4h5.9v5.9H8.4V0.4z M9.5,7h5.1l6,6L9.5,7z M15,1.5l6,11.1l-6-6
		V1.5z"/>
	<path className="st0" d="M36.9,0.1h-6.6l-7.8,14.4l14.4-7.8V0.1z M30.7,0.4h5.9v5.9h-5.9V0.4z M30,1.5v5.1l-6,6L30,1.5z M24.4,13.1l6-6
		h5.1L24.4,13.1z"/>
	<path className="st0" d="M8.1,28.9h6.6l7.8-14.4L8.1,22.3V28.9z M14.3,28.6H8.4v-5.9h5.9V28.6z M15,27.5v-5.1l6-6L15,27.5z M20.6,15.9
		l-6,6H9.5L20.6,15.9z"/>
	<path className="st0" d="M36.9,28.9v-6.6l-14.4-7.8l7.8,14.4H36.9z M36.6,28.6h-5.9v-5.9h5.9V28.6z M35.5,22h-5.1l-6-6L35.5,22z
		 M30,27.5l-6-11.1l6,6V27.5z"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
