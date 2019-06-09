<template>
   <div id="index" class="index">
       <div class="container">
           <topMenu></topMenu>
           <div class="main" @click="checkLogin()">
               <router-view></router-view>
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
        clearInterval(this.timer);
　　　　},
    methods:{
      checkLogin(){
          this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                 console.log(res)
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
              })
      },
          initWebSocket(){ //初始化weosocket
  // const wsuri = `ws://192.168.0.106:8080/Login/Sel_Login_Status?sessionId=${localStorage.getItem('sessionId')}&User_Id=${localStorage.getItem('userId')}`//这个地址由后端童鞋提供
    const wsuri = `ws://192.168.0.102:8080/websocket?sessionId=B0697CDF8B9CFFBD6B39A090CBB66176`//这个地址由后端童鞋提供
        this.websock = new WebSocket(wsuri);
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onopen = this.websocketonopen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
      },
      websocketonopen(){ //连接建立之后执行send方法发送数据
        console.log('链接成功');
        this.websocketsend('chenyongxu')
      },
      websocketonerror(){//连接建立失败重连
        console.log('链接失败');
       // this.initWebSocket()
      },
      websocketonmessage(e){
        let _this = this //数据接收
        console.log(e.data)
        // if (e.data == '111111111') {//这个判断是我业务需求才加的
        // _this.$store.store.dispatch('RESET_ID') //先调用reset方法置空vuex > store里面的scorketId（为什么置空，下面标题3解释）
        // _this.$store.store.dispatch('SAVE_ID', JSON.parse(e.data)) //重新给store中的scorketId赋值（数据格式问题先转了json）
        // console.log(_this.$store.store.state.scorketId);
        // return
        // }
        // //业务需求，将socket接收到的值存进vuex
        // _this.$store.store.dispatch('RESET_ID') //先调用reset方法置空vuex > store里面的scorketId（为什么置空，下面标题3解释）
        // _this.$store.store.dispatch('SAVE_ID',e.data) //重新给store中的scorketId赋值（数据格式问题先转了json）
        // console.log(_this.$store.store.state.scorketId);
      },
      websocketsend(Data){//数据发送
        this.websock.send(Data)
      },
      websocketclose(e){  //关闭
        console.log('断开连接', e)
      },
      getInfo(){
           this.websocketsend('chenyongxu')
      }

    },
    components:{
        topMenu
    }
 
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/index.scss'
</style>


