<template>
<div id="topMenu" class="topMenu">


<div class="topMenu-head">
<el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
            <div class="logo">

            </div>
        </el-col> 
  
        <el-col :span="18">
            <div class="userInfo">
                <el-row type="flex" class="row-bg" justify="end">
                    <div class="username flex" @click="goTOMine()">
                     
                             <img src="../assets/img/lol.jpg" alt="" class="username-hello" v-if="pic == '' || pic == undefined">
                             <img :src="api+pic" alt="" class="username-hello" v-if="pic != undefined">
                           
  
                      
                        <span class="username-name">{{name}}</span>
                    </div>
                     <div class="login-out" @click="changePwd()">
                        <i class=" iconfont icon-quanxianguanli1" style="font-size:17px;"></i>
                        <span>修改密码</span>
                    </div>
                    <div class="login-out" @click="loginOut()">
                        <i class=" iconfont icon-dingbudaohang-zhangh"></i>
                        <span>退出</span>
                    </div>
                </el-row>   
            </div>
        </el-col> 
</el-row>
</div>

<div class="topMenu-nav">
    <ul class="flex">
            <router-link :to="'/index/'+v.Item_Path" class="flex"  tag="li"  v-for="(v,i) in arr"  @click="changeLi(i)"  :key="i">
            <!-- <div v-if="v.Item_Name == '审核'">
                 <el-badge value="new" class="item" >
                            <div :class="'nav-icon iconfont '+' '+v.Icon "></div>
                            <p>{{v.Item_Name}}</p>
                </el-badge>
            </div>
            <div v-else>
                 <div :class="'nav-icon iconfont '+' '+v.Icon "></div>
            <p>{{v.Item_Name}}</p>
            </div> -->
               <div>
                    <div :class="'nav-icon iconfont '+' '+v.Icon "></div>
                            <p>{{v.Item_Name}}</p>
               </div>
           
            </router-link>
         
        
            <li class="flex" v-popover:popover2 v-show="arr1Show==false">
              
                <div class='nav-icon iconfont icon-icon_set_up'></div>
                     <p>设置</p>
              
                    
           </li>
                <el-popover ref="popover2" placement="bottom-end" trigger="click">
                    <div>
                      <ul class="flex">
                          <router-link v-for="(v,i) in arr1"    :to="'/index/'+v.Item_Path" tag="li" :key="i" style="margin-left:20px;" class="setting flex" >
                              <div :class="'nav-icon iconfont '+' '+v.Icon "></div>
                              <p>{{v.Item_Name}}</p>
                         </router-link>
                      </ul>
                 </div>
                </el-popover>
    </ul>
            
</div>
  <el-dialog  :visible.sync="dialogFormVisible" :append-to-body='true' top="300px" width="800px"> 
                         <div class="dialogFormVisible_box">
                            
                          <div class="flex row margin_t">
                            <p class="flex_title">旧密码：</p>
                         
                            <input type="text" class="this_input" v-model="oldPwd" placeholder="请输入原密码">
                         
                          </div>

                            <div class="flex row margin_t">
                            <p class="flex_title">新密码：</p>
                         
                            <input type="text" class="this_input" v-model="newPwd" placeholder="请输入新密码">
                         
                          </div>

                            <div class="flex row margin_t">
                            <p class="flex_title">确认新密码：</p>
                         
                            <input type="text" class="this_input" v-model="checKNewPwd" placeholder="请确认新密码">
                         
                          </div>

                           
                         </div>
                   
                        <div slot="footer" class="dialog-footer">
                            <div class="flex row margin_t">
                            <p class="flex_title"></p>
                            <button @click="sendOk()" class="pwd_btn">确 定</button>
                            </div>
                        </div>
                         <div slot="title" class="dialog-title">
                     <div class="dialogFormVisivleHeader_left flex">修改密码</div>
                    </div>
                      </el-dialog>
