import * as Yup from 'yup';

//example
// const validationSchema = Yup.object().shape({
//   fullname: Yup.string().required('Fullname is required'),
//   username: Yup.string()
//     .required('Username is required')
//     .min(6, 'Username must be at least 6 characters')
//     .max(20, 'Username must not exceed 20 characters'),
//   email: Yup.string()
//     .required('Email is required')
//     .email('Email is invalid'),
//   password: Yup.string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters')
//     .max(40, 'Password must not exceed 40 characters'),
//   confirmPassword: Yup.string()
//     .required('Confirm Password is required')
//     .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
//   acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
// });

export const blogValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nombre es requerido')
    .min(6, 'Nombre debe de tener al menos 6 caracteres'),
  description: Yup.string().required('Descripción es requerido'),
  urlImage: Yup.string().required('Imagen es requerida'),
  content: Yup.string().required('Contenido es requerido'),
});

export const courseValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nombre es requerido')
    .min(6, 'Nombre debe de tener al menos 6 caracteres'),
  description: Yup.string().required('Descripción es requerido'),
  urlImage: Yup.string().required('Imagen es requerida'),
  content: Yup.string().required('Contenido es requerido'),
});

export const productValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nombre es requerido')
    .min(6, 'Nombre debe de tener al menos 6 caracteres'),
  description: Yup.string().required('Descripción es requerido'),
  urlImage: Yup.string().required('Imagen es requerida'),
  content: Yup.string().required('Contenido es requerido'),
});



