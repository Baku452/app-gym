import React, { useContext, useState } from 'react';
import { BsStar, BsStarFill, BsTrashFill, BsPencilFill } from 'react-icons/bs';
import styles from './card-course.module.scss';
import { Modal } from 'react-bootstrap';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import Swal from 'sweetalert2';
import Repository from '../../../repositories/factory/RepositoryFactory';
import { useNavigate } from '../../../../node_modules/react-router/index';
import FormContext from 'context/FormContext';

const CardCourse = ({ course, fetchCourses, isEdit = false }) => {
  const navigate = useNavigate();
  const { setCourseC } = useContext(FormContext);
  //images
  const playIcon = '../assets/icons/instructor/play.svg';

  const BusinessObjectRepository = Repository.get('businessObject');
  // Modal
  const [modalShow, setModalShow] = useState(false);
  const cld = new Cloudinary({
    cloud: {
      cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`
    }
  });
  const myVideo = cld.video(course?.video_public_id);

  const editCourseForm = (course) => {
    setCourseC(course);
    navigate('/dashboard/courses/new');
  };

  const deleteCourseForm = (course) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( async (result) => {
      if (result.isConfirmed) {
        await BusinessObjectRepository.delete(course._id);
        fetchCourses();
      }
    })
  }

  return (
    <div className={styles.course}>
      <div className={styles.course__preview}>
        <img
          className={styles.course__image}
          src={ course?.url_image }
          alt="course gym"
        />
        <div className={styles.course__play}>
          <img onClick={() => setModalShow(true)} src={playIcon} alt="course gym" />
        </div>
        <div className={styles.course__control}>
          { isEdit &&
            <>
              <BsPencilFill onClick={() => editCourseForm(course)} className={styles.cursorPointer+' mb-2'} fill="#ff8906" />
              <BsTrashFill onClick={() => deleteCourseForm(course)} className={styles.cursorPointer} fill="#ff8906" />
            </>
          }
        </div>
      </div>
      <div className={styles.course__description}>
        <span className={styles.title} title={ course?.name }  >{ course?.name }</span>
        <span className={styles.comments} title={ course?.description }>{ course?.description }</span>
        <span className={styles.starts}>
          {
            [...Array(5)].map((x,i) => {
              if ((i + 1) <= course?.score) return ( <BsStarFill key={i+''} fill="#ff8906" /> )
              return (<BsStar key={i+''} fill="#ff8906" />)
            })
          }
        </span>
      </div>

      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <AdvancedVideo cldVid={myVideo} controls autoPlay={true} loop={true} />
      </Modal>
    </div>
  );
};
export default React.memo(CardCourse);
