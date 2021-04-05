import fetchHandle from '../helpers/fetchHandle';

export const getSongsService = async (url) => {
  try {
    const response = await fetchHandle.get(url);
    return response.data.data;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : 'Failed connecting to the server, please try again';
    return { error: true, message };
  }
};
