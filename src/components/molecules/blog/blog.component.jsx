import React from 'react';
import styles from './blog.module.scss';

//images
const playIcon = 'src/assets/icons/instructor/play.svg';
const starIcon = 'src/assets/icons/instructor/star.svg';

const Blog = () => {
  return (
    <div className={styles.course}>
      <div className={styles.course__description}>
        <span className={styles.title}>Uso de Barra Superior</span>
        <span className={styles.comments}>
          Tips y técnicas adecuadas para el entrenamiento con barra superior.
        </span>
        <div className={styles.action}>
          <span className={styles.starts}>
            <img className={styles.start} src={starIcon} alt="" />
            <img className={styles.start} src={starIcon} alt="" />
            <img className={styles.start} src={starIcon} alt="" />
            <img className={styles.start} src={starIcon} alt="" />
            <img className={styles.start} src={starIcon} alt="" />
          </span>
          <button className={ styles.bottom }>leer mas</button>
        </div>
      </div>
      <div className={styles.course__preview}>
        <img
          className={styles.course__image}
          src="https://picsum.photos/278/156"
          alt="course gym"
        />
      </div>
    </div>
  );
}

export default Blog
