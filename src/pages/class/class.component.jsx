import React from 'react';
import { CardCourse } from 'components/molecules';
import styles from './class.module.scss';
import { Button } from 'react-bootstrap';
import Tabs from '../../../node_modules/react-bootstrap/esm/Tabs';
import { Tab } from 'bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';

//images
const playIcon = '../assets/icons/instructor/play.svg';

const Class = () => {
  return (
    <div className={styles.principal}>
      <div className="test">
        <Tabs defaultActiveKey="saved" id="uncontrolled-tab-example" className="mb-3">
          <Tab className="custom-tab" eventKey="saved" title="Clases Grabadas">
            <div className={styles.principal__body}>
              <div className={styles.principal__courses}>
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
              </div>
            </div>
          </Tab>
          <Tab eventKey="direct" title="Clases Directo">
            <div className={styles.principal__body}>
              <div className={styles.principal__courses}>
                <CardCourse />
                <CardCourse />
                <CardCourse />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <div className={styles.principal__courses_best}>
        <div className={styles.principal__improvement}>
          <span>Mejores Clases</span>
          <Button size="sm" style={{ color: '#fff', cursor: 'pointer' }} variant="orange">
            Ver todo
          </Button>
        </div>
        <div className={styles.principal__courses}>
          <div className={styles.courses}>
            <div className={styles.course}>
              <div className={styles.course__preview}>
                <img
                  className={styles.course__image}
                  src="https://picsum.photos/278/156"
                  alt="course gym"
                />
                <div className={styles.course__play}>
                  <img class="w-100" src={playIcon} alt="course gym" />
                </div>
              </div>
              <div className={styles.course__description}>
                <span className={styles.course__title}>
                  Pectorales de Acero con pesas
                </span>
                <span className={styles.course__instructor}>Juan Quino Areche Isra</span>
                <span className={styles.course__date}>20 Diciembre 2021</span>
                <span className={styles.starts}>
                  <BsStarFill fill="#ff8906" />
                  <BsStarFill fill="#ff8906" />
                  <BsStarFill fill="#ff8906" />
                  <BsStar fill="#ff8906" />
                  <BsStar fill="#ff8906" />
                </span>
              </div>
            </div>
            <div className={styles.course}>
              <div className={styles.course__preview}>
                <img
                  className={styles.course__image}
                  src="https://picsum.photos/278/156"
                  alt="course gym"
                />
                <div className={styles.course__play}>
                  <img class="w-100" src={playIcon} alt="course gym" />
                </div>
              </div>
              <div className={styles.course__description}>
                <span className={styles.course__title}>
                  Pectorales de Acero con pesas
                </span>
                <span className={styles.course__instructor}>Juan Quino Areche Isra</span>
                <span className={styles.course__date}>20 Diciembre 2021</span>
                <span className={styles.starts}>
                  <BsStarFill fill="#ff8906" />
                  <BsStarFill fill="#ff8906" />
                  <BsStarFill fill="#ff8906" />
                  <BsStar fill="#ff8906" />
                  <BsStar fill="#ff8906" />
                </span>
              </div>
            </div>
            <div className={styles.course}>
              <div className={styles.course__preview}>
                <img
                  className={styles.course__image}
                  src="https://picsum.photos/278/156"
                  alt="course gym"
                />
                <div className={styles.course__play}>
                  <img class="w-100" src={playIcon} alt="course gym" />
                </div>
              </div>
              <div className={styles.course__description}>
                <span className={styles.course__title}>
                  Pectorales de Acero con pesas
                </span>
                <span className={styles.course__instructor}>Juan Quino Areche Isra</span>
                <span className={styles.course__date}>20 Diciembre 2021</span>
                <span className={styles.starts}>
                  <BsStarFill fill="#ff8906" />
                  <BsStarFill fill="#ff8906" />
                  <BsStarFill fill="#ff8906" />
                  <BsStar fill="#ff8906" />
                  <BsStar fill="#ff8906" />
                </span>
              </div>
            </div>
            <div className={styles.course}>
              <div className={styles.course__preview}>
                <img
                  className={styles.course__image}
                  src="https://picsum.photos/278/156"
                  alt="course gym"
                />
                <div className={styles.course__play}>
                  <img class="w-100" src={playIcon} alt="course gym" />
                </div>
              </div>
              <div className={styles.course__description}>
                <span className={styles.course__title}>
                  Pectorales de Acero con pesas
                </span>
                <span className={styles.course__instructor}>Juan Quino Areche Isra</span>
                <span className={styles.course__date}>20 Diciembre 2021</span>
                <span className={styles.starts}>
                  <BsStarFill fill="#ff8906" />
                  <BsStarFill fill="#ff8906" />
                  <BsStarFill fill="#ff8906" />
                  <BsStar fill="#ff8906" />
                  <BsStar fill="#ff8906" />
                </span>
              </div>
            </div>
            <div className={styles.course}>
              <div className={styles.course__preview}>
                <img
                  className={styles.course__image}
                  src="https://picsum.photos/278/156"
                  alt="course gym"
                />
                <div className={styles.course__play}>
                  <img class="w-100" src={playIcon} alt="course gym" />
                </div>
              </div>
              <div className={styles.course__description}>
                <span className={styles.course__title}>
                  Pectorales de Acero con pesas
                </span>
                <span className={styles.course__instructor}>Juan Quino Areche Isra</span>
                <span className={styles.course__date}>20 Diciembre 2021</span>
                <span className={styles.starts}>
                  <BsStarFill fill="#ff8906" />
                  <BsStarFill fill="#ff8906" />
                  <BsStarFill fill="#ff8906" />
                  <BsStar fill="#ff8906" />
                  <BsStar fill="#ff8906" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Class);
