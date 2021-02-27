import http from '../helpers/fetchHandle';

export default async (url) => {
  try {
    const response = await http.get(url);
    return response;
  } catch (error) {
    return error;
  }
};
