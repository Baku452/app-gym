import React from 'react';
import styles from './blogs.module.scss';
import { CardBlog } from 'components/molecules';
import { Button } from 'react-bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';

const Blogs = () => {
  return (
    <div className={styles.principal}>
      <div className={styles.principal__body}>
        <h2 className={styles.title}>Blogs publicados</h2>
        <div className={styles.principal__body__blogs}>
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </div>
      <div className={styles.principal__blogs_best}>
        <div className={styles.principal__improvement}>
          <span>Mejores Blogs</span>
          <Button size="sm" style={{ color: '#fff', cursor: 'pointer' }} variant="orange">
            Ver todo
          </Button>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Blogs);
