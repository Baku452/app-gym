import { Form, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import React, { useState } from 'react';
const ModalProduct = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    // e.preventDefault();
    console.log(data);
    // const payload = prepareBlog({ name, description, content, urlImage });
    const saveProduct = await axios.post(
      process.env.REACT_APP_API_URL + '/api/v1/business-objects/products',
      { data },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
        },
      },
    );

    console.log(saveProduct);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Product</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control {...register('name')} type="text" placeholder="Product Name" />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              {...register('description')}
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Image.jpg"
              {...register('url_image')}
            />
          </Form.Group>

          <Form.Group controlId="formContent">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Price" {...register('price')} />
          </Form.Group>
          <Form.Group controlId="formContent">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Quantity"
              {...register('quantity')}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit" block>
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalProduct;
