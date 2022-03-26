import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Sidebar, Header } from 'components/organisms';
// import styles from './dashboard-admin.module.scss';
import useUser from 'hooks/useUser';

export const DashboardAdmin = () => {
  const navigate = useNavigate();
  const { isLogged } = useUser();
  useEffect(() => {
    if (!isLogged) navigate('/');
  }, [isLogged, navigate]);
  return (
    <Row>
      <Col lg={2}>
        <Sidebar />
      </Col>
      <Col lg={10}>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </Col>
    </Row>
  );
};
