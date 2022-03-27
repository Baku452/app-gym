import axios from 'axios';

export default async function registerService({ values }) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/`,
      values,
    );
  } catch (error) {
    throw new Error('Response is not Ok');
  }
}
