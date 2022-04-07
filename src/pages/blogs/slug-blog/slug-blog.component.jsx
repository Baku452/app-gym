import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Edit from 'components/atoms/edit/edit.component';
import React, { useEffect, useState } from 'react';
import Form from '../../../../node_modules/react-bootstrap/esm/Form';
import styles from './new-blog.module.scss';

import Repository from '../../../repositories/factory/RepositoryFactory';

const SlugBlog = () => {
  const UploadRepository = Repository.get('upload');
  const BusinessObjectRepository = Repository.get('businessObject');

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

    try {
      const formData = new FormData();
      formData.append('singleFile', blog.imageFile);
      const { data } = await UploadRepository.uploadFile(formData);
      //TODO: Validar si en caso responsenUpload falla
      const urlImage = data.secure_url;
      const payload = blogFormat(blog);
      payload.url_image = urlImage;

      await BusinessObjectRepository.store(payload);
      navigate('/dashboard/blogs');
    } catch(e) {
      console.error(e);
    }

  };

  const blogFormat = ({
    name,
    business_object_type,
    description,
    content,
    url_image,
  }) => {
    return {
      name,
      business_object_type,
      description,
      url_image,
      content,
    };
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
          Cancelar
        </Button>

        <Button
          style={{ color: '#fff', cursor: 'pointer', marginLeft: '10px' }}
          variant="orange"
          onClick={saveBlog}>
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default React.memo(SlugBlog);
