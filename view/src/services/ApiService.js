import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Your Express server URL

export default {
  getPosts() {
    return axios.get(`${API_URL}/posts`);
  },
  getPostById(id) {
    return axios.get(`${API_URL}/posts/${id}`);
  }
};
