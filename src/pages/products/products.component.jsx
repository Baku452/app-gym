import React, { useState } from 'react';
import styles from './products.module.scss';
import { Button, Row, Col, Table } from 'react-bootstrap';
import ModalProduct from 'components/molecules/modalProduct/modalProduct';

const Products = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.principal}>
      <div className={styles.principal__body}>
        <Row className="mb-5">
          <Col md={10}>
            <h2 className={styles.title}>List of Products</h2>
          </Col>
          <Col md={2}>
            <Button onClick={handleShow} variant="outline-primary" size="md">
              Create Product
            </Button>
          </Col>
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <div className={styles.principal__body__blogs}></div>
      </div>
      <ModalProduct show={show} setShow={setShow} />
    </div>
  );
};
export default React.memo(Products);
