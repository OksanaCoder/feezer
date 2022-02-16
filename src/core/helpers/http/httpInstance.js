import axios from 'axios'

function handlePreRequest(config) {
  if (
    !config.headers ||
    !config.headers['Authorization'] ||
    !config.headers['Content-Type']
  ) {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers['Content-Type'] = 'application/json'

    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
  }
  return config
}

export const axiosInstance = axios.create({
  baseURL: 'https://api.deezer.com',
})

axiosInstance.interceptors.request.use(handlePreRequest)
