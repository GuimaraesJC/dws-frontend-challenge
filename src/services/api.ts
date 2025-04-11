import axios from 'axios'

const api = axios.create({
  baseURL: 'https://tech-test-backend.dwsbrazil.io', // Ideally would be in a .env file. Hardcoded for simplicity.
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default api
