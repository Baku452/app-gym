import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Repository from 'repositories/factory/RepositoryFactory';
import { Elements } from '@stripe/react-stripe-js';
import ProductShop from 'components/molecules/product-shop/index';

const Shop = () => {
  const BusinessObjectRepository = Repository.get('product');
  const [products, setProducts] = useState([]);

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
  }, [BusinessObjectRepository]);
  return (
    <>
      <Container>
        <Row className="p-5">
          <Col>
            <h1 className="fw-bold">Shop</h1>
          </Col>
        </Row>
        <Row>
          {/* <Col lg={3}>
            <h2>Filter</h2>
          </Col> */}
          <Col>
            <Row>
              {products.length > 0
                ? products.map(item => <ProductShop item={item} />)
                : null}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shop;
