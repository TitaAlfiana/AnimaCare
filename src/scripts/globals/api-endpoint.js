import CONFIG from './config';

const API_ENDPOINT = {
  FORUM: `${CONFIG.BASE_URL}/forum`,
  DETAIL_FORUM: (id) => `${CONFIG.BASE_URL}/forum/${id}`,
  POST_COMMENT: `${CONFIG.BASE_URL}/comment`,
};

export default API_ENDPOINT;
