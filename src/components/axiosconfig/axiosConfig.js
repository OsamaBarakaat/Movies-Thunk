import axios from 'axios'
const axiosConfig = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        "api_key": "07ffd2ef2877d3ff5a6c4e3450ea8177"
    }
})

export default axiosConfig;