import { Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import Form from '../../../../node_modules/react-bootstrap/esm/Form';
import styles from './new-course.module.scss';

import Repository from '../../../repositories/factory/RepositoryFactory';
import FormContext from 'context/FormContext';

const NewCourse = () => {
  const [showLoading, setShowLoading] = useState(false);
  const UploadRepository = Repository.get('upload');
  const BusinessObjectRepository = Repository.get('businessObject');
  const { courseC, setCourseC } = useContext(FormContext);

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

  useEffect(() => {
    if ( Object.keys(courseC).length ) setCourse({ ...courseC });
  }, []);

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
    setShowLoading(true);

    try {
      const formDataImage = new FormData();
      const formDataVideo = new FormData();
      let urlImage = '';
      let urlVideo = '';
      let videoPublicId = '';

      if ( course.imageFile ) {
        formDataImage.append('singleFile', course.imageFile);
        formDataImage.append('target', 'course');
        const { data: dataImage } = await UploadRepository.uploadFile(formDataImage);
        urlImage = dataImage.secure_url;
      }

      if ( course.videoFile ) {
        formDataVideo.append('singleFile', course.videoFile);
        formDataVideo.append('target', 'course');
        const { data: dataVideo } = await UploadRepository.uploadFile(formDataVideo);
        urlVideo = dataVideo.secure_url;
        videoPublicId = dataVideo.public_id;
      }

      const payload = CourseFormat(course);
      if ( urlImage ) payload.url_image = urlImage;
      if ( urlVideo ) {
        payload.url_video = urlVideo;
        payload.video_public_id = videoPublicId;
      }

      if ("_id" in payload) await BusinessObjectRepository.update(payload);
      else await BusinessObjectRepository.store(payload);

      navigate('/dashboard/courses');
    } catch (e) {
      console.error(e);
    }
  };

  const CourseFormat = ({
    _id,
    name,
    business_object_type,
    description,
    url_image,
    url_video,
    video_public_id,
  }) => {
    const paylaod = {
      name,
      business_object_type,
      description,
      url_image,
      url_video,
      video_public_id,
    };

    if ( _id ) payload._id = _id;

    return paylaod;
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
            navigate('/dashboard/courses');
          }}>
          Cancel
        </Button>

        <Button
          style={{ color: '#fff', cursor: 'pointer', marginLeft: '10px' }}
          variant="orange"
          onClick={saveCourse}>
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

export default React.memo(NewCourse);
