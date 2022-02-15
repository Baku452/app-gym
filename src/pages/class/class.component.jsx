import React from 'react';
import { Course } from 'components/molecules';
import styles from './class.module.scss';
import Container from '../../../node_modules/react-bootstrap/esm/Container';

const Class = () => {
  return (
    <>
      <Container>
        <h2 className={styles.title}>Cursos publicados</h2>
        <div className={styles.courses}>
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </Container>
    </>
  );
};
export default React.memo(Class);
