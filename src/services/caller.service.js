import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://flp-api.francecentral.cloudapp.azure.com/api-docs'
})

export default Axios