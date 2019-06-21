<template>
    <div>
        正在授权登录
        <div class="btn_box">
             <button class="btn1 btn" @click="openID()">确定授权登录</button>
        <button class="btn btn2">取消</button>
        </div>
       
    </div>
</template>
<script>
import MsgBus from './vueEvent';
export default {
    data(){
        return{
            openid:'',
        }

    },
    mounted(){
      //  console.log(this.$store.state.openid)
       this.getparams()

    },
    methods:{
        getparams(){
            var url = location.search; //获取url中"?"符后的字串  
                var theRequest = new Object();  
                if (url.indexOf("?") != -1) {  
                var str = url.substr(1);  
                var strs = str.split("&");  
             for(var i = 0; i < strs.length; i ++) {  
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
                }
                alert(theRequest.openid)
               
                this.openid = theRequest.openid

        }
        },
        openID(){
        
            this.$http.get('/yongxu/Login/Wechat_Landing',{params:{
                openid:this.openid
            }}).then((res)=>{
                if(res.data == 4){
                    
                   this.$store.commit('getOpenid',this.openid)
                   console.log(this.$store.state.openid)
                   MsgBus.$emit('msg',this.$store.state.openid);
                   this.$router.push('/')
                }else{
                    alert(res.data)
                     this.$store.commit('getOpenid',this.openid)
                     MsgBus.$emit('msg',this.$store.state.openid);
                     console.log(this.$store.state.openid)
                    // this.$router.push('/')
                }
                
            })
        }
    }
}
</script>
<style lang="scss">
.btn_box{
    width: 100%;
    display: flex;
    flex-direction: column;
    // height: 4.375rem;
    margin-top: 6.25rem;
    .btn{
        width: 100%;
        height: 3.125rem;
        border-radius: none;
        border: none;
        color: #ffffff;
        margin-top: 1.25rem;
    }
    .btn1{
      background: #A92A2E;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .btn2{
        background: #7E2C2E;
           display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
}

</style>


