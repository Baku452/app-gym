import { Col } from 'react-bootstrap';
import styles from './index.module.scss';

const MembershipCard = ({ item }) => {
  return (
    <Col
      sm={12}
      md={6}
      lg={4}
      className={`${styles.card} ${item.active ? styles.active : null}`}>
      <div className={styles.card__content}>
        <h3 className={`${styles.card__title} pb-5 `}>{item.title}</h3>
        <p>{item.content}</p>
        <h5 className={styles.card__price}>${item.price}</h5>
      </div>
    </Col>
  );
};

export { MembershipCard };
