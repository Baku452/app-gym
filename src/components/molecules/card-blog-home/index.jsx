import { Col } from 'react-bootstrap';
import styles from './index.module.scss';

const BlogCardHome = ({ item }) => {
  return (
    <Col md={12} lg={6} className={styles.cardBlog}>
      <div className={styles.cardBlog__box}>
        <div className={`${styles.cardBlog__content} p-5`}>
          <p>{item.created}</p>
          <h3>{item.title}</h3>
          <h4 className={styles.cardBlog__category}>{item.category}</h4>
        </div>
        <img className={styles.cardBlog__img} alt={item.title} src={item.thumbnail} />
      </div>
    </Col>
  );
};

export { BlogCardHome };
