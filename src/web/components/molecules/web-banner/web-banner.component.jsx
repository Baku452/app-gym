import styles from './web-banner.module.scss';

const WebBanner = ({ image }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__overlay} />
      <img src={image} className={styles.banner__imagen} />
      <h1>HOLA</h1>
    </section>
  );
};

export default WebBanner;
