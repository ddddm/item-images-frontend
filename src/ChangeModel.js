/**
 * Created by dima on 10.11.16.
 */

import axios from 'axios';
import config from './config'

let Axios = axios.create({
    baseURL: config.API_ENDPOINT_URI,
    timeout: 120000,
    responseType: 'json'
})

function findOne(id) {
    return Axios.get(`changes/${id}`)
        .then((res) => {
            if(res.data.status === 'ok') {
                return res.data.result;
            }

            throw new Error('failed to findOne change')
        })
}

function find() {
    return Axios.get(`changes`)
        .then((res) => {
            if(res.data.status === 'ok') {
                return res.data.result;
            }

            throw new Error('failed to find change')
        })

}

function check(data) {
    return Axios.post('changes/check', data)
        .then((res) => {
            if(res.data.status === 'ok') {
                return {
                    ...res.data.result,
                    stats: res.data.stats
                }
            }

            throw new Error('failed to check change')
        })
        .catch((err) => console.error(err))
}

function create(data) {
    return Axios.post('changes', data)
        .then((res) => {
            if(res.data.status === 'ok') {
                return {
                    ...res.data.result,
                    stats: res.data.stats,
                    changeId: res.data.changeId
                }
            }

            throw new Error('failed to create change')
        })
        .catch((err) => console.error(err))
}

function exportAsset(changeId, assetType) {
    return Axios.get(`changes/${changeId}/${assetType}`)
        .then((res) => {
            if(res.data.status === 'ok') {
                return res.data.file_path
            }

            throw new Error('failed to export change asset')
        })

}

function getAssetUri(relativePath) {

    return relativePath? [config.ASSETS_URI, relativePath].join('/') : '';
}

export default {
    find,
    findOne,
    check,
    create,
    exportAsset,
    getAssetUri
};