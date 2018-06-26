import axios from 'axios'
var instance = axios.create({
  baseURL:'http://localhost:3000/api/',
  withCredentials: true,
  timeout:5000
});
export default instance;
