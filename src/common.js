import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios
const httpUrl = '/yongxu/Base/getUserJudge'
function checkAuth (params) {
    return new Promise((resolve, reject) => {
        axios.get(this.httpUrl,params).then(
          (res) => {
            resolve(res)
          },
          (err) => {
            reject(err)
          }
        )
      })
}
export default {
    httpUrl,
    checkAuth,
  }
