import React, { useEffect, useState } from 'react';
import styles from './blogs.module.scss';
import { CardBlog } from 'components/molecules';
import { Button, Modal } from 'react-bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Row from '../../../node_modules/react-bootstrap/esm/Row';
import Col from '../../../node_modules/react-bootstrap/esm/Col';

import Repository from '../../repositories/factory/RepositoryFactory';
import Form from '../../../node_modules/react-bootstrap/esm/Form';
import Edit from '../../components/atoms/edit/edit.component';
import { Link, useNavigate } from 'react-router-dom';

const BusinessObjectRepository = Repository.get('businessObject');

const Blogs = () => {
  const navigate = useNavigate();
  // Modal
  const [show, setShow] = useState(false);
  const hiddenBlogFormModal = () => setShow(false);

  const showBlogFormModal = () => {
    // setShow(true);
    setBlog(prepareBlog());
    navigate('/dashboard/blogs/new');
  };

  const prepareBlog = () => {
    return {
      name: '',
      description: '',
      business_object_type: 'blog',
      content: '',
      urlImage: '',
    };
  };

  // Form
  const [blog, setBlog] = useState({});

  const handleBlogChange = e => {
    let updatedValue = {};
    updatedValue = { [`${e.target.name}`]: e.target.value };
    setBlog(blog => ({
      ...blog,
      ...updatedValue,
    }));
  };

  const setBlogContent = text => {
    setBlog(blog => ({
      ...blog,
      ...{ content: text },
    }));
  };

  // blog
  const [blogs, setBlogs] = useState([]);

  // localStorage.setItem('tours', JSON.stringify(dataTour));

  const saveBlog = async function (e) {
    e.preventDefault();

    const payload = blogFormat(blog);
    await BusinessObjectRepository.store(payload);
    fetchBlogs();

    hiddenBlogFormModal();
  };

  const blogFormat = ({ name, business_object_type, description, content, urlImage }) => {
    return {
      name,
      business_object_type,
      description,
      urlImage,
      content,
    };
  };

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

  return (
    <div className={styles.principal}>
      <div className={styles.principal__body}>
        <Row className="mb-2">
          <Col md={10}>
            <h2 className={styles.title}>Blogs publicados</h2>
          </Col>
          <Col md={2}>
            <Button onClick={showBlogFormModal} variant="outline-orange" size="sm">
              Subir Blog
            </Button>
          </Col>
        </Row>
        <div className={styles.principal__body__blogs}>
          {blogs.map((item, index) => (
            <CardBlog
              key={index}
              name={item.name}
              description={item.description}
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

      <Modal show={show} onHide={hiddenBlogFormModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registro de Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Ingrese Tema"
                value={blog.name}
                onChange={e => handleBlogChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Ingrese Descripción "
                value={blog.description}
                onChange={e => handleBlogChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Imagen de Presentación</Form.Label>
              <Form.Control
                type="file"
                name="urlImage"
                placeholder="Ingrese image"
                value={blog.urlImage}
                onChange={e => handleBlogChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formContent">
              <Form.Label>Contenido</Form.Label>
              <Edit value={blog.content} onChange={setBlogContent} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hiddenBlogFormModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={saveBlog}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default React.memo(Blogs);
