import React from 'react';
import styles from './course.module.scss';

//images
import playIcon from 'src/assets/icons/instructor/play.svg';
import starIcon from 'src/assets/icons/instructor/star.svg';

// https://picsum.photos/278/156
const Course = () => {
  return (
    <div className={styles.course}>
      <div className={styles.course__preview}>
        <img
          className={styles.course__image}
          src="https://picsum.photos/278/156"
          alt="course gym"
        />
        <div className={styles.course__play}>
          <img src={playIcon} alt="course gym" />
        </div>
      </div>
      <div className={styles.course__description}>
        <span className={styles.title}>Uso de Barra Superior</span>
        <span className={styles.comments}>
          Tips y técnicas adecuadas para el entrenamiento con barra superior.
        </span>
        <span className={styles.starts}>
          <img className={styles.start} src={starIcon} alt="" />
          <img className={styles.start} src={starIcon} alt="" />
          <img className={styles.start} src={starIcon} alt="" />
          <img className={styles.start} src={starIcon} alt="" />
          <img className={styles.start} src={starIcon} alt="" />
        </span>
      </div>
    </div>
  );
};
export default React.memo(Course);
