import { Button, Spinner, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import Edit from 'components/atoms/edit/edit.component';
import styles from './new-blog.module.scss';

import Repository from '../../../repositories/factory/RepositoryFactory';
import FormContext from 'context/FormContext';

const NewBlog = () => {
  const [showLoading, setShowLoading] = useState(false);
  const UploadRepository = Repository.get('upload');
  const BusinessObjectRepository = Repository.get('businessObject');
  const { blogC, setBlogC } = useContext(FormContext);

  const navigate = useNavigate();
  // localStorage.setItem('tours', JSON.stringify(dataTour));

  // Form
  const [blog, setBlog] = useState({
    name: '',
    description: '',
    business_object_type: 'blog',
    content: '',
    urlImage: '',
  });

  useEffect(() => {
    if ( Object.keys(blogC).length ) setBlog({ ...blogC });
  }, []);

  const handleBlogChange = e => {
    let updatedValue = {};
    updatedValue = { [`${e.target.name}`]: e.target.value };
    setBlog(blog => ({
      ...blog,
      ...updatedValue,
    }));
  };

  const handleBlogImageChange = e => {
    let urlImage = {};
    urlImage = { imageFile: e.target.files[0] };
    setBlog(blog => ({
      ...blog,
      ...urlImage,
    }));
  };

  const setBlogContent = text => {
    setBlog(blog => ({
      ...blog,
      ...{ content: text },
    }));
  };

  const saveBlog = async function (e) {
    e.preventDefault();
    setShowLoading(true);
    try {
      const formData = new FormData();
      let urlImage = '';

      if (blog.imageFile) {
        formData.append('singleFile', blog.imageFile);
        formData.append('target', 'blog');
        const { data } = await UploadRepository.uploadFile(formData);
        //TODO: Validar si en caso responsenUpload falla
        urlImage = data.secure_url;
      }

      const payload = blogFormat(blog);
      if ( urlImage ) payload.url_image = urlImage;
      
      console.log('data paylaod is: ', payload)
      if ("_id" in payload) await BusinessObjectRepository.update(payload);
      else await BusinessObjectRepository.store(payload);
      
      setShowLoading(true);
      navigate('/dashboard/blogs');
    } catch (e) {
      console.error(e);
      setShowLoading(false);
    }
  };

  const blogFormat = ({
    _id,
    name,
    business_object_type,
    description,
    content,
    url_image,
  }) => {
    const payload = {
      name,
      business_object_type,
      description,
      url_image,
      content,
    };
    if ( _id ) payload._id = _id;

    return payload;
  };

  return (
    <div>
      <Form.Group className={styles.customForm} controlId="formName">
        <Form.Label className={styles.formLabel}>Titúlo: </Form.Label>
        <Form.Control
          name="name"
          type="text"
          className={styles.formControl}
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
          accept="image/gif, image/png, image/jpg, image/jpeg"
          placeholder="Ingrese imagen"
          value={blog.urlImage}
          onChange={e => {
            handleBlogImageChange(e);
            handleBlogChange(e);
          }}
        />
      </Form.Group>
      <Form.Group controlId="formContent">
        <Form.Label>Contenido</Form.Label>
        <Edit value={blog.content} setValue={setBlogContent} />
      </Form.Group>
      <div className="mt-3 d-flex justify-content-end">
        <Button
          variant="light"
          className="border"
          onClick={e => {
            navigate('/dashboard/blogs');
          }}>
          Cancel
        </Button>

        <Button
          style={{ color: '#fff', cursor: 'pointer', marginLeft: '10px' }}
          variant="orange"
          onClick={saveBlog}>
            { showLoading 
              ? 
                <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  /> 
                  Loading...
                </>
              : 'Save'
            }
        </Button>
      </div>
    </div>
  );
};

export default React.memo(NewBlog);
