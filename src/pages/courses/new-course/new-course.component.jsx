import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Form from '../../../../node_modules/react-bootstrap/esm/Form';
import styles from './new-course.module.scss';

import Repository from '../../../repositories/factory/RepositoryFactory';
const NewCourse = () => {
  const UploadRepository = Repository.get('upload');
  const BusinessObjectRepository = Repository.get('businessObject');

  const navigate = useNavigate();
  // localStorage.setItem('tours', JSON.stringify(dataTour));

  // Form
  const [course, setCourse] = useState({
    name: '',
    description: '',
    business_object_type: 'course',
    urlImage: '',
    urlVideo: '',
    publicId: '',
  });

  const handleCourseChange = e => {
    let updatedValue = {};
    updatedValue = { [`${e.target.name}`]: e.target.value };
    setCourse(course => ({
      ...course,
      ...updatedValue,
    }));
  };

  const handleCourseImageChange = e => {
    let urlImage = {};
    urlImage = { imageFile: e.target.files[0] };
    setCourse(course => ({
      ...course,
      ...urlImage,
    }));
  };

  const handleCourseVideoChange = e => {
    let urlVideo = {};
    urlVideo = { videoFile: e.target.files[0] };
    setCourse(course => ({
      ...course,
      ...urlVideo,
    }));
  };

  const saveCourse = async function (e) {
    e.preventDefault();

    try {
      const formDataImage = new FormData();
      const formDataVideo = new FormData();
      formDataImage.append('singleFile', course.imageFile);
      formDataImage.append('target', 'course');

      formDataVideo.append('singleFile', course.videoFile);
      formDataVideo.append('target', 'course');
      const { data: dataImage } = await UploadRepository.uploadFile(formDataImage);
      const { data: dataVideo } = await UploadRepository.uploadFile(formDataVideo);
      // const { data } = await UploadRepository.uploadFile(formDataVideo);
      //TODO: Validar si en caso responsenUpload falla
      const payload = CourseFormat(course);
      payload.url_image = dataImage.secure_url;
      payload.url_video = dataVideo.secure_url;
      payload.video_public_id = dataVideo.public_id;

      await BusinessObjectRepository.store(payload);
      navigate('/dashboard/Courses');
    } catch (e) {
      console.error(e);
    }
  };

  const CourseFormat = ({
    name,
    business_object_type,
    description,
    url_image,
    url_video,
    video_public_id,
  }) => {
    return {
      name,
      business_object_type,
      description,
      url_image,
      url_video,
      video_public_id,
    };
  };

  return (
    <div>
      <Form.Group className={styles.customForm} controlId="formName">
        <Form.Label className={styles.formLabel}>Title: </Form.Label>
        <Form.Control
          name="name"
          type="text"
          className={styles.formControl}
          value={course.name}
          onChange={e => handleCourseChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Ingrese Descripción "
          value={course.description}
          onChange={e => handleCourseChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="formImage">
        <Form.Label>Presentation Image:</Form.Label>
        <Form.Control
          type="file"
          name="urlImage"
          accept="image/gif, image/png, image/jpg, image/jpeg"
          placeholder="Ingrese imagen"
          value={course.urlImage}
          onChange={e => {
            handleCourseImageChange(e);
            handleCourseChange(e);
          }}
        />
      </Form.Group>
      <Form.Group controlId="formVideo">
        <Form.Label>Video:</Form.Label>
        <Form.Control
          type="file"
          name="urlVideo"
          accept="video/*"
          placeholder="input video..."
          value={course.urlVideo}
          onChange={e => {
            handleCourseVideoChange(e);
            handleCourseChange(e);
          }}
        />
      </Form.Group>
      <div className="mt-3 d-flex justify-content-end">
        <Button
          variant="light"
          className="border"
          onClick={e => {
            navigate('/dashboard/Courses');
          }}>
          Cancel
        </Button>

        <Button
          style={{ color: '#fff', cursor: 'pointer', marginLeft: '10px' }}
          variant="orange"
          onClick={saveCourse}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default React.memo(NewCourse);
