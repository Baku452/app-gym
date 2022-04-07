import React, { useState } from 'react';
import styles from './products.module.scss';
import { Button, Modal } from 'react-bootstrap';
import Row from '../../../node_modules/react-bootstrap/esm/Row';
import Col from '../../../node_modules/react-bootstrap/esm/Col';

import Repository from '../../repositories/factory/RepositoryFactory';
import Form from '../../../node_modules/react-bootstrap/esm/Form';

const Products = () => {
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
            <h2 className={styles.title}>List of Products</h2>
          </Col>
          <Col md={2}>
            <Button onClick={handleShow} variant="outline-primary" size="md">
              Create Product
            </Button>
          </Col>
        </Row>
        <div className={styles.principal__body__blogs}></div>
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
export default React.memo(Products);
