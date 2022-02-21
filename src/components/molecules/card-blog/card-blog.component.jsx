import React from 'react';
import styles from './card-blog.module.scss';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const CardBlog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.blog__description}>
        <span className={styles.title}>Uso de Barra Superior</span>
        <span className={styles.comments}>
          Tips y técnicas adecuadas para el entrenamiento con barra superior.
        </span>
        <div className={styles.action}>
          <span className={styles.starts}>
            <BsStarFill fill="#ff8906" />
            <BsStarFill fill="#ff8906" />
            <BsStarFill fill="#ff8906" />
            <BsStar fill="#ff8906" />
            <BsStar fill="#ff8906" />
          </span>
          <Button size="sm" style={{ color: '#fff', cursor: 'pointer' }} variant="orange">
            leer más
          </Button>
        </div>
      </div>
      <div className={styles.blog__preview}>
        <img
          className={styles.blog__image}
          src="https://picsum.photos/278/156"
          alt="course gym"
        />
      </div>
    </div>
  );
};

export default CardBlog;
