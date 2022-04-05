import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Edit = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      [{ script: 'sub' }, { script: 'super' }],
    ],
  };

  const formats = [
    'header',
    'font',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'background',
    'code',
    'script',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

	const setValueEditor = (textoEditor) => {
		setValue(textoEditor);
	};

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValueEditor}
      modules={modules}
      formats={formats}
    />
  );
};

export default Edit;
