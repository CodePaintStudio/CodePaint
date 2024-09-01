import axios from 'axios';

const baseURL = '127.0.0.1:8000'

const instance = axios.create({
    baseURL,
    timeout: 10000
})

instance.interceptors.request.use(
    (config) => {
        // Todo:
        return config
    },
    (err) => Promise.reject(err)
)

instance.interceptors.response.use(
    (res) => {
        if (res.data.code === 0) {
            // Todo:
            return res
        }
        return Promise.reject(res.data)
    },
    (err) => {
        if (err.response?.status === 401) {
            // Todo:
        }
        return Promise.reject(err)
    }
)

export default instance
export {baseURL}