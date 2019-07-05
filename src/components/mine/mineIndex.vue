<template>
    <div class="mine case">
      <div class="flex save"><span @click="goToEdit()"><i class="el-icon-edit"></i></span></div>
        <div class="mine-top flex">
            <div class="pic" style="border: 1px solid #999999;">
                   <img :src="api+pic" alt="">
            </div>     
            <div class="mine-top-form flex">
               
               <div class="mine-div flex">
                    <p class="mine-p">律师姓名: </p><span class="mine-span">{{userName}}</span>
               </div>
               <div class="mine-div flex">
                    <p class="mine-p">职业证号: </p><span class="mine-span">{{number}}</span>
               </div>
               <div class="mine-div flex">
                    <p class="mine-p">职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务: </p><span class="mine-span">{{job}}</span>
               </div>
               <div class="mine-div flex">
                    <p class="mine-p">联系方式: </p><span class="mine-span">{{tel}}</span>
               </div>
                 <div class="mine-div flex">
                    <p class="mine-p">电子邮件: </p><span class="mine-span">{{email}}</span>
               </div>
              
               
              
            </div>
        </div>
        
        
        <div class="mine-bottom flex">
            <div class="mine-bottom-left flex">
                <div class="mine-bottom-left-div2">
                    <p class="mine-title">职业领域:</p>
                     <p class="mine-title-p">{{jobTextare}}</p>
                </div>

                 <div class="mine-bottom-left-div2">
                    <p class="mine-title">教育背景:</p>
                    <p class="mine-title-p" v-html="teach"></p>
                </div>

                <div class="mine-bottom-left-div2">
                   <p class="mine-title">工作经历:</p>
                   
                         <p class="mine-title-p"  v-html="jobStrory">
                          
                        </p>
                      
                </div>
                <div class="mine-bottom-left-div2">
                    <p class="mine-title">社会职务:</p>
                     <p class="mine-title-p" v-html="jobSociety"></p>
                </div>
                <div class="mine-bottom-left-div2">
                   <p class="mine-title">获得荣誉:</p>
                     <p class="mine-title-p" v-html="honor"></p>
                </div>
            </div>
            <div class="mine-bottom-right flex">
                  <div class="mine-bottom-left-div2">
                     <p class="mine-title">主要业绩:</p>
                    <p class="mine-title-p" v-html="grade"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        textarea:'',
        dialogImageUrl: '',
        dialogVisible: false,
          value:'',
          contentHtml:'第九届中华全国律师协会理事<br/>广东省律师协会副会长<br/>广州市律师协会名誉会长<br/><br/>广东省西南政法学校友会会长<br/><br/>广东省安徽商会监事长<br/><br/>中华全国律师协会政府法律顾问委员会委员<br/><br/>广东省第十二届人大常委会监督司法咨询专家<br/><br/>广东省检察机关规范司法行为监督员<br/><br/>广东法院诉讼服务窗口监督员<br/><br/>广东省法官检察官遴选委员<br/><br/>广州市第十四届人大常委会立法顾问<br/><br/>政协第十二届广州市委员会法制工作顾问<br/><br/>广东省人民政府法律顾问<br/><br/>广州市政府兼职法律顾问<br/><br/>广州市人民政府法律咨询专家<br/><br/>广州市仲裁委员会仲裁员<br/><br/>华南国际经济贸易仲裁委员会仲裁员<br/><br/>西南政法大学LPC兼职教授<br/><br/>中山大学、华南理工大学、暨南大学兼职硕士研究生导师等',
          userName:'',
          number:'',
          job:'',
          email:'',
          tel:'',
          //职业领域
          jobTextare:'',
          teach:'',
          jobStrory:'',
          jobSociety:'',
          honor:'',
          grade:'',
          Id:'',
          pic:'',
          api:'',
          touxiang:'',

       }
     
    },
    created(){
    },
    methods:{
         handleRemove(file, fileList) {
        //console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      goToEdit(){
          this.$router.push('./mineEdit/'+this.Id)
      },
      getMineList(){
          this.$http.get('/yongxu/Personal/Display_Information',{params:{
              User_Id:localStorage.getItem('userId')
          }}).then((res)=>{
              //console.log(res)
                this.userName = res.data.Staff_Name
                this.Id = res.data.Id
                this.honor = res.data.Honor
                this.pic = res.data.Avatar_Path
                this.tel = res.data.Contact_Information
                this.value = res.data.Position_Id
                this.number = res.data.Occupation_Number
                this.teach = res.data.Education
                this.email = res.data.Contact_Mailbox
                this.jobStrory = res.data.Work_History
                this.grade = res.data.Achievement
                this.jobSociety = res.data.Social_Duty
                this.jobTextare = res.data.practice_Areas
          }).then((res)=>{
              this.getJobList()
          })
      },
        getJobList(){
              this.$http.get('/yongxu/Personal/Position').then((res)=>{
                 
                  if(res.data[this.value].Position_Name == undefined || res.data[this.value].Position_Name == ''){
                      this.job = ''
                  }else{
                      this.job =  this.job = res.data[this.value].Position_Name
                  }
              })
        },
    },
  
    mounted(){
          this.api = this.$api
        this.getMineList()
        
    }
}
</script>
<style>
@import '../../assets/sass/main.css';

.mine{
    padding-bottom: 20px;
}
.mine-top{
    justify-content: flex-start;
    min-height: 225px;
}
.mine-top-form{
    flex-direction: column;
    margin-left: 20px;
    
}
.mine-bottom{
    flex-direction: row;
    justify-content: flex-start;
}
.mine-bottom-left{
    flex-direction: column;
    width: 41%;
}
.mine-bottom-left-div2{
    margin-top: 20px;
}
.mine-bottom-left-div2 p{
    margin-bottom: 10px;
}
.w-all{
    width: 100%;
}
.mine-bottom-right{
    margin-left: 100px;
}
.save{
    flex-direction: row;
    justify-content: flex-end;
}
.save span:hover {
   cursor: pointer;
}
.save span i {
    font-size: 18px;
}
.pic{
    width: 148px;
    height: 200px;
}
.pic img{
    width: 100%;
    height: 100%;
   
}
.mine-div{
 margin-top: 20px;
 flex-direction: row;
}
.mine-p{
    font-weight: 600;
    min-width: 70px;
   letter-spacing:1px;
   font-size: 16px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}
.mine-span{
    font-weight: 500;
    margin-left:10px;
}
.mine-title{
    color: #813032;
    font-size: 16px;
    font-weight: 600;
}
.mine-title-p{
    font-size: 14px;
    font-weight: 500;
    min-height: 100px;
}

</style>


