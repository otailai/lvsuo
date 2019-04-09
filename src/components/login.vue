<template>
<div> <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#333333"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
        <div id="login" class="login flex">
            <div class="login-left"></div>
             <div class="login-right flex">
                 <div class="login-right-form flex" v-show="cur===0">
                         <div class="title"></div>
                        <input type="text" placeholder="用户名" class="user-input" onfocus="this.placeholder=''" onblur="this.placeholder='用户名'" v-model="username">
                        <input type="password" placeholder="密码" class="user-input" onfocus="this.placeholder=''" onblur="this.placeholder='密码'" v-model="password">
                        <div class="r-psw flex">
                             <input name="remember" type="checkbox" value="" :checked="checkedState" class="login-box" ref="remember" @change="changeCheck()"/><span>记住密码</span> 
                        </div>
                        <button class="login-btn" @click="denglu()">登陆</button>
                        <div class="weixin flex" @click="changeLogin()"><i class="iconfont icon-changyonglogo28"></i><p>微信扫码登陆</p></div>
                 </div>     
                 
                  <div class="login-right-form flex" v-show="cur===1">
                        <div class="title"></div>
                            <div class="pic flex">
                                <img src="../assets/img/erweima.png" alt="">
                                <span>微信扫一扫</span>
                            </div>
                        <div class="weixin flex" @click="changeLogin()"><i class="iconfont icon-kehu"></i><p>账号密码登陆</p></div>
                 </div>     
             </div>
           
    </div>
    </div>
</template>
<script>
import qs from 'qs';
export default {
    data(){
        return{
                checked: false,
                checkedState:false,
                cur:0,
                username:'',
                password:'',
                pub:'',
        }
        
    },
    methods:{
        changeLogin(){
            if( this.cur==1){
                    this.cur=0;

            }else{
                    this.cur=1;

            }
        },
          checknumber(String) { 
            var Letters = "1234567890"; 
            var i; 
            var c; 
            for( i = 0; i < String.length; i ++ ) 
            { 
            c = String.charAt( i ); 
            if (Letters.indexOf( c ) ==-1) 
            { 
            return true; 
            } 
            } 
            return false; 
            } ,
        denglu(){
            if(this.username==""||this.username==null){
                this.$message({
                    message:'用户名不能为空',
                    type:'warning'
                });
                return false
            }
            if(this.username.length<2){
                this.$message({
                    message:'用户名至少为六位数字',
                    type:'warning'
                });
                return false
            }
             if(this.password==""||this.password==null){
                this.$message({
                    message:'密码能为空',
                    type:'warning'
                });
                return false
            }
            if(this.checknumber(this.username)){
                this.$message({
                    message:'用户名为至少六位的数字组合',
                    type:'warning'
                });
                return false
            }
         
        
            var encrypt = new JSEncrypt()
            encrypt.setPublicKey(this.pub)
            var str = this.username+'&&'+this.password
            var encrypted = encrypt.encrypt(str);
          // 加密后的密文  
            console.log('这是加密之后的' + encrypted)
            var data = qs.stringify({
                str:encrypted
                });
             console.log(data)
            //   this.$router.push('./index/caseIndex')
            this.$http.post('http://192.168.0.106:8080/Login/decrypt',data).then((res)=>{
               
                    var str = res.data; 
                    str = str.replace(/^{+|}+$/g, "");
                    console.log(str)
                    var keep = str.split(":")[0];
                    var option = str.split(":")[1];
                    
                    if(keep == 1){
                         if(this.checkedState){ 
                                setCookie('user',this.username,7); //保存帐号到cookie，有效期7天
                                setCookie('pswd',this.password,7); //保存密码到cookie，有效期7天
                        }

                        console.log(keep)
                        console.log(option)
                        this.$router.push('./index/caseIndex')
                    }else{
                         this.$message({
                            message:'账号或密码错误',
                            type:'warning'
                        });
                         return false
                    }
               
              })   
        },
         //设置cookie
                setCookie(name,value,day){
                var date = new Date();
                date.setDate(date.getDate() + day);
                document.cookie = name + '=' + value + ';expires='+ date;
                },
            //获取cookie
                getCookie(name){
                var reg = RegExp(name+'=([^;]+)');
                var arr = document.cookie.match(reg);
                if(arr){
                return arr[1];
                }else{
                return '';
                }
                },
            //删除cookie
                delCookie(name){
                    this.setCookie(name,null,-1);
                },
          
          changeCheck(){  
            if(!this.checkedState){
                this.delCookie('user');
                this.delCookie('pswd');
  
                };
            }
    },
    mounted(){
        this.$http.post('http://192.168.0.106:8080/Login/PublicKey').then((res)=>{
            console.log(res.data.PublicKey)
            this.pub = res.data.PublicKey
        })
    },
    watch:{

    },
    components:{
  
    }
}
</script>
<style lang="sass" scoped>
    @import '../assets/sass/login.scss'
</style>


