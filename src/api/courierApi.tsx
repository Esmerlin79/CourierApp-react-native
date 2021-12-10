import axios from "axios";


const courierApi = axios.create({
    baseURL: 'https://courierdemo.azurewebsites.net/api'
})

export default courierApi;