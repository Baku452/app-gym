import React, { useContext, useEffect, useState } from 'react';
import { CardCourse, CardBlog } from 'components/molecules';
import styles from './resume.module.scss';
import { Button, Alert, Spinner } from 'react-bootstrap';
import Repository from '../../repositories/factory/RepositoryFactory';
import { useNavigate } from '../../../node_modules/react-router/index';
import Context from 'context/UserContext';

const Resume = () => {
  const BusinessObjectRepository = Repository.get('businessObject');
  const navigate = useNavigate();
  const { roles, idUser } = useContext(Context);
  const [courses, setCourses] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [showCoursesLoading, setShowCoursesLoading] = useState(true);
  const [showBlogsLoading, setShowBlogsLoading] = useState(true);

  const fetchCourses = async () => {
    setShowCoursesLoading(true)
    try {
      const filter = { business_object_type: 'course', limit:3 };
      if ( roles == 'instructor') filter.userData = { user: idUser };

      const { data } = await BusinessObjectRepository.get( filter );
      setCourses(data);
      setShowCoursesLoading(false)
    } catch (err) {
      console.error('Error get blogs: ', err);
    }
  };

  const fetchBlogs = async () => {
    setShowBlogsLoading(true);
    try {
      const filter = { business_object_type: 'blog', limit:2 };
      if ( roles == 'instructor') filter.userData = { user: idUser };

      const { data } = await BusinessObjectRepository.get( filter );
      setBlogs(data);
      setShowBlogsLoading(false);
    } catch (err) {
      console.error('Error get blogs: ', err);
    }
  };


  useEffect(() => {
    fetchCourses();
    fetchBlogs();
  }, []);

  const toCourses = () => {
    navigate('/dashboard/courses');
  };

  const toBlogs = () => {
    navigate('/dashboard/blogs');
  };

  return (
    <div className={styles.principal}>
      <div className={styles.principal__body}>
        <h2 className={styles.title}>Courses posted</h2>
        { showCoursesLoading
          ?
            <div className='d-flex justify-content-center'><Spinner  animation="border" /></div>
          :
            courses.length
            ?
              <>
                <div className={styles.principal__body__courses}>
                  {
                    courses.map((item, index) => (
                      <CardCourse
                        key={index}
                        course={item}
                        fetchCourses={fetchCourses}
                        isEdit={false}
                      />
                    ))
                  }
                </div>
                <div className="text-center">
                  <Button size="sm" onClick={ toBlogs } variant="outline-orange">
                    See more
                  </Button>
                </div>
              </>
            :
              <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>Content will be uploaded soon</p>
              </Alert>
          }
        <h2 className={styles.title}>Blogs posted</h2>
          { showBlogsLoading 
            ? 
              <div className='d-flex justify-content-center'><Spinner  animation="border" /></div>
            : 
              blogs.length 
              ?
              <div className={styles.principal__body__blogs}>
                { 
                  blogs.map((item, index) => (
                    <CardBlog
                      key={index}
                      blog={item}
                      fetchBlogs={fetchBlogs}
                      isEdit={false}
                    />
                  )) 
                }
              </div>
              :
              <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>Content will be uploaded soon</p>
              </Alert>
          }
        <div className="text-center">
          <Button onClick={ toBlogs } size="sm" variant="outline-orange">
            See more
          </Button>
        </div>
      </div>
      <div className={styles.principal__profiles}>
        {/* <div className={styles.principal__instructor}>
          <div className={styles.profile}>
            <div className={styles.profile__photo}>
              <img
                src={'../assets/images/instructor/carla.jpg'}
                alt="profile instructor"
              />
            </div>
            <div className={styles.profile__name}>
              <span>Carla Atena</span>
            </div>
            <div className={styles.profile__profession}>
              <span>Personal Trainer</span>
            </div>
          </div>
          <div className={styles.resumen}>
            <div className={styles.row}>
              <div className={styles.card}>
                <div className={styles.card__count}>
                  <span>30</span>
                </div>
                <div className={styles.card__title}>
                  <span>Clases</span>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card__count}>
                  <span>120</span>
                </div>
                <div className={styles.card__title}>
                  <span>Inscritos</span>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card__count}>
                  <span>35</span>
                </div>
                <div className={styles.card__title}>
                  <span>Blogs</span>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card__count}>
                  <span>500</span>
                </div>
                <div className={styles.card__title}>
                  <span>Comentarios</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className={styles.principal__improvement}>
          <span>Best Instructors</span>
        </div>
        <div className={styles.principal__instructors}>
          <div className={styles.instructors}>
            <div className={styles.instructor}>
              <div className={styles.instructor__profile}>
                <img src={'../assets/images/instructor/instructor1.jpg'} alt="" />
                <div className={styles.instructor__description}>
                  <span>Pedro Gonzales</span>
                  <span>Nutritionist</span>
                </div>
              </div>
              <div className={styles.instructor__date}>
                <span>20 Diciembre 2021</span>
              </div>
            </div>
            <div className={styles.instructor}>
              <div className={styles.instructor__profile}>
                <img src={'../assets/images/instructor/instructor2.jpg'} alt="" />
                <div className={styles.instructor__description}>
                  <span>Juan Carma</span>
                  <span>Fitness Trainer</span>
                </div>
              </div>
              <div className={styles.instructor__date}>
                <span>20 Diciembre 2021</span>
              </div>
            </div>
            <div className={styles.instructor}>
              <div className={styles.instructor__profile}>
                <img src={'../assets/images/instructor/instructor3.jpg'} alt="" />
                <div className={styles.instructor__description}>
                  <span>Carla Salas</span>
                  <span>Supplementation</span>
                </div>
              </div>
              <div className={styles.instructor__date}>
                <span>20 Diciembre 2021</span>
              </div>
            </div>
            <div className={styles.instructor}>
              <div className={styles.instructor__profile}>
                <img src={'../assets/images/instructor/instructor4.jpg'} alt="" />
                <div className={styles.instructor__description}>
                  <span>Mary Aguilar</span>
                  <span>Nutritionist</span>
                </div>
              </div>
              <div className={styles.instructor__date}>
                <span>20 Diciembre 2021</span>
              </div>
            </div>
            <div className={styles.instructor}>
              <div className={styles.instructor__profile}>
                <img src={'../assets/images/instructor/instructor5.jpg'} alt="" />
                <div className={styles.instructor__description}>
                  <span>Juan Manrrique</span>
                  <span>Nutritionist</span>
                </div>
              </div>
              <div className={styles.instructor__date}>
                <span>20 Diciembre 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Resume);
