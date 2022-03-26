import React, { useState } from 'react';
import styles from './blogs.module.scss';
import { CardBlog } from 'components/molecules';
import { Button, Modal } from 'react-bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Row from '../../../node_modules/react-bootstrap/esm/Row';
import Col from '../../../node_modules/react-bootstrap/esm/Col';

import Repository from '../../repositories/factory/RepositoryFactory';
import Form from '../../../node_modules/react-bootstrap/esm/Form';
const BusinessObjectRepository = Repository.get('businessObject');

const Blogs = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [urlImage, setUrlImage] = useState('');

  const onBlogFormSubmit = async e => {
    e.preventDefault();

    const payload = prepareBlog({ name, description, content, urlImage });
    // const blog = await BusinessObjectRepository.store(payload);
    // console.log('register blog is: ', blog)

    handleClose();
  };

  const prepareBlog = ({ name, description, content, urlImage }) => {
    return {
      name,
      type: 'blog',
      description,
      urlImage,
      content,
    };
  };

  return (
    <div className={styles.principal}>
      <div className={styles.principal__body}>
        <Row className="mb-2">
          <Col md={10}>
            <h2 className={styles.title}>Blogs publicados</h2>
          </Col>
          <Col md={2}>
            <Button onClick={handleShow} variant="outline-orange" size="sm">
              Subir Blog
            </Button>
          </Col>
        </Row>
        <div className={styles.principal__body__blogs}>
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
      </div>
      <div className={styles.principal__blogs_best}>
        <div className={styles.principal__improvement}>
          <span>Mejores Blogs</span>
          <Button size="sm" style={{ color: '#fff', cursor: 'pointer' }} variant="orange">
            Ver todo
          </Button>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro de Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onBlogFormSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Tema "
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Descripción "
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Imagen de Presentación</Form.Label>
              <Form.Control
                type="file"
                placeholder="Ingrese image"
                value={urlImage}
                onChange={e => setUrlImage(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formContent">
              <Form.Label>Contenido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Cotenido "
                value={content}
                onChange={e => setContent(e.target.value)}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit" block>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default React.memo(Blogs);
