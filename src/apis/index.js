import * as api from './config'
import request from '../utils/service'

function getquery (obj) {
  let str = ''
  for (const k in obj) {
    str += `&${k}=${obj[k]}`
  }
  return str.replace(/^&/, '')
}

/**
 * 案例列表
 */
 export function authCode () {
  return request({
    url: `${api.authCode}/`,
    method: 'GET'
  })
}

/**
 * 登录
 */
export function login (otherUserParams) {
  return request({
    url: `${api.login}`,
    method: 'post',
    data: otherUserParams,
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem('userInfo'))?.access || '123'}`
    }
  })
}

/**
 * 案例列表
 */
export function caseList (query) {
  return request({
    url: `${api.caseList}/?${getquery(query)}`,
    method: 'GET'
  })
}

/**
 * 案例列表
 */
 export function caseAdd (data) {
  return request({
    url: `${api.caseAdd}/`,
    method: 'POST',
    data
  })
}

/**
 * 案例更新
 */
 export function caseUpdate (data) {
  return request({
    url: `${api.caseUpdate}/`,
    method: 'POST',
    data
  })
}

/**
 * 案例详情
 */
 export function caseDetail (id) {
  return request({
    url: `${api.caseDetail}?id=${id}`,
    method: 'GET'
  })
}

/**
 * 案例详情
 */
 export function caseDelete (data) {
  return request({
    url: `${api.caseDelete}`,
    method: 'POST',
    data
  })
}

/**
 * 视频列表
 */
 export function videoList (id) {
  return request({
    url: `${api.videoList}`,
    method: 'GET'
  })
}

/**
 * 视频列表
 */
export function addVideo (data) {
  return request({
    url: `${api.addVideo}`,
    method: 'POST',
    data
  })
}

/**
 * 视频列表
 */
 export function editVideoName (data) {
  return request({
    url: `${api.editVideoName}`,
    method: 'POST',
    data
  })
}

/**
 * 视频列表
 */
 export function delVideo (data) {
  return request({
    url: `${api.delVideo}`,
    method: 'POST',
    data
  })
}

/**
 * 视频列表
 */
 export function levmsgList (query) {
  return request({
    url: `${api.levmsgList}?${getquery(query)}`,
    method: 'GET'
  })
}

export function levmsgdetail () {
  return request({
    url: `${api.levmsgdetail}`,
    method: 'GET'
  })
}

export function levmsgdelete (data) {
  return request({
    url: `${api.levmsgdelete}`,
    method: 'POST',
    data
  })
}

export function faqList () {
  return request({
    url: `${api.faqList}`,
    method: 'GET'
  })
}

export function delfeq (data) {
  return request({
    url: `${api.delfeq}`,
    method: 'POST',
    data
  })
}

export function addfeq (data) {
  return request({
    url: `${api.addfeq}`,
    method: 'POST',
    data
  })
}

export function clientList () {
  return request({
    url: `${api.clientList}`,
    method: 'GET'
  })
}

export function delClient (data) {
  return request({
    url: `${api.delClient}`,
    method: 'POST',
    data
  })
}

export function addClient (data) {
  return request({
    url: `${api.addClient}`,
    method: 'POST',
    data
  })
}

export function updateClient (data) {
  return request({
    url: `${api.updateClient}`,
    method: 'POST',
    data
  })
}
