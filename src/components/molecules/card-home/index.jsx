import { Col } from 'react-bootstrap';
import styles from './index.module.scss';

const CardHome = ({ item }) => {
  return (
    <>
      <Col lg={4} className={`${styles.card}`}>
        <div className={styles.card__content}>
          <div className={styles.card__overlay} />
          <img alt={item.title} className={styles.card__img} src={item.img} />
          <div className={styles.card__textContent}>
            <h3 className={styles.card__title}>{item.title}</h3>
            <p className={styles.card__text}>{item.content}</p>
          </div>
        </div>
      </Col>
    </>
  );
};

export { CardHome };
