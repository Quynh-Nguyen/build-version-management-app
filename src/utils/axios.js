import axios from 'axios'
import {
  AsyncStorage,
} from 'react-native'

import { BASE_API_URL } from './constants'

const ApiService = {
  init() {
    axios.defaults.baseURL = 'http://autobuild.terra-utm.com/api'
  },

  async setHeader() {
    const userToken = await AsyncStorage.getItem('userToken')
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
  },

  get(resource, slug = '', config = {}) {
    return axios
      .get(`${resource}/${slug}`, config)
  },

  post(resource, params) {
    console.log('Params', params)
    return axios
      .post(`${resource}`, params)
  },

  update(resource, slug = '', params) {
    return axios
      .put(`${resource}/${slug}`, params)
  },

  put(resource, params) {
    return axios
      .put(`${resource}`, params)
  },


  patch(resource, params) {
    return axios
    .patch(`${resource}`, params)
  },

  delete(resource) {
    return axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`[API] ${error}`)
      })
  }
}

export default ApiService
