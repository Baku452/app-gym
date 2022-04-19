import React, { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import styles from './card-course.module.scss';
import { Modal } from 'react-bootstrap';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';

// https://picsum.photos/278/156
const CardCourse = ({ name, description, urlImage, videoPublicId}) => {

  //images
  const playIcon = '../assets/icons/instructor/play.svg';

  // Modal
  const [modalShow, setModalShow] = useState(false);
  const cld = new Cloudinary({
    cloud: {
      cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`
    }
  });
  const myVideo = cld.video(videoPublicId);

  return (
    <div className={styles.course}>
      <div className={styles.course__preview}>
        <img
          className={styles.course__image}
          src={ urlImage }
          alt="course gym"
        />
        <div className={styles.course__play}>
          <img onClick={() => setModalShow(true)} src={playIcon} alt="course gym" />
        </div>
      </div>
      <div className={styles.course__description}>
        <span className={styles.title}>{ name }</span>
        <span className={styles.comments}>{ description }</span>
        <span className={styles.starts}>
          <BsStarFill fill="#ff8906" />
          <BsStarFill fill="#ff8906" />
          <BsStarFill fill="#ff8906" />
          <BsStar fill="#ff8906" />
          <BsStar fill="#ff8906" />
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
