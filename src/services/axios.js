import axios from 'axios'

// AXIOS Settings
// const URL_API = 'http://localhost:3000'
const URL_API = 'https://fake-api.herokuapp.com/'
const TOKEN = null

const http = axios.create({
  baseURL: URL_API,
  headers: {
    Authorization: TOKEN ? `Bearer ${TOKEN}` : '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

export default http
