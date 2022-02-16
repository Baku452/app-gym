import { LayoutWeb } from 'layout/index.js';
import styles from './web-home.module.scss';
import { WebBanner } from 'components/index';
import { CardHome, MembershipCard } from 'components/molecules/index';
import { Container, Col, Row } from 'react-bootstrap';
import { services, membership } from 'data/home/index.js';

const WebHome = () => {
  return (
    <>
      <LayoutWeb>
        <WebBanner image={'img/HomeBanner.jpg'} />
        <div className={styles.containerHome}>
          <Container>
            {/* <Row className="p-5">
              <h2 className="text-center text-white">Our Trainings</h2>
            </Row> */}
            <Row>
              {services.map(item => (
                <CardHome item={item} />
              ))}
            </Row>
          </Container>
        </div>
        <div className={styles.containerHome}>
          <Container>
            <Row className="py-5">
              <Col lg={8} className={`${styles.joinUs} p-5`}>
                <h2 className="pb-5">Our Service</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  officiis, nisi totam minus cupiditate modi maiores esse aliquam? A
                  distinctio obcaecati, placeat perferendis inventore consequatur neque
                  pariatur! Reiciendis, placeat consequuntur.
                </p>
              </Col>
              <Col lg={4}>
                <img alt="training" src="img/trainings/ourTrainings_4.jpg"></img>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={'position-relative py-5'}>
          <Container>
            <div className={styles.divider}>
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path
                  d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                  className={styles.divider__shapeFill}></path>
              </svg>
            </div>
            <Row className="p-5">
              <h2 className="pb-5">Membership</h2>
              {membership.map(item => (
                <MembershipCard item={item} />
              ))}
            </Row>
          </Container>
        </div>
        {/*
        <Container>
        <Row className="p-5">
            <h2 className="text-center">Our Pricings</h2>
          </Row>
          <Row className="justify-content-center">
            {pricing.map(item => (
              <Col lg={3}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Col>
            ))}
          </Row>
        </Container> */}
      </LayoutWeb>
    </>
  );
};

export default WebHome;
