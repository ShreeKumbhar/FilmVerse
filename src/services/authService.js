import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('authToken', response.data.token);
  }
  return response.data;
};

const signup = async (email, password) => {
  const response = await axios.post(`${API_URL}signup`, { email, password });
  if (response.data.token) {
    localStorage.setItem('authToken', response.data.token);
  }
  return response.data;
};

export default { login, signup };
