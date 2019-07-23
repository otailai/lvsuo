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
                 <div class="login-right-form flex">
                         <div class="title"></div>
                        <input type="text" placeholder="用户名" class="user-input" onfocus="this.placeholder=''" onblur="this.placeholder='用户名'" v-model="username">
                        <input type="password" placeholder="密码" class="user-input" onfocus="this.placeholder=''" onblur="this.placeholder='密码'" v-model="password">
                        <button class="login-btn" @click="bindUser()">账号绑定</button> 
                        <div class="weixin1 weixin flex" @click="changeLogin()"><i class="iconfont icon-changyonglogo28"></i><p>账号密码登陆</p></div>
                 </div>     
             </div>
           
    </div>
    </div>
</template>
<script>
import qs from 'qs';
import MsgBus from './vueEvent';
import md5 from 'js-md5';
export default {
    data(){
        return{
            code:'',
            username:'',
            password:'',
            openId:'',
            unionid:'',
        }

    },
    mounted(){
      
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
                this.code = theRequest.code
                if(this.code==''||this.code==null){
                       this.$message({
                         message:'二维码已过期请重新登录',
                         type:'warning'
                     })
                       this.$router.push({path:'/'})
                     return false
                }else{
                        this.openID()
                } 
        }
        },
        openID(){
            this.$http.get('/yongxu/Login/Wechat',{params:{
                code:this.code,
                AppID:'wx0b5e209ee6a56c2f',
                AppSecret:'73a3137fca1d7e15366b0ede8485bbaf',
            }}).then((res)=>{ 
                console.log(res)
                if(res.data.sign == 1){
                     this.$message({
                         message:'检测到您尚未绑定微信，请先绑定',
                         type:'warning'
                     })
                    this.unionid = res.data.unionid
                }else{
                    this.password=res.data.Password
                    this.username = res.data.Username
                    var str = this.username+'&&'+this.password
                    var data = qs.stringify({
                        str:str
                    });
                    this.$http.post('/yongxu/Login/Judging_Landing',data).then((res)=>{
                        console.log(res)
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
                        }).then(()=>{
                            this.$http.get('/yongxu/Base/User_One_Menu',{params:{userid:localStorage.getItem('userId')}}).then((res)=>{
                            var path = res.data[0].Item_Path
                            this.$router.push('/index/'+path) 
                        })
                         })
                     }).catch(()=>{
                              this.$router.push({path:'/'})
                        })
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
                    }).then(()=>{
                        this.$http.get('/yongxu/Base/User_One_Menu',{params:{userid:localStorage.getItem('userId')}}).then((res)=>{
                        var path = res.data[0].Item_Path
                        this.$router.push('/index/'+path) 
                    })
                    }) 
                }
                      })
                    return false
                }
            })
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
        bindUser(){
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
               var str = this.username+'&&'+md5(this.password)
               this.$http.get('/yongxu/Login/Wechat_Binding',{params:{str:str,unionid:this.unionid}}).then((res)=>{
                   if(res.data == 2){
                     this.$message({
                    message:'绑定成功',
                    type:'success'
                    });
                    this.$router.push({path:'/'})
                   }
                   if(res.data == 1){
                 this.$message({
                    message:'未找到此用户',
                    type:'warning'
                });
                return false
                   }
                     if(res.data == 3){
                 this.$message({
                    message:'密码错误',
                    type:'warning'
                });
                return false
                   }
                      if(res.data == 4){
                 this.$message({
                    message:'绑定失败',
                    type:'warning'
                });
                return false
                   }
            })
        },
        changeLogin(){
            this.$router.push({path:'/'})
        }
    }
}
</script>
<style lang="sass" scoped>
@import '../assets/sass/login.scss';
</style>
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


