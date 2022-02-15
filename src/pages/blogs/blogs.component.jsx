import React from 'react';
import Container from '../../../node_modules/react-bootstrap/esm/Container';
import styles from './blogs.module.scss';
import { Blog } from 'components/molecules';

const Blogs = () => {
  return (
    <Container>
      <h2 className={styles.title}>Blogs publicados</h2>
      <div className={styles.blogs}>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </Container>
  );
};
export default React.memo(Blogs);