</div>


    
</template>
<script>
import { constants } from 'fs';
import returnCitySN from 'returnCitySN' // 新浪 获取设备IP
import md5 from 'js-md5';
export default {
    data(){
        return{
            // arr:[{Item_Name:'案件',Item_Path:'/index/caseIndex',Icon:'icon-anjian'},
            // {Item_Name:'客户',Item_Path:'/index/customerIndex',Icon:'icon-kehu'},
            // {Item_Name:'文书',Item_Path:'/index/documentIndex',Icon:'icon-weimingming'},
            // {Item_Name:'审核',Item_Path:'/index/auditingIndex',Icon:'icon-bumenzhinenggongzuoshenhe'},
            // {Item_Name:'统计',Item_Path:'/index/countIndex',Icon:'icon-tongji'},
            // // {Item_Name:'设置',Item_Path:'/index/auditingIndex',Icon:'icon-icon_set_up'}
            // ],
            arr:[],
            // arr1:[{Item_Name:'合同模板',Item_Path:'/index/setContract',Icon:'icon-anjian'},
            // {Item_Name:'组织架构',Item_Path:'/index/setIndex',Icon:'icon-kehu'},
            // {Item_Name:'权限管理',Item_Path:'/index/setPower',Icon:'icon-weimingming'},
            // {Item_Name:'基础数据',Item_Path:'/index/setBase',Icon:'icon-bumenzhinenggongzuoshenhe'},
            // ],
            arr1:[],
            api:'',
            cur:0,
            name:'',
            pic:'',
            newPwd:'',
            oldPwd:'',
            checKNewPwd:'',
            dialogFormVisible:false,
            arr1Show:false,
            touxiang:'',
        }
    },
    created(){    
    },
    methods:{
      
        changeLi:function(i){
            this.cur=i;
        },
        loginOut:function(){
            // localStorage.removeItem('userId')
            // localStorage.removeItem('sessionId')
            // localStorage.removeItem('Rule_Id')
            // localStorage.removeItem('Expiration_Date')
            // localStorage.removeItem('Username')
            this.$http.get('/yongxu/Login/Exit_Landing',{params:{
            sessionId:localStorage.getItem('sessionId')
            }}).then((res)=>{
           //console.log(res)
            if(res.data == true){
                localStorage.removeItem('userId')
                localStorage.removeItem('sessionId')
                localStorage.removeItem('Rule_Id')
                localStorage.removeItem('Expiration_Date')
                localStorage.removeItem('Username')
                this.$router.push('/')
            }else{
                this.$message({
                    message:'登出失败',
                    type:"warning"
                })
                }
            }).catch((err)=>{
                localStorage.removeItem('userId')
                localStorage.removeItem('sessionId')
                localStorage.removeItem('Rule_Id')
                localStorage.removeItem('Expiration_Date')
                localStorage.removeItem('Username')
                 this.$router.push('/')
            })
        },
            loginOut1:function(){
                localStorage.removeItem('userId')
                localStorage.removeItem('sessionId')
                localStorage.removeItem('Rule_Id')
                localStorage.removeItem('Expiration_Date')
                localStorage.removeItem('Username')
                this.$router.push('/')
        },
        getTopMenu:function(){
            this.$http.get('/yongxu/Base/User_One_Menu',{params:{userid:localStorage.getItem('userId')}}).then((res)=>{
                this.arr = res.data
            }).then(()=>{
                  var menuArr = []
                    for(var i =0 ;i<this.arr.length;i++){
                    menuArr[i] = this.arr[i].Item_Path
                    }
                    //console.log('/index/'+menuArr[0])
                    if(this.$route.path == '/index' || this.$route.path == '/index/'){
                    this.$router.push('/index/'+menuArr[0])
                    }
                    })
        },
        getSetTopMenu:function(){
              this.$http.get('/yongxu/Base/User_Two_Menu',{params:{Menu_Id:7,User_Id:localStorage.getItem('userId')}}).then((res)=>{
                  if(res.data.length ===0){
                     this.arr1Show = true
                  }
                    this.arr1 = res.data
                   
            })
        },
         goTONew:function(menu){
            this.$router.push(menu)
        },
        goTOMine:function(){
             this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
                 console.log(res)
                 if(res.data == 1){
                     this.$message({
                         message:'账号异地登陆 强制退出',
                         type:'warning'
                     })
                     this.loginOut1()
                     return false
                 }
                 if(res.data == 3){
                     this.$message({
                         message:'登录已过期',
                         type:'warning'
                     })
                     this.loginOut1()
                     return false
                 }else{
                    this.$router.push('/index/mineIndex')
                 }
              })
          
        },
        getUserInfo:function(){
            this.$http.get('/yongxu/Index/Get_User_Information',{params:{
                User_Id:localStorage.getItem('userId')
            }}).then((res)=>{
                this.name =res.data.Staff_Name
                this.pic = res.data.Avatar_Path
            })
        },
        changePwd:function(){
              this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
               //  console.log(res)
                if(res.data == 1){
                     this.$message({
                         message:'账号异地登陆 强制退出',
                         type:'warning'
                     })
                     this.loginOut1()
                     return false
                 }
                 if(res.data == 3){
                     this.$message({
                         message:'登录已过期',
                         type:'warning'
                     })
                     this.loginOut1()
                     return false
                 }else{
                        this.dialogFormVisible = true
                 }
              })
        },
        sendOk:function(){
            if(this.newPwd.length <6){
                    this.$message({
                        type:'warning',
                        message:'新密码不能少于六位'
                    })
                    return false
            }
             if(this.newPwd.length >16){
                    this.$message({
                        type:'warning',
                        message:'新密码不能大于16位'
                    })
                    return false
            }
              if(this.newPwd != this.checKNewPwd){
                    this.$message({
                        type:'warning',
                        message:'两次密码输入不一致'
                    })
                    return false
            }
             if(this.newPwd == this.oldPwd){
                    this.$message({
                        type:'warning',
                        message:'新旧密码不能一致'
                    })
                    return false
            }
            this.$http.get('/yongxu/Personal/Upd_Pwd',{params:{
                Original_Pwd:md5(this.oldPwd),
                New_Pwd:md5(this.newPwd),
                User_Id:localStorage.getItem('userId')
            }}).then((res)=>{
                console.log(res)
                if(res.data ==  2 ){
                    this.$message({
                        type:'success',
                        message:'修改成功'
                    })
                    this.dialogFormVisible = false
                    this.loginOut()
                }
                if(res.data ==  3 ){
                     this.$message({
                        type:'warning',
                        message:'修改失败'
                    })
                    return false
                }
                if(res.data ==  1 ){
                     this.$message({
                        type:'warning',
                        message:'原密码输入错误'
                    })
                    return false
                }
            }).catch((err)=>{
                    this.$message({
                        type:'warning',
                        message:'服务器异常'
                    })
            })
        },
       
    },
    mounted(){
        this.api = this.$api
        this.getTopMenu()
        this.getSetTopMenu()
        this.getUserInfo()
    },
    watch: {
         $route(to,from){  
            //console.log(to.path)
            //  this.$http.get('/yongxu/Login/Sel_Login_Status',{params:{sessionId:localStorage.getItem('sessionId'),User_Id:localStorage.getItem('userId')}}).then((res)=>{
            //    //  console.log(res)
            //      if(res.data == 1){
            //          this.$message({
            //              message:'账号异地登陆 强制退出',
            //              type:'warning'
            //          })
            //          this.loginOut1()
            //          return false
            //      }
            //      if(res.data == 3){
            //          this.$message({
            //              message:'登录已过期',
            //              type:'warning'
            //          })
            //          this.loginOut1()
            //          return false
            //      }
            //      else{
                       var path = to.path.split('/')[2]
                       var menuArr = []
                       for(var i =0 ;i<this.arr.length;i++){
                           menuArr[i] = this.arr[i].Item_Path
                       }
                       var menuArr1=[]
                       for(var i =0 ;i<this.arr1.length;i++){
                           menuArr1[i] = this.arr1[i].Item_Path
                       }
                       menuArr = menuArr.concat(menuArr1)
                       menuArr.push('mineIndex')
                       menuArr.push('mineEdit')
                       menuArr.push('caseAdd')
                       menuArr.push('caseEdit')
                       menuArr.push('caseUpdate')
                       menuArr.push('caseUpdate1')
                       menuArr.push('customerEdit')
                       menuArr.push('search1')
                        menuArr.push('customerUpdate')
                      // menuArr.push('LSMSFolder')
                      if(menuArr.indexOf(path) == -1){
                        //    this.$router.push('/web404')
                      }
            //      }
            //  })
           
        },
         watch:{
 
         }
    }   
}
</script>

<style lang="sass" scoped>
 @import '../assets/sass/element.scss';
 @import '../assets/sass/topMenu.scss';
</style>
<style>
 .dialogFormVisible_box{
  display: flex;
  flex-direction: column;
}
.margin_t{
  margin-top: 25px;
}
.flex_title{
  width: 150px;
  text-align: right;
  height: 45px;
  line-height: 45px;
  margin-right: 10px;
}
.this_input{
    background-color: #FFF;
    background-image: none;
    /* border-radius: 4px; */
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 45px;
    line-height: 45px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 500px;
}
.dialog-footer{
    /* display: flex;
    flex-direction: row;
    justify-content: center; */
}
.pwd_btn{
    width: 500px;
    height: 45px;
    background: #7E2C2E;
    outline: none;
    font-size: 18px;
    color:#ffffff;
    border: none;
    cursor: pointer;
}
</style>




