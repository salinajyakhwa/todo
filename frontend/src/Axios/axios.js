import axios from "axios"
const instance = axios.create({
    baseURL:"http://20.55.25.24:8000/api"
})
export default instance