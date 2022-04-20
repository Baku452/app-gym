import { Form, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import React from 'react';
import Repository from '../../../repositories/factory/RepositoryFactory';

const ModalProduct = ({ show, setShow }) => {
  const UploadRepository = Repository.get('upload');
  const ProductRepository = Repository.get('businessObject');

  const handleClose = () => setShow(false);

  const handleSubmit = async event => {
    event.preventDefault();
    const formProduct = new FormData(event.target);
    const formDataEntries = Object.fromEntries(formProduct.entries());
    console.log(formDataEntries.image);
    // Save Cloudinary files
    const formData = new FormData();
    formData.append('singleFile', formDataEntries.image);
    formData.append('target', 'product');
    const { data } = await UploadRepository.uploadFile(formData);
    // Save Product
    formDataEntries.url_image = await data.secure_url;
    formDataEntries.business_object_type = 'product';
    console.log(formDataEntries);
    await ProductRepository.store(formDataEntries);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Product</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Product Name" />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" name="description" />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" placeholder="Image.jpg" name="image" />
          </Form.Group>

          <Form.Group controlId="formContent">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Price" name="price" />
          </Form.Group>
          <Form.Group controlId="formContent">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" placeholder="Quantity" name="quantity" />
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
