import {
  Button,
  OverlayTrigger,
  Popover,
  Container,
  Nav,
  Navbar,
  Row,
  Col,
} from 'react-bootstrap';
import styles from './web-header.module.scss';
import { Link } from 'react-router-dom';
import { LinkContainer } from '../../../../node_modules/react-router-bootstrap/index';
import { AiOutlineShopping } from 'react-icons/ai';
import CartContext from 'context/CartContext';
import CardCart from 'components/molecules/card-cart/index';
import { useContext } from 'react';
import axios from 'axios';

const WebHeader = () => {
  const { items: products, setItems } = useContext(CartContext);

  const sendDataCheckout = async () => {
    const line_items = products.map(item => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: item.price * 100, // amount is in cents
          product_data: {
            name: item.name,
            description: item.description,
            images: [item.url_image],
          },
        },
      };
    });
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/payment/create-checkout-session`,
      { line_items },
    );
    console.log(res);
    setItems([]);
    window.location.replace(await res.data.stripeURL);
  };

  return (
    <Navbar sticky="top" bg="dark" expand="lg" className={styles.header}>
      <Container className="justify-content-between">
        <div>
          <Navbar.Brand>
            <Link to="/">
              <img alt="logo" src="/icons/LogoTrackG.png"></img>
            </Link>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <LinkContainer to="/">
                <Nav.Link className={styles.header__link}>Home</Nav.Link>
              </LinkContainer>
              {/* <Nav.Link className={styles.header__link} href="#link">
                About Us
              </Nav.Link>
              <Nav.Link className={styles.header__link} href="#link">
                Classes
              </Nav.Link> */}
              <LinkContainer to="/dashboard/blogs">
                <Nav.Link className={styles.header__link}>Blog</Nav.Link>
              </LinkContainer>
              <Nav.Link>
                <Link className={styles.header__link} to="/shop">
                  Shop
                </Link>
              </Nav.Link>

              <OverlayTrigger
                trigger="click"
                key="bottom"
                placement="bottom"
                overlay={
                  <Popover id={`popover-positioned-bottom`}>
                    <Popover.Header as="h3">{`Cart`}</Popover.Header>
                    <Popover.Body>
                      {products.length > 0 ? (
                        <>
                          {products.map(item => (
                            <CardCart item={item} />
                          ))}
                          <Button className="w-100" onClick={() => sendDataCheckout()}>
                            Checkout
                          </Button>
                        </>
                      ) : (
                        <p>No products selected</p>
                      )}
                    </Popover.Body>
                  </Popover>
                }>
                <Nav.Link className={styles.header__link}>
                  <AiOutlineShopping className="me-2" />
                  Cart {products.length > 0 ? products.length : null}
                </Nav.Link>
              </OverlayTrigger>
              <Link to="/login">
                <Button className="me-4">Enter to gym</Button>
              </Link>
              <Link to="/sign-up">
                <Button variant="secondary">Sign-Up</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export { WebHeader };
