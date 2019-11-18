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
        <div id="login" class="login flex" @click="checkIsLogin()">
            <div class="login-left"></div>
             <div class="login-right flex">
                 <div class="login-right-form flex" v-show="cur===0">
                         <div class="title"></div>
                        <input type="text" placeholder="用户名" class="user-input" onfocus="this.placeholder=''" onblur="this.placeholder='用户名'" v-model="username">
                        <input type="password" placeholder="密码" class="user-input" onfocus="this.placeholder=''" onblur="this.placeholder='密码'" v-model="password">
                        <div class="r-psw flex">
                             <input name="remember" type="checkbox" value="" :checked="checkedState" class="login-box" ref="remember" @change="changeCheck()"/><span>记住密码</span> 
                        </div>
                        <button class="login-btn" @click="denglu()" @keyup.enter="denglu()">登录</button> 
                        <div class="weixin1 weixin flex" @click="changeLogin()"><i class="iconfont icon-changyonglogo28"></i><p>微信扫码登录</p></div>
                 </div>     
                 
                  <div class="login-right-form flex" v-show="cur===1">
                        <div class="title"></div>
                            <div class="pic flex">
                            <wxlogin appid="wx0b5e209ee6a56c2f" id='img_box' scope="snsapi_login"  :redirect_uri="url"></wxlogin>
                            <!-- <div class="img_box" id="img_box">
                                <img src="../assets/img/wx.png" alt="">
                            </div> -->
                            
                                  <div class="weixin flex" @click="changeLogin()"><i class="iconfont icon-kehu"></i><p>账号密码登录</p></div>
                            </div>
                      
                 </div>      
             </div>
           
    </div>
    </div>
