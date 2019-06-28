<template>
   <div id="index" class="index">
       <div class="container">
           <topMenu></topMenu>
           <div class="main" @click="checkLogin()">
              <keep-alive>
               <router-view v-if="$route.meta.keepAlive"></router-view>
              </keep-alive>
               <router-view v-if="!$route.meta.keepAlive"></router-view>
           </div>
        </div>
       <div class="footer">
           <div class="container">
            Copyright 2006 广州金鹏律师事务所 版权所有 粤ICP备14003815号
           </div>
            
           
       </div>
    </div> 
</template>
<script>
import topMenu from './topMenu'
import { setInterval } from 'timers';

export default {
    data(){
        return{

        }
        
    },
     created(){
           //页面刚进入时开启长连接
           // this.initWebSocket()
        
       },
　　destroyed: function() {
　　　　//页面销毁时关闭长连接
　　　　　//　this.websocketclose();
          
               this.$store.commit('reset')
                this.$store.commit('reset1')
                 this.$store.commit('reset2')
                  this.$store.commit('reset3')
                  this.$store.commit('reset4')

        
　　　　},
    methods:{
      checkLogin(){
          this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
              //  console.log(res)
                 if(res.data == 1){
                     this.$message({
                         message:'账号异地登陆 强制退出',
                         type:'warning'
                     })
                localStorage.removeItem('userId')
                localStorage.removeItem('sessionId')
                localStorage.removeItem('Rule_Id')
                localStorage.removeItem('Expiration_Date')
                localStorage.removeItem('Username')
                this.$router.push('/')
                     return false
                 }
                 if(res.data == 3){
                     this.$message({
                         message:'登录已过期',
                         type:'warning'
                     })
                localStorage.removeItem('userId')
                localStorage.removeItem('sessionId')
                localStorage.removeItem('Rule_Id')
                localStorage.removeItem('Expiration_Date')
                localStorage.removeItem('Username')
                this.$router.push('/')
                     return false
                 }
              }).catch((err)=>{
                    this.$message({
                         message:'登录已过期',
                         type:'warning'
                     })
                      localStorage.removeItem('userId')
                     localStorage.removeItem('sessionId')
                     localStorage.removeItem('Rule_Id')
                     localStorage.removeItem('Expiration_Date')
                     localStorage.removeItem('Username')
                     this.$router.push('/')
                     return false
              })
      },
    },
    components:{
        topMenu
    },
    computed:{
        userId(){
            return localStorage.getItem('userId')
        }
    },
    watch:{
      userId(newData){
         // console.log('1111111')
      }
    }
 
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/index.scss'
</style>


