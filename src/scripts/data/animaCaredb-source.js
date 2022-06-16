import API_ENDPOINT from '../globals/api-endpoint';

class AnimaCareDbSource {
  // forum
  static async getAllForums() {
    const response = await fetch(API_ENDPOINT.FORUM);
    const result = await response.json();
    return result.forums;
  }

  static async detailForum(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_FORUM(id));
    const data = await response.json();
    return data.forum;
  }

  static async postComment(data) {
    const response = await fetch(API_ENDPOINT.POST_COMMENT(data.id), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async postForum(data) {
    const response = await fetch(API_ENDPOINT.FORUM, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async searchForum(searchText) {
    const response = await fetch(API_ENDPOINT.SEARCH_FORUM + searchText);
    const data = await response.json();
    return data.forums;
  }

  // artikel
  static async listArticle() {
    const response = await fetch(API_ENDPOINT.LIST_ARTICLE);
    const data = await response.json();
    return data.articles;
  }

  static async detailArticle(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_ARTICLE(id));
    const data = await response.json();
    return data.article;
  }

  static async searchArticle(searchText) {
    const response = await fetch(API_ENDPOINT.SEARCH_ARTICLE + searchText);
    const data = await response.json();
    return data.articles;
  }

  // category belanja
  static async getMakananKucing() {
    const response = await fetch(API_ENDPOINT.MAKANAN_KUCING);
    const data = await response.json();
    return data.makananKucing;
  }

  static async getMakananAnjing() {
    const response = await fetch(API_ENDPOINT.MAKANAN_ANJING);
    const data = await response.json();
    return data.makananAnjing;
  }

  static async getParfum() {
    const response = await fetch(API_ENDPOINT.PARFUM);
    const data = await response.json();
    return data.parfum;
  }

  static async getVitamin() {
    const response = await fetch(API_ENDPOINT.VITAMIN);
    const data = await response.json();
    return data.vitamin;
  }

  static async getKandang() {
    const response = await fetch(API_ENDPOINT.KANDANG);
    const data = await response.json();
    return data.kandang;
  }

  static async getSusu() {
    const response = await fetch(API_ENDPOINT.SUSU);
    const data = await response.json();
    return data.susu;
  }

  static async getObat() {
    const response = await fetch(API_ENDPOINT.OBAT);
    const data = await response.json();
    return data.obat;
  }

  static async getBoxPasir() {
    const response = await fetch(API_ENDPOINT.BOX_PASIR);
    const data = await response.json();
    return data.boxPasir;
  }

  static async getPasir() {
    const response = await fetch(API_ENDPOINT.PASIR);
    const data = await response.json();
    return data.pasir;
  }

  static async getAksesoris() {
    const response = await fetch(API_ENDPOINT.AKSESORIS);
    const data = await response.json();
    return data.aksesoris;
  }

  static async getShampo() {
    const response = await fetch(API_ENDPOINT.SHAMPO);
    const data = await response.json();
    return data.shampo;
  }

  static async getTasHewan() {
    const response = await fetch(API_ENDPOINT.TAS_HEWAN);
    const data = await response.json();
    return data.tasHewan;
  }
}

export default AnimaCareDbSource;
