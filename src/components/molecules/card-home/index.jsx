import { Col } from 'react-bootstrap';
import styles from './index.module.scss';

const CardHome = ({ item }) => {
  return (
    <>
      <Col className={`${styles.card} p-5`}>
        <div className={styles.card__overlay} />
        <img alt={item.title} src={item.img} />
        <h3>{item.title}</h3>
      </Col>
    </>
  );
};

export { CardHome };
