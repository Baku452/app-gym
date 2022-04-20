import React, { useContext } from 'react';
import styles from './card-blog.module.scss';
import { BsStar, BsStarFill, BsTrashFill, BsPencilFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useNavigate } from '../../../../node_modules/react-router/index';
import FormContext from 'context/FormContext';

import Repository from '../../../repositories/factory/RepositoryFactory';
import Swal from 'sweetalert2';

const CardBlog = ({ blog }) => {
  const navigate = useNavigate();
  const { setBlogC } = useContext(FormContext);
  const BusinessObjectRepository = Repository.get('businessObject');

  const editBlogForm = (blog) => {
    setBlogC(blog);
    navigate('/dashboard/blogs/new');
  };

  const deleteBlogForm = (blog) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( async (result) => {
      console.log('resul is :',result, 'data blog: ', blog)
      if (result.isConfirmed) {
        await BusinessObjectRepository.delete(blog._id);
        navigate('/dashboard/blogs');
      }
    })
  }

  return (
    <div className={styles.blog}>
      <div className={styles.blog__description}>
        <span className={styles.title}>{ blog?.name }</span>
        <span className={styles.comments}>{ blog?.description }</span>
        <div className={styles.action}>
          <span className={styles.starts}>
            <BsStarFill fill="#ff8906" />
            <BsStarFill fill="#ff8906" />
            <BsStarFill fill="#ff8906" />
            <BsStar fill="#ff8906" />
            <BsStar fill="#ff8906" />
          </span>
          <Button 
            size="sm" 
            style={{ color: '#fff', cursor: 'pointer' }} 
            onClick={() => navigate(`/blogs/${blog?.slug}`)}
            variant="orange">
            read more
          </Button>
        </div>
      </div>
      <div className={styles.blog__preview}>
        <img
          className={styles.blog__image}
          src={ blog?.url_image }
          alt="image gym"
        />
        <div className={styles.blog__control}>
          <BsPencilFill onClick={() => editBlogForm(blog)} className={styles.cursorPointer+' mb-2'} fill="#ff8906" />
          <BsTrashFill onClick={() => deleteBlogForm(blog)} className={styles.cursorPointer} fill="#ff8906" />
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
