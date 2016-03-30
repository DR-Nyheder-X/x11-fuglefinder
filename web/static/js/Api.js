/* global __DEV */
import fetch from 'isomorphic-fetch'

const log = __DEV ? require('debug')('birdie:api') : () => {}
const base = '/api/v1'
const tokenKey = 'USER_TOKEN'

export default class Api {
  static storage = window.localStorage

  static fetchCurrentUser () {
    const token = Api.storage.getItem(tokenKey)

    if (token) {
      return Api.get('/current_user')
    } else {
      return Api.post('/current_user').then(saveToken)
    }
  }

  static get (path) {
    const opts = { method: 'get', headers: {} }

    setTokenHeader(opts)

    log('GET', { path, opts })
    return fetch(base + path, opts)
    .then((resp) => resp.json())
  }

  static post (path, data) {
    const opts = { method: 'post', headers: {} }

    setTokenHeader(opts)

    log('POST', { path, opts })

    return fetch(base + path, opts)
    .then((resp) => resp.json())
  }
}

function saveToken (data) {
  Api.storage.setItem(tokenKey, data.user.token)
  return Promise.resolve(data)
}

function setTokenHeader (opts) {
  const token = Api.storage.getItem(tokenKey)

  if (token) {
    Object.assign(opts.headers, { 'Authentication': `Bearer ${token}` })
  }

  return opts
}
