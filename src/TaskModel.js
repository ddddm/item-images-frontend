import axios from 'axios';
import config from './config'

let Axios = axios.create({
    baseURL: config.API_ENDPOINT_URI,
    timeout: 120000,
    responseType: 'json'
})

function create(data) {
    return Axios.post(
        ['changes', 'task'].join('/'),
        data
    )
        .then((res) => {
            if(res.data.status === 'ok') {
                return {
                    items: res.data.result,
                    file_name: res.data.file_name
                }
            }

            throw new Error('failed to create change task')
        })
        .catch((err) => console.error(err))
}

export default {
    create
}