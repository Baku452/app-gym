import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import styles from './card-course.module.scss';

//images
const playIcon = '../assets/icons/instructor/play.svg';

// https://picsum.photos/278/156
const CardCourse = () => {
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
          <BsStarFill fill="#ff8906" />
          <BsStarFill fill="#ff8906" />
          <BsStarFill fill="#ff8906" />
          <BsStar fill="#ff8906" />
          <BsStar fill="#ff8906" />
        </span>
      </div>
    </div>
  );
};
export default React.memo(CardCourse);
