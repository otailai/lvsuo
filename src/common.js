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
const httpUrl1 = '/yongxu/Login/Sel_Login_Status'
function checkLogin(params) {
  return new Promise((resolve, reject) => {
      axios.get(this.httpUrl1,{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then(
        (res) => {
          resolve(res)
        },
        (err) => {
          reject(err)
        }
      )
    })
}

function loginOut1(){
  localStorage.removeItem('userId')
  localStorage.removeItem('sessionId')
  localStorage.removeItem('Rule_Id')
  localStorage.removeItem('Expiration_Date')
  localStorage.removeItem('Username')
  this.$router.push('/')
}
export default {
    httpUrl,
    checkAuth,
    httpUrl1,
    checkLogin

  }
