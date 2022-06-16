import CONFIG from './config';

const API_ENDPOINT = {
  FORUM: `${CONFIG.BASE_URL}/forum`,
  DETAIL_FORUM: (id) => `${CONFIG.BASE_URL}/forum/${id}`,
  POST_COMMENT: (id) => `${CONFIG.BASE_URL}/forum/${id}/comment`,
  SEARCH_FORUM: `${CONFIG.BASE_URL}/forum/search/`,
  SEARCH_ARTICLE: `${CONFIG.BASE_URL}/article/search/`,
  LIST_ARTICLE: `${CONFIG.BASE_URL}/article`,
  DETAIL_ARTICLE: (id) => `${CONFIG.BASE_URL}/article/${id}`,
  MAKANAN_KUCING: `${CONFIG.BASE_URL}/category/makanan-kucing`,
  MAKANAN_ANJING: `${CONFIG.BASE_URL}/category/makanan-anjing`,
  MAKANAN_ANIMAL: `${CONFIG.BASE_URL}/category/makanan-animal`,
  PARFUM: `${CONFIG.BASE_URL}/category/parfum`,
  VITAMIN: `${CONFIG.BASE_URL}/category/vitamin`,
  KANDANG: `${CONFIG.BASE_URL}/category/kandang`,
  SUSU: `${CONFIG.BASE_URL}/category/susu`,
  OBAT: `${CONFIG.BASE_URL}/category/obat`,
  BOX_PASIR: `${CONFIG.BASE_URL}/category/box-pasir`,
  PASIR: `${CONFIG.BASE_URL}/category/pasir`,
  AKSESORIS: `${CONFIG.BASE_URL}/category/aksesoris`,
  SHAMPO: `${CONFIG.BASE_URL}/category/shampo`,
  TAS_HEWAN: `${CONFIG.BASE_URL}/category/tas-hewan`,

};

export default API_ENDPOINT;
