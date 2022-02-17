import React from 'react';
import { CardCourse } from 'components/molecules';
import styles from './class.module.scss';
import Container from '../../../node_modules/react-bootstrap/esm/Container';

const Class = () => {
  return (
    <>
      <Container>
        <h2 className={styles.title}>Cursos publicados</h2>
        <div className={styles.courses}>
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </div>
      </Container>
    </>
  );
};
export default React.memo(Class);
