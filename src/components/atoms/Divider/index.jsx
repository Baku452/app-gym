import styles from './index.module.scss';

const LineDivider = () => {
  return <hr className={styles.lineDivider}></hr>;
};

const ShapeDividerTop = () => {
  return (
    <div className={styles.dividerTop}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none">
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className={styles.divider__shapeFill}></path>
      </svg>
    </div>
  );
};

const ShapeDividerTopWhite = () => {
  return (
    <div className={styles.dividerBottom}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none">
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className={styles.divider__shapeFill}></path>
      </svg>
    </div>
  );
};

export { LineDivider, ShapeDividerTop, ShapeDividerTopWhite };
