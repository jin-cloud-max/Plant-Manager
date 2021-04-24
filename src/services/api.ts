import axios from 'axios';

const api = axios.create({
  baseURL: 'http://YOUR_IP_ADDRESS:3333'
})

export { api }
