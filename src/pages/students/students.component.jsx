import { CardStudent } from 'components/molecules/index';
import React from 'react';
import Container from '../../../node_modules/react-bootstrap/esm/Container';
import styles from './students.module.scss';
import { BsStar, BsStarFill } from 'react-icons/bs';

const Students = () => {
  return (
    <Container>
      <h2 className={styles.title}>Students</h2>
      <div className={styles.students}>
    <div className={styles.student}>
      <div className={styles.student__content}>
        <img
          className={styles.student__image}
          src="https://100k-faces.glitch.me/random-image"
          alt="student gym"
        />
        <div className={styles.student__name}>
          <span className={styles.title}>Donec rutrum congue</span>
        </div>
        <div className={styles.student__description}>
          "Vestibulum ac diam sit amet quam vehicula elementum sed "
        </div>
      </div>
    </div>
    <div className={styles.student}>
      <div className={styles.student__content}>
        <img
          className={styles.student__image}
          src="https://100k-faces.glitch.me/random-image"
          alt="student gym"
        />
        <div className={styles.student__name}>
          <span className={styles.title}>eget tincidunt nibh</span>
        </div>
        <div className={styles.student__description}>
          " Vivamus suscipit tortor eget sit amet dui."
        </div>
      </div>
    </div>
    <div className={styles.student}>
      <div className={styles.student__content}>
        <img
          className={styles.student__image}
          src="https://100k-faces.glitch.me/random-image"
          alt="student gym"
        />
        <div className={styles.student__name}>
          <span className={styles.title}> felis porttitor volutpat</span>
        </div>
        <div className={styles.student__description}>
          "eget felis porttitor volutpat. Nulla porttitor accumsan tincidun"
        </div>
      </div>
    </div>
    <div className={styles.student}>
      <div className={styles.student__content}>
        <img
          className={styles.student__image}
          src="https://100k-faces.glitch.me/random-image"
          alt="student gym"
        />
        <div className={styles.student__name}>
          <span className={styles.title}>elementum sed sit amet</span>
        </div>
        <div className={styles.student__description}>
          "aliquet elit, eget tincidunt nibh p"
        </div>
      </div>
    </div>
    <div className={styles.student}>
      <div className={styles.student__content}>
        <img
          className={styles.student__image}
          src="https://100k-faces.glitch.me/random-image"
          alt="student gym"
        />
        <div className={styles.student__name}>
          <span className={styles.title}>tincidunt nibh pulvinar</span>
        </div>
        <div className={styles.student__description}>
          "elementum sed sit amet dui"
        </div>
      </div>
    </div>
      </div>
    </Container>
  );
};
export default React.memo(Students);
