import React, { useEffect, useState, useContext } from 'react';
import { CardBlog } from 'components/molecules';
import { Button, Image, Spinner, Alert } from 'react-bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Row from '../../../node_modules/react-bootstrap/esm/Row';
import Col from '../../../node_modules/react-bootstrap/esm/Col';

import Repository from '../../repositories/factory/RepositoryFactory';

import styles from './blogs.module.scss';
import { useNavigate } from '../../../node_modules/react-router-dom/index';
import FormContext from 'context/FormContext';
import Context from 'context/UserContext';


const Blogs = () => {
  const BusinessObjectRepository = Repository.get('businessObject');
  const navigate = useNavigate();
  const search = '../../assets/icons/instructor/search.svg';
  const { roles, idUser } = useContext(Context);
  const [blogs, setBlogs] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const { setBlogC } = useContext(FormContext);

  // localStorage.setItem('tours', JSON.stringify(dataTour));

  const fetchBlogs = async () => {
    setShowLoading(true);
    try {
      const filter = { business_object_type: 'blog' };
      if ( roles == 'instructor') filter.userData = { user: idUser };

      const { data } = await BusinessObjectRepository.get( filter );
      setBlogs(data);
      setShowLoading(false);
    } catch (err) {
      console.error('Error get blogs: ', err);
    }
  };

  useEffect(() => {
    fetchBlogs();
    if( roles == 'user') setIsEdit(false)
    else setIsEdit(true)
  }, []);

  const showBlogForm = () => {
    setBlogC({});
    navigate('/dashboard/blogs/new');
  };

  return (
    <div className={styles.principal}>
      <div className={styles.principal__body}>
        <Row className="mb-2">
          <Col md={10}>
            <h2 className={styles.title}>Posted Blogs</h2>
            <div className={styles.search}>
              <input
                className={styles.search__input}
                type="text"
                placeholder="Search in TrackG"
              />
              <Image style={{ width: '15px' }} src={search} alt="search in TrackG" />
            </div>
          </Col>
          <Col md={2}>
            { isEdit && 
              <Button onClick={showBlogForm} variant="outline-orange" size="sm">
                New Blog
              </Button>
            }
          </Col>
        </Row>
          { showLoading 
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
                      isEdit={isEdit}
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
      </div>
      <div className={styles.principal__blogs_best}>
        <div className={styles.principal__improvement}>
          <span>Best Blogs</span>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Curabitur aliquet quam id dui </span>
              {/* <span className={styles.blog__instructor}>Juan Quino Areche Isra</span> */}
              <span className={styles.blog__date}>12 Enero 2022</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/279/157"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Eget tincidunt nibh pulvinar a</span>
              {/* <span className={styles.blog__instructor}>Juan Quino Areche Isra</span> */}
              <span className={styles.blog__date}>19 Enero 2022</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/279/157"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Donec rutrum congue leo eget</span>
              {/* <span className={styles.blog__instructor}>Juan Quino Areche Isra</span> */}
              <span className={styles.blog__date}>15 Febrero 2022</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/280/157"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Cras ultricies ligula sed magna</span>
              {/* <span className={styles.blog__instructor}>Juan Quino Areche Isra</span> */}
              <span className={styles.blog__date}>28 Marzo 2022</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__preview}>
              <img
                className={styles.blog__image}
                src="https://picsum.photos/276/154"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Vivamus suscipit tortor eget felis porttitor</span>
              {/* <span className={styles.blog__instructor}>Juan Quino Areche Isra</span> */}
              <span className={styles.blog__date}>04 Abril 2022</span>
              <span className={styles.starts}>
                <BsStarFill fill="#ff8906" />
                <BsStarFill fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
                <BsStar fill="#ff8906" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Blogs);
