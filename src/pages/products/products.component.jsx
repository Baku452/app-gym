import React, { useState, useEffect } from 'react';
import styles from './products.module.scss';
import { Button, Row, Col, Table } from 'react-bootstrap';
import ModalProduct from 'components/molecules/modalProduct/modalProduct';
import Repository from '../../repositories/factory/RepositoryFactory';
import { fetchProducts } from 'services/products';

import { BsTrashFill, BsPencilFill } from 'react-icons/bs';
import Swal from 'sweetalert2';

const Products = () => {
  const ProductsRepository = Repository.get('product');
  const BusinessObjectRepository = Repository.get('businessObject');

  const [show, setShow] = useState(false);
  const [editProduct, setEditProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [isUpdate, setIsupdate] = useState(false);

  const handleShow = () => {
    setEditProduct();
    setIsupdate(false);
    setShow(true);
  };

  const handleEditProduct = item => {
    setEditProduct(item);
    setIsupdate(true);
    setShow(true);
  };

  const deleteProduct = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async result => {
      if (result.isConfirmed) {
        await BusinessObjectRepository.delete(id);
        const newProducts = await fetchProducts();
        setProducts(newProducts);
      }
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await ProductsRepository.get({
          business_object_type: 'product',
        });
        setProducts(data);
      } catch (err) {
        console.error('Error get products: ', err);
      }
    };
    fetchProducts();
  }, [ProductsRepository]);
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
                    <th>Action</th>
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
                      <td>
                        Edit
                        <BsPencilFill
                          onClick={() => handleEditProduct(item)}
                          className={styles.cursorPointer + ' ms-2 me-3'}
                        />
                        Delete
                        <BsTrashFill
                          onClick={() => deleteProduct(item._id)}
                          className={styles.cursorPointer + ' ms-2'}
                        />
                      </td>
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
      <ModalProduct
        product={editProduct}
        setProduct={setEditProduct}
        show={show}
        setShow={setShow}
        isupdate={isUpdate}
        setProducts={setProducts}
      />
    </div>
  );
};
export default React.memo(Products);
