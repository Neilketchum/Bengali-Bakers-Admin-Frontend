import {api} from '../urlconfig';
const axios = require('axios')

const axiosInstance = axios.create({
    baseURL : api,

})
export default axiosInstance