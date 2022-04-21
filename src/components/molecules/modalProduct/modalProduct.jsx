import { Form, Modal, Button, Row, Col } from 'react-bootstrap';

import Repository from '../../../repositories/factory/RepositoryFactory';
import { fetchProducts } from 'services/products';

const ModalProduct = ({ product, setProduct, show, setShow, isupdate, setProducts }) => {
  const UploadRepository = Repository.get('upload');
  const ProductRepository = Repository.get('product');

  const handleClose = () => setShow(false);

  const handleChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const formProduct = new FormData(event.target);
    const formDataEntries = Object.fromEntries(formProduct.entries());

    // Save Cloudinary files
    if (formDataEntries.image.size !== 0) {
      const formData = new FormData();
      formData.append('singleFile', formDataEntries.image);
      formData.append('target', 'product');
      const { data } = await UploadRepository.uploadFile(formData);
      formDataEntries.url_image = await data.secure_url;
    }
    formDataEntries.business_object_type = 'product';
    formDataEntries.id = product._id;

    // Save Product
    if (!isupdate) {
      await ProductRepository.store(formDataEntries);
    } else {
      await ProductRepository.update(formDataEntries);
    }
    const newProducts = await fetchProducts();
    setProducts(newProducts);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Product</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="px-5">
          <Form.Group controlId="formContent" className="mt-4">
            <Form.Control
              name="name"
              type="text"
              onChange={handleChange}
              value={product?.name}
              placeholder="Product Name"
            />
          </Form.Group>

          <Form.Group controlId="formContent" className="mt-4">
            <Form.Control
              type="text"
              onChange={handleChange}
              placeholder="Description"
              value={product?.description}
              name="description"
            />
          </Form.Group>

          <Form.Group controlId="formImage" className="mt-4">
            <Form.Control type="file" placeholder="Image.jpg" name="image" />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="formContent" className="mt-4">
                <Form.Control
                  type="number"
                  default={0.0}
                  step=".01"
                  placeholder="$/. Price"
                  onChange={handleChange}
                  value={product?.price}
                  name="price"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formContent" className="mt-4">
                <Form.Control
                  type="number"
                  placeholder="Quantity"
                  onChange={handleChange}
                  value={product?.quantity}
                  name="quantity"
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" block>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalProduct;