</template>
<script>
import qs from 'qs';
import { fail } from 'assert';
import wxlogin from 'vue-wxlogin';
import MsgBus from './vueEvent';
import { setInterval, clearTimeout } from 'timers';
import md5 from 'js-md5';
var loginInit  = true
export default {
    data(){
        return{
                url:encodeURIComponent('http://cms.kingpound.com:8082/weixin'),
                //url:'http://192.168.0.107:8081/weixin', 
                //url:'http://dist.gzbigbang.cn/weixin',
                checked: false,
                checkedState:false,
                cur:0,
                username:'',
                password:'',
                pub:'',
                dataTest:'',
                path:'',
                result:'',
                openid1:'',
                timer: null  ,
                openId:"",
        }
        
    },
    created(){
    
       var _self = this
        _self.GetCodeDemo()
        document.onkeydown = function(e) {
          var key = window.event.keyCode
          if (key === 13) {
            _self.denglu()
          }
        }
    },
     beforeDestroy() {
    //   var _self =this
    //   loginInit = true
    // clearTimeout(_self.timer)
      document.onkeydown = function(e) {
        var key = window.event.keyCode
        if (key === 13) {
        }
      }
       
  },
    methods:{
        submitLogin(){
             this.denglu()
        }, 
        changeLogin:function(){
            if(this.cur==1){
                    this.cur=0;

            }else{
                this.cur=1; 
                setInterval(function(){
                     MsgBus.$on('msg',(e)=>{
                         console.log(e)
                     });
                },1000)
            }
        },
          checknumber:function(String) { 
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
        getQueryString(name){
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
          var r = window.location.search.substr(1).match(reg);
          if (r != null) {
            return unescape(r[2]);
          }else {
            return null;
          }
        },
          GetCodeDemo(){
          var code = this.getQueryString('code')
          if(code!=null){
            console.log(code)
            // this.openId=localStorage.setItem('openId',code)
            // this.$router.push({path:'/index'})
          }
        //   if(code != null){
        //     var parameters = {};
        //     parameters.appid = "wxd26bda82d18b5926";
        //     parameters.secret = "f48c3c9dcf342904ef41941c0be75071";
        //     parameters.code = code;
        //     parameters.grant_type="authorization_code"
        //     $.ajax({
        //       type: 'POST',
        //       data:parameters,
        //       url:"http://weixin3.szfangle.com/wxapp/mobileApi/submitWxcode.fgl?",
        //       success: function(res){
        //         console.log(res)

        //       },error:function(res){
        //         console.log(res)
        //       }
        //     });
        //   }
        //}
      },
        denglu:function(){
         
            //this.checckIsHas()
            // if(loginInit == false){
            //      this.$message({
            //         message:'操作频繁，请稍等',
            //         type:'warning'
            //     });
            //   this.timer =  setTimeout(function(){
            //         loginInit = true
            //     },3000)
            //     return false
            // }
            if(this.username==""||this.username==null){
                this.$message({
                    message:'用户名不能为空',
                    type:'warning'
                });
                return false
            }
             if(this.password==""||this.password==null){
                this.$message({
                    message:'密码不能为空',
                    type:'warning'
                });
                return false
            }
            if(this.checknumber(this.username)){
                this.$message({
                    message:'用户名格式错误',
                    type:'warning'
                });
                return false
            }
          
            loginInit = false
            // var encrypt = new JSEncrypt()
            // encrypt.setPublicKey(this.pub)
            var str = this.username+'&&'+md5(this.password)
            // var encrypted = encrypt.encrypt(str);
          // 加密后的密文  
            var data = qs.stringify({
                str:str
            });
      //  console.log(data)
        //decrypt
       this.$http.post('/yongxu/Login/Judging_Landing',data).then((res)=>{
                var str = res.data; 
                 if(res.data == 1){
                     this.$message({
                         message:'用户名错误',
                         type:'warning'
                     })
                     return false
                 }
                   if(res.data == 2){
                     this.$message({
                         message:'密码错误',
                         type:'warning'
                     })
                     return false
                 }
                  if(res.data == 3){
                     this.$message({
                         message:'该账户被锁定',
                         type:'warning'
                     })
                     return false
                 }
                  if(res.data == 5){
                       this.$confirm('此账号已在其他地方登录, 是否继续登录?', '提示', {
                       confirmButtonText: '确定',
                       cancelButtonText: '取消',
                       type: 'warning'
                     }).then(() => {
                         this.$http.post('/yongxu/Login/Occupancy_Landing',data).then((res)=>{
                         //  console.log(res)
                              localStorage.setItem('userId',res.data.User_Id)
                              localStorage.setItem('sessionId',res.data.sessionId)
                              localStorage.setItem('Rule_Id',res.data.Rule_Id)
                              localStorage.setItem('Expiration_Date',res.data.Expiration_Date)
                              localStorage.setItem('Username',res.data.Username)
                              if(this.checkedState){ 
                              this.setCookie('user',this.username,7); //保存帐号到cookie，有效期7天
                              this.setCookie('pswd',this.password,7); //保存密码到cookie，有效期7天
                              }else{
                              this.delCookie('user');
                              this.delCookie('pswd');
                        }
                        }).then(()=>{
                            this.$http.get('/yongxu/Base/User_One_Menu',{params:{userid:localStorage.getItem('userId')}}).then((res)=>{

                            var path = res.data[0].Item_Path
                            this.$router.push('/index/'+path) 
                        })
                         })
                     }).catch(() => {
                       this.$message({
                         type: 'info',
                         message: '已取消删除'
                       });          
                     });
                     return false
                 }
                if(res.data == 4){
                    if(localStorage.getItem('userId')){
                        //console.log('haseLoscas'+localStorage.getItem('userId'))
                          this.$http.get('/yongxu/Login/Exit_Landing',{params:{
                                sessionId:localStorage.getItem('sessionId')
                            }}).then((res)=>{
                                    if(res.data == true){
                                        localStorage.removeItem('userId')
                                        localStorage.removeItem('sessionId')
                                        localStorage.removeItem('Rule_Id')
                                        localStorage.removeItem('Expiration_Date')
                                        localStorage.removeItem('Username')
                                        }
                        })
                    }
                    this.$http.post('/yongxu/Login/Rsa_Land',data).then((res)=>{
                        //console.log(res)
                    localStorage.setItem('userId',res.data.User_Id)
                    localStorage.setItem('sessionId',res.data.sessionId)
                    localStorage.setItem('Rule_Id',res.data.Rule_Id)
                    localStorage.setItem('Expiration_Date',res.data.Expiration_Date)
                    localStorage.setItem('Username',res.data.Username)
                    if(this.checkedState){ 
                    this.setCookie('user',this.username,7); //保存帐号到cookie，有效期7天
                    this.setCookie('pswd',this.password,7); //保存密码到cookie，有效期7天
                    }else{
                    this.delCookie('user');
                    this.delCookie('pswd');
                    }
                    }).then(()=>{
                        this.$http.get('/yongxu/Base/User_One_Menu',{params:{userid:localStorage.getItem('userId')}}).then((res)=>{
                        //console.log(res)
                        var path = res.data[0].Item_Path
                        this.$router.push('/index/'+path) 
                    })
                    }) 
                }
              }).catch((err)=>{
                //   this.$message({
                //             message:'服务器出错,请重试',
                //             type:'warning'
                //         }); 
                        //this.getPublicKey()
              })   
        },
         //设置cookie
                setCookie:function(name,value,day){
                var date = new Date();
                date.setDate(date.getDate() + day);
                document.cookie = name + '=' + value + ';expires='+ date;
                },
            //获取cookie
                getCookie:function(name){
                var reg = RegExp(name+'=([^;]+)');
                var arr = document.cookie.match(reg);
                if(arr){
                return arr[1];
                }else{
                return '';
                }
                },
            //删除cookie
                delCookie:function(name){
                    this.setCookie(name,null,-1);
                },
            changeCheck:function(){  
              this.checkedState =!this.checkedState
            },
            getUserPas:function(){
                if(this.getCookie('user')|| this.getCookie('pswd')){
                    this.username =this.getCookie('user')
                    this.password = this.getCookie('pswd')
                    this.checkedState = true
                }    
            },
            // getPublicKey(){
            //       this.$http.post('/yongxu/Login/PublicKey').then((res)=>{
            //           //  console.log(res)
            //             this.pub = res.data.PublicKey
            //              }).catch((err)=>{
            //             this.$message({
            //             message:'服务器异常',
            //             type:'warning'
            //             })
            //         })
            // },
            checkIsLogin(){
                this.checckIsHas()
            },
            checckIsHas(){
                  if(localStorage.getItem('userId')){
                       // console.log('hse')
                        this.$http.get('/yongxu/Base/User_One_Menu',{params:{userid:localStorage.getItem('userId')}}).then((res)=>{
                        //console.log(res)
                        var path = res.data[0].Item_Path
                       // console.log(path)
                        this.$router.push('/index/'+path) 
                        })
                         return false
                    }
            }
          
          
    },
    mounted(){
    
      this.checckIsHas()
      // this.getPublicKey()
      this.getUserPas()
    },
    watch:{
    openId:function(n){
        
    },
      getOpenid:function(n){
        //    console.log('1111111111111111111')
        //    console.log(n)
           // this.weixindenglu()
        },
    },
    computed:{
        
    },
    components:{
        wxlogin
    }
}
</script>
<style lang="sass" scoped>
@import '../assets/sass/login.scss';
</style>
<style>
.impowerBox .qrcode{
  width: 240px !important;
}
</style>



