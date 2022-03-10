import styles from './web-home.module.scss';
import { WebBanner } from 'components/index';
import {
  CardHome,
  MembershipCard,
  BlogCardHome,
  NewsletterForm,
} from 'components/molecules/index';
import { ShapeDividerTop, ShapeDividerTopWhite } from 'components/atoms/index';
import { Container, Col, Row } from 'react-bootstrap';
import { services, membership, postsBlog } from 'data/index.js';

const WebHome = () => {
  return (
    <>
      <WebBanner image={'img/HomeBanner.jpg'} />
      <div className={styles.containerHome}>
        <Container>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis,
                nisi totam minus cupiditate modi maiores esse aliquam? A distinctio
                obcaecati, placeat perferendis inventore consequatur neque pariatur!
                Reiciendis, placeat consequuntur.
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
          <ShapeDividerTop />
          <Row className="p-5">
            <h2 className="pb-5">Membership</h2>
            {membership.map(item => (
              <MembershipCard item={item} />
            ))}
          </Row>
        </Container>
      </div>
      <div className={styles.containerHome}>
        <Container>
          <ShapeDividerTopWhite />
          <Row className="p-5 mb-5" />
          <Row className="mb-5" />
          <Row>
            <Col md={12} lg={4}>
              <h2 className="pt-5">Our Blog</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
                necessitatibus porro corrupti sapiente? Ipsum quia quas placeat culpa
                dolor atque omnis reprehenderit temporibus mollitia nostrum, id deleniti
                molestiae. Veritatis, aliquid.
              </p>
              <h3>Read All blogs</h3>
            </Col>
            <Col md={12} lg={8}>
              <Row>
                {postsBlog.map(item => (
                  <BlogCardHome item={item} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        <ShapeDividerTopWhite />
      </div>

      <Container>
        <Row className="justify-content-center align-items-center p-5">
          <Col className="align-self-center" md={12} lg={5}>
            <h2>Newsletter</h2>
            <p>
              Join our amazing community! Stay informed of our latest discounts and news
            </p>
          </Col>
          <Col className="p-5" md={12} lg>
            <NewsletterForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WebHome;
