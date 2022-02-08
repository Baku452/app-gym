import { LayoutWeb } from 'layout/index.js';
import styles from './web-home.module.scss';
import { WebBanner } from 'components/index';
import { Container, Col, Row } from 'react-bootstrap';
import { services } from '../../data/home/services';
const features = [
  {
    id: 1,
    title: 'Playlist',
    img: 'img/trainings/ourTrainings.jpg',
  },
  {
    id: 2,
    title: 'Class',
    img: 'img/trainings/ourTrainings_2.jpg',
  },
  {
    id: 3,
    title: 'Blog',
    img: 'img/trainings/ourTrainings_3.jpg',
  },
  {
    id: 4,
    title: 'Personal',
    img: 'img/trainings/ourTrainings_4.jpg',
  },
  {
    id: 5,
    title: 'Live Sessions',
    img: 'img/trainings/ourTrainings_4.jpg',
  },
];

const pricing = [
  {
    id: 1,
    title: 'Free Plan',
    content:
      '24/7 access to Free %nbsp Content Live Master Classes Hour Personal Trainer',
  },
  {
    id: 2,
    title: 'Month Plan',
    content:
      '24/7 access to Free %nbsp Content Live Master Classes Hour Personal Trainer',
  },
  {
    id: 3,
    title: 'Year Plan',
    content:
      '24/7 access to Free %nbsp Content Live Master Classes Hour Personal Trainer',
  },
];

const WebHome = () => {
  return (
    <>
      <LayoutWeb>
        <WebBanner image={'img/HomeBanner.jpg'} />
        <div className={styles.containerHome}>
          <Container>
            <Row className="p-5">
              <h2 className="text-center">Our Trainings</h2>
            </Row>
            <Row>
              {services.map(item => (
                <Col md lg={4} className={`position-relative ${styles.card}`}>
                  <div className={styles.card__content}>
                    <h3>{item.title}</h3>
                  </div>
                  <img alt={item.title} src={item.img} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <Container>
          <Row className="py-5">
            <Col lg={4}>
              <img alt="training" src="img/trainings/ourTrainings_4.jpg"></img>
            </Col>
            <Col lg={8} className={`text-center ${styles.joinUs}`}>
              <h2>¿Why Join Us?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis,
                nisi totam minus cupiditate modi maiores esse aliquam? A distinctio
                obcaecati, placeat perferendis inventore consequatur neque pariatur!
                Reiciendis, placeat consequuntur.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="p-5">
            <h2 className="text-center">Our Features</h2>
          </Row>
          <Row className="justify-content-around">
            {features.map(item => (
              <Col className={styles.features__card}>
                <div className={styles.features__card__content}>
                  <h3>{item.title}</h3>
                </div>
                <img src={item.img}></img>
              </Col>
            ))}
          </Row>
        </Container>
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
        </Container>
      </LayoutWeb>
    </>
  );
};

export default WebHome;
