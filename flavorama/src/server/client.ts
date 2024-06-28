import axios from "axios";

export const apiPath = 'http://localhost:8080';

export const apiClient = axios.create({
  baseURL: `${apiPath}/`,
  headers: {
    'Content-Type': 'application/json',
  }
});