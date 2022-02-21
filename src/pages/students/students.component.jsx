import { CardStudent } from 'components/molecules/index';
import React from 'react';
import Container from '../../../node_modules/react-bootstrap/esm/Container';
import styles from './students.module.scss';

const Students = () => {
  return (
    <Container>
      <h2 className={styles.title}>Estudiantes</h2>
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
