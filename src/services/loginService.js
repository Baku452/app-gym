import axios from 'axios';

export default async function loginService({ username, password }) {
  try {
    const res = await axios.post(
      process.env.REACT_APP_BACKEND_URL + '/api/v1/auth/login',
      {
        username: username,
        password: password,
      },
    );
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}
