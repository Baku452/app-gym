import React from 'react';
import Container from '../../../node_modules/react-bootstrap/esm/Container';
import styles from './blogs.module.scss';
import { CardBlog } from 'components/molecules';

const Blogs = () => {
  return (
    <Container>
      <h2 className={styles.title}>Blogs publicados</h2>
      <div className={styles.blogs}>
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </Container>
  );
};
export default React.memo(Blogs);
