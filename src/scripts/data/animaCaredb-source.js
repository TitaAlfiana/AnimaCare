import API_ENDPOINT from '../globals/api-endpoint';

class AnimaCareDbSource {
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
}

export default AnimaCareDbSource;
