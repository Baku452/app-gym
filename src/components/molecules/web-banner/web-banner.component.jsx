import styles from './web-banner.module.scss';

const WebBanner = ({ image }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__overlay} />
      <img alt="Imagen" src={image} className={styles.banner__imagen} />
      <h2 className={styles.banner__title}>
        NO <br />
        PAIN <br /> NO <br />
        GAIN
      </h2>
    </section>
  );
};

export { WebBanner };
