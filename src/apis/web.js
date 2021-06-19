import * as api from './config'
import request from '../utils/service'

export function sendlevmsg (data) {
    return request({
        url: `${api.levmsg}/`,
        method: 'POST',
        data
    })
}

export function homeVideo () {
    return request({
      url: `${api.homeVideo}`,
      method: 'GET'
    })
}

export function webcaseList () {
    return request({
        url: `${api.webcaseList}`,
        method: 'GET'
    })
}

export function webCaseDetail (id) {
    return request({
        url: `${api.webCaseDetail}?id=${id}`,
        method: 'GET'
    })
}

export function webFaq () {
    return request({
        url: `${api.faq}`,
        method: 'GET'
    })
}

export function webcustomer () {
    return request({
        url: `${api.customer}`,
        method: 'GET'
    })
}
