import React from 'react';
import styles from './card-blog.module.scss';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useNavigate } from '../../../../node_modules/react-router/index';

const CardBlog = ({ name, description, slug, urlImage }) => {
  let navigate = useNavigate();

  return (
    <div className={styles.blog}>
      <div className={styles.blog__description}>
        <span className={styles.title}>{ name }</span>
        <span className={styles.comments}>{ description }</span>
        <div className={styles.action}>
          <span className={styles.starts}>
            <BsStarFill fill="#ff8906" />
            <BsStarFill fill="#ff8906" />
            <BsStarFill fill="#ff8906" />
            <BsStar fill="#ff8906" />
            <BsStar fill="#ff8906" />
          </span>
          <Button 
            size="sm" 
            style={{ color: '#fff', cursor: 'pointer' }} 
            onClick={() => navigate(`/blogs/${slug}`)}
            variant="orange">
            leer más
          </Button>
        </div>
      </div>
      <div className={styles.blog__preview}>
        <img
          className={styles.blog__image}
          src={ urlImage }
          alt="image gym"
        />
      </div>
    </div>
  );
};

export default CardBlog;
