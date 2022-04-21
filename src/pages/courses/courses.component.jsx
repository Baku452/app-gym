import React, { useContext, useEffect, useState } from 'react';
import { CardCourse } from 'components/molecules';
import styles from './courses.module.scss';
import { Button, Alert, Spinner } from 'react-bootstrap';
import Tabs from '../../../node_modules/react-bootstrap/esm/Tabs';
import { Tab } from 'bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Calendar from 'components/organisms/calendar/calendar.component';
import { useNavigate } from 'react-router-dom';

import Repository from '../../repositories/factory/RepositoryFactory';
import Context from 'context/UserContext';
import FormContext from 'context/FormContext';
//images
const playIcon = '../assets/icons/instructor/play.svg';

const Courses = () => {
  const BusinessObjectRepository = Repository.get('businessObject');
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const { roles, idUser } = useContext(Context);
  const { setCourseC } = useContext(FormContext);
  const [isEdit, setIsEdit] = useState(false);

  const fetchCourses = async () => {
    setShowLoading(true)
    try {
      const filter = { business_object_type: 'course' };
      if ( roles == 'instructor') filter.userData = { user: idUser };

      const { data } = await BusinessObjectRepository.get( filter );
      setCourses(data);
      setShowLoading(false)
    } catch (err) {
      console.error('Error get blogs: ', err);
    }
  };

  useEffect(() => {
    fetchCourses();
    if( roles == 'user') setIsEdit(false)
    else setIsEdit(true)
  }, []);

  const showCourseForm = () => {
    setCourseC({});
    navigate('/dashboard/courses/new');
  };

  return (
    <div className={styles.principal}>
      <div className="w-100">
        <Tabs defaultActiveKey="saved" id="uncontrolled-tab-example" className="mb-3">
          <Tab
            className="custom-tab position-relative"
            eventKey="saved"
            title="Recorded Classes">
            <div className={styles.principal__body}>
              <div className='position-relative w-75'>
                { showLoading
                  ?
                    <div className='d-flex justify-content-center'><Spinner  animation="border" /></div>
                  :
                    <>
                      { isEdit &&
                        <Button 
                          onClick={showCourseForm} 
                          variant="outline-orange" 
                          className={styles.principal__button}
                          size="sm">
                          New Course
                        </Button>
                      }

                      {
                        courses.length
                        ?
                          <>
                            <div className={styles.principal__courses}>
                              {
                                courses.map((item, index) => (
                                  <CardCourse
                                    key={index}
                                    course={item}
                                    fetchCourses={fetchCourses}
                                    isEdit={isEdit}
                                  />
                                ))
                              }
                            </div>
                          </>
                        :
                          <Alert variant="success">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <p>Content will be uploaded soon</p>
                          </Alert>
                      }
                    </>
                  }
              </div>
              <div className={styles.principal__courses_best}>
                <div className={styles.principal__improvement}>
                  <span>Best Classes</span>
                </div>
                <div className={styles.principal__courses_best__content}>
                  <div className={styles.courses}>
                    <div className={styles.course}>
                      <div className={styles.course__preview}>
                        <img
                          className={styles.course__image}
                          src="https://picsum.photos/278/156"
                          alt="course gym"
                        />
                        <div className={styles.course__play}>
                          <img className="w-100" src={playIcon} alt="course gym" />
                        </div>
                      </div>
                      <div className={styles.course__description}>
                        <span className={styles.course__title}>
                          Donec velit neque, auctor sit amet
                        </span>
                        {/* <span className={styles.course__instructor}>
                          Juan Quino Areche Isra
                        </span> */}
                        <span className={styles.course__date}>18 Enero 2022</span>
                        <span className={styles.starts}>
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                        </span>
                      </div>
                    </div>
                    <div className={styles.course}>
                      <div className={styles.course__preview}>
                        <img
                          className={styles.course__image}
                          src="https://picsum.photos/277/155"
                          alt="course gym"
                        />
                        <div className={styles.course__play}>
                          <img className="w-100" src={playIcon} alt="course gym" />
                        </div>
                      </div>
                      <div className={styles.course__description}>
                        <span className={styles.course__title}>
                          Eget tincidunt nibh pulvinar a
                        </span>
                        {/* <span className={styles.course__instructor}>
                          Juan Quino Areche Isra
                        </span> */}
                        <span className={styles.course__date}>15 Febrero 2022</span>
                        <span className={styles.starts}>
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                        </span>
                      </div>
                    </div>
                    <div className={styles.course}>
                      <div className={styles.course__preview}>
                        <img
                          className={styles.course__image}
                          src="https://picsum.photos/279/157"
                          alt="course gym"
                        />
                        <div className={styles.course__play}>
                          <img className="w-100" src={playIcon} alt="course gym" />
                        </div>
                      </div>
                      <div className={styles.course__description}>
                        <span className={styles.course__title}>
                          Eget tincidunt nibh pulvinar a
                        </span>
                        {/* <span className={styles.course__instructor}>
                          Juan Quino Areche Isra
                        </span> */}
                        <span className={styles.course__date}>12 Marzo 2022</span>
                        <span className={styles.starts}>
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                        </span>
                      </div>
                    </div>
                    <div className={styles.course}>
                      <div className={styles.course__preview}>
                        <img
                          className={styles.course__image}
                          src="https://picsum.photos/280/158"
                          alt="course gym"
                        />
                        <div className={styles.course__play}>
                          <img className="w-100" src={playIcon} alt="course gym" />
                        </div>
                      </div>
                      <div className={styles.course__description}>
                        <span className={styles.course__title}>
                          Lacinia eget consectetur sed
                        </span>
                        {/* <span className={styles.course__instructor}>
                          Juan Quino Areche Isra
                        </span> */}
                        <span className={styles.course__date}>20 Marzo 2022</span>
                        <span className={styles.starts}>
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStarFill fill="#ff8906" />
                          <BsStar fill="#ff8906" />
                        </span>
                      </div>
                    </div>
                    <div className={styles.course}>
                      <div className={styles.course__preview}>
                        <img
                          className={styles.course__image}
                          src="https://picsum.photos/276/154"
                          alt="course gym"
                        />
                        <div className={styles.course__play}>
                          <img className="w-100" src={playIcon} alt="course gym" />
                        </div>
                      </div>
                      <div className={styles.course__description}>
                        <span className={styles.course__title}>
                          Vivamus magna justo, lacinia eget
                        </span>
                        {/* <span className={styles.course__instructor}>
                          Juan Quino Areche Isra
                        </span> */}
                        <span className={styles.course__date}>01 Abril 2022</span>
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
          </Tab>
          <Tab eventKey="direct" title="Direct Clases">
            <div>
              <div className={styles.principal__scheduler}>
                <Calendar />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default React.memo(Courses);
