import { CardStudent } from 'components/molecules/index';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './instructors.module.scss';

const Students = () => {
  return (
    <Container>
      <h2 className={styles.title}>Instructors</h2>
      <div className={styles.students}>
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
      </div>
    </Container>
  );
};
export default React.memo(Students);
