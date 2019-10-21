import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 311873a1d36765bce9c266163a0e58df3278bc69dd98db5a86700bc84005720d'
  }
});
