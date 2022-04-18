import React, { useEffect, useState } from 'react';
import { CardBlog } from 'components/molecules';
import { Button, Image } from 'react-bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Row from '../../../node_modules/react-bootstrap/esm/Row';
import Col from '../../../node_modules/react-bootstrap/esm/Col';

import Repository from '../../repositories/factory/RepositoryFactory';

import styles from './blogs.module.scss';
import { useNavigate } from '../../../node_modules/react-router-dom/index';


const Blogs = () => {
  const BusinessObjectRepository = Repository.get('businessObject');
  const navigate = useNavigate();
  const search = '../../assets/icons/instructor/search.svg';
  const [blogs, setBlogs] = useState([]);

  // localStorage.setItem('tours', JSON.stringify(dataTour));

  const fetchBlogs = async () => {
    try {
      const { data } = await BusinessObjectRepository.get({
        business_object_type: 'blog',
      });
      setBlogs(data);
    } catch (err) {
      console.error('Error get blogs: ', err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const showBlogForm = () => {
    navigate('/dashboard/blogs/new');
  };

  return (
    <div className={styles.principal}>
      <div className={styles.principal__body}>
        <Row className="mb-2">
          <Col md={10}>
            <h2 className={styles.title}>Blogs publicados</h2>
            <div className={styles.search}>
              <input
                className={styles.search__input}
                type="text"
                placeholder="Buscar en TrackG"
              />
              <Image style={{ width: '15px' }} src={search} alt="search in TrackG" />
            </div>
          </Col>
          <Col md={2}>
            <Button onClick={showBlogForm} variant="outline-orange" size="sm">
              New Blog
            </Button>
          </Col>
        </Row>
        <div className={styles.principal__body__blogs}>
          {blogs.map((item, index) => (
            <CardBlog
              key={index}
              name={item.name}
              description={item.description}
              slug={item.slug}
              urlImage={item.url_image}
            />
          ))}
        </div>
      </div>
      <div className={styles.principal__blogs_best}>
        <div className={styles.principal__improvement}>
          <span>Mejores Blogs</span>
          <Button size="sm" style={{ color: '#fff', cursor: 'pointer' }} variant="orange">
            Ver todo
          </Button>
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
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
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
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
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
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
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
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
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
                src="https://picsum.photos/278/156"
                alt="blog gym"
              />
            </div>
            <div className={styles.blog__description}>
              <span className={styles.blog__title}>Pectorales de Acero con pesas</span>
              <span className={styles.blog__instructor}>Juan Quino Areche Isra</span>
              <span className={styles.blog__date}>20 Diciembre 2021</span>
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
  );
};
export default React.memo(Blogs);
