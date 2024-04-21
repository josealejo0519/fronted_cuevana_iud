import axios from "axios"

export const axiosConfig = axios.create({
    baseURL : process.env.REACT_APP_CUEVANA_IUD_BASE_URL ||'localhost:4000/api/v1/'
})

export {
    axios
}