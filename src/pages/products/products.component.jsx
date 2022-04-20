import React, { useState, useEffect } from 'react';
import styles from './products.module.scss';
import { Button, Row, Col, Table } from 'react-bootstrap';
import ModalProduct from 'components/molecules/modalProduct/modalProduct';
import Repository from '../../repositories/factory/RepositoryFactory';

const Products = () => {
  const BusinessObjectRepository = Repository.get('product');
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await BusinessObjectRepository.get({
          business_object_type: 'product',
        });
        setProducts(data);
      } catch (err) {
        console.error('Error get blogs: ', err);
      }
    };
    fetchProducts();
  }, []);
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
            {products.length > 0 ? (
              <>
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
                  {products.map(item => (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </>
            ) : (
              <h3 className="text-center py-5">There´s any product loaded yet</h3>
            )}
          </Table>
        </Row>
        <div className={styles.principal__body__blogs}></div>
      </div>
      <ModalProduct show={show} setShow={setShow} />
    </div>
  );
};
export default React.memo(Products);
