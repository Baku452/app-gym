import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import styles from './card-student.module.scss';

// https://picsum.photos/278/156
const CardStudent = () => {
  return (
    <div className={styles.student}>
      <div className={styles.student__content}>
        <img
          className={styles.student__image}
          src="https://100k-faces.glitch.me/random-image"
          alt="student gym"
        />
        <div className={styles.student__name}>
          <span className={styles.title}>Carlos Ramirez Santa</span>
        </div>
        <div className={styles.student__icons}>
          <BsStarFill fill="#ff8906" />
          <BsStar fill="#ff8906" />
          <BsStarFill fill="#ff8906" />
        </div>
        <div className={styles.student__description}>
          "Tips y técnicas adecuadas para el entrenamiento con barra superior."
        </div>
      </div>
    </div>
  );
};
export default React.memo(CardStudent);
