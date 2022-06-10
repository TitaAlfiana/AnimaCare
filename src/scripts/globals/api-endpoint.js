import CONFIG from './config';

const API_ENDPOINT = {
  FORUM: `${CONFIG.BASE_URL}/forum`,
  DETAIL_FORUM: (id) => `${CONFIG.BASE_URL}/forum/${id}`,
  POST_COMMENT: (id) => `${CONFIG.BASE_URL}/forum/${id}/comment`,
  SEARCH_FORUM: `${CONFIG.BASE_URL}/forum/search/`,
  SEARCH_ARTICLE: `${CONFIG.BASE_URL}/article/search/`,
  LIST_ARTICLE: `${CONFIG.BASE_URL}/article`,
};

export default API_ENDPOINT;
