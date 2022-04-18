import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './slug-blog.module.scss';

import Repository from '../../../repositories/factory/RepositoryFactory';
import { useParams } from '../../../../node_modules/react-router/index';

const BusinessObjectRepository = Repository.get('businessObject');

const SlugBlog = () => {
  let { blogTitle } = useParams();
  const navigate = useNavigate();
  // blogs
  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    if ( !blogTitle ) navigate('/');
    try {
      const { data } = await BusinessObjectRepository.get({
        business_object_type: 'blog',
        slug: blogTitle
      });

      if ( !data.length ) navigate('/dashboard/blogs'); 
      setBlog(data[0]);

    } catch (err) {
      console.error('Error fetch Blog: ', err)
    }
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className='container' dangerouslySetInnerHTML={{ __html: blog.content }} />
  );
};

export default React.memo(SlugBlog);
