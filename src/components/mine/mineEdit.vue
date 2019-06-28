<template>
    <div class="mine case">
      <div class="flex save" @click="addMineInfo()"><span><i class="el-icon-printer"></i></span></div>
        <div class="mine-top flex">
            <div class="pic">
                   <div class="mine-top-img">
                        
                    <el-upload
                     class="avatar-uploader"
                     action="/yongxu/Base/uploadRawFile"
                    :show-file-list="false"
                    :on-success="successFile"
                    :before-upload="beforeFile"
                    :on-progress="progressFile"
                    :on-error="errorFile"
                    :data='nameData'
                     :on-remove="handleRemove"
                     accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF"
                    >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <img  v-else :src="'http://java.gzbigbang.cn'+pic" class="avatar">
                    <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
                    </el-upload>
                  
            </div>
            </div>
         
            <div class="mine-top-form flex">
                <input type="text" class="common-input" placeholder="请输入您的姓名" v-model="name"/>
                <input type="text" class="common-input" placeholder="请输入您的职业证号" v-model="number"/>
                 <el-select v-model="value" placeholder="请选择您的职位" style="width:200px">
                    <el-option
                    v-for="item in options"
                    :key="item.Id"
                    :label="item.Position_Name"
                    :value="item.Id">
                    </el-option>
                    </el-select>

                <input type="text" class="common-input" placeholder="请输入您的联系方式" v-model="tel"/>
                <input type="text" class="common-input" placeholder="请输入您的邮箱" v-model="email"/>
              
            </div>
        </div>
        
        
        
        <div class="mine-bottom flex">
            <div class="mine-bottom-left flex">
                <div class="mine-bottom-left-div1">
                    <p>职业领域:</p>
                     <input type="text" class="common-input w-all" v-model="jobTextare"/>
                </div>

                 <div class="mine-bottom-left-div1" style="min-height:280px;margin-top:20px">
                    <p>教育背景:</p>
                    <!-- <textarea name="" id="" cols="49" rows="6" class="textarea" v-model="teach"></textarea> -->
                    <quill-editor v-model="teach" ref="myQuillEditor" :options="editorOption" style="width:366px; height: 180px;"  ></quill-editor>
                    
                    
                </div>
                <div class="mine-bottom-left-div">
                    <p>工作经历:</p>
                    <!-- <textarea name="" id="" cols="49" rows="6" class="textarea" v-model="job"></textarea> -->
                    <quill-editor v-model="job" ref="myQuillEditor" :options="editorOption" style="width:366px; height: 280px;"  ></quill-editor>

                </div>
                <div class="mine-bottom-left-div">
                    <p>社会职务:</p>
                    <quill-editor v-model="job1" ref="myQuillEditor" :options="editorOption" style="width:366px; height: 280px;"  ></quill-editor>

                    <!-- <textarea name="" id="" cols="49" rows="6" class="textarea" v-model="job1"></textarea> -->
                </div>
                <div class="mine-bottom-left-div">
                    <p>获得荣誉:</p>
                    <quill-editor v-model="honor" ref="myQuillEditor" :options="editorOption" style="width:366px; height: 280px;"  ></quill-editor>

                    <!-- <textarea name="" id="" cols="49" rows="6" class="textarea" v-model="honor"></textarea> -->
                </div>
            </div>
            <div class="mine-bottom-right flex">
                  <div class="mine-bottom-left-div">
                    <p>主要业绩:</p>
                    <quill-editor v-model="grade" ref="myQuillEditor" :options="editorOption" style="width:366px; height: 500px;"  ></quill-editor>

                    <!-- <textarea name="" id="" cols="40" rows="8" class="textarea" v-model="grade"></textarea> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            textarea1:'',
            textarea:'',
             dialogImageUrl: '',
             dialogVisible: false,
            options: [],
            value:'',
            name:'',
            job:'',
            job1:'',
            number:'',
            tel:'',
            email:'',
            jobTextare:'',
            teach:'',
            honor:'',
            grade:'',
            pic_path:'',
            //上传
            code:'',
            fileName:'',
            nameData:{
                 File_Name:'',
            },
            File_Name:'',
            fileName1:'',
            Suffix_Name:'',
            size:'',
              //富文本
            editorOption:{
                modules:{
                  
                },
                placeholder:'',
                theme:'snow'
            },
            pic:'',
            imageUrl: ''
        }    
    },
     inject:['reload'],
    methods:{
        handleRemove(file, fileList) {
            //console.log(file, fileList);
        },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      getcontent(){

          var content = this.textarea.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;');
         //console.log(content)
      },
      addMineInfo(){
            if(this.fileName=='' || this.fileName==null){
              this.$message({
                  message:'请选择头像',
                  type:'warning'
              })
              return false
          }
            if(this.number == '' || this.number==undefined){
              this.$message({
                  message:'职业证号不能为空',
                  type:'warning'
              })
              return false
          }
        //   if(this.number.length >=22){
        //       this.$message({
        //           message:'职业证号格式不正确',
        //           type:'warning'
        //       })
        //       return false
        //   }
           if(this.value== '' || this.value==null){
              this.$message({
                  message:'职位不能为空',
                  type:'warning'
              })
              return false
          }
             var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
           if(!myreg.test(this.tel)){
              this.$message({
                  message:'请填写正确的手机号',
                  type:'warning'
              })
              return false
          }
         var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
            if(!reg.test(this.email)){
              this.$message({
                  message:'请输入正确的邮箱',
                  type:'warning'
              })
              return false
          }
       
          this.$http.post('/yongxu/Personal/Save_Information',{
              //replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;')
              Id:this.$route.params.id,
              Avatar_Path:this.fileName,
              Honor:this.honor,
              Occupation_Number:this.number,
              Position_Id:this.value,
              Contact_Information:this.tel,
              Contact_Mailbox:this.email,
              practice_Areas:this.jobTextare,
              Achievement:this.grade,
              Education:this.teach,
              Work_History:this.job,
              Social_Duty:this.job1,
          }).then((res)=>{
              //console.log(res)
              if(res.data==true){
                  this.$message({
                      type:'success',
                      message:'更新成功'
                      })
                      this.getMineList()
                      this.reload()
                      
              }else{
                   this.$message({
                      type:'warning',
                      message:'更新失败'
                      })
              }
          }).catch((err)=>{
               this.$message({
                      type:'warning',
                      message:'服务器异常'
                      })
          })
      },
      
        //回调
            successFile(res,file){
            //console.log(res)
            if(res.code == 200){
                    this.code = 200
                    this.File_Name = res.File_Name
                    this.Suffix_Name =res.Suffix_Name
                    this.fileName = res.fileName
                    this.size = res.size
                    this.imageUrl = URL.createObjectURL(file.raw);
                    //console.log(this.fileName)
                   this.$message({
                    message:res.message,
                    type:'success'
                });  
            } 
          },
          errorFile(){
              this.$message({
                    message:'上传失败',
                    type:'warning'
                });  
          },
          progressFile(event, file, fileList){
            //console.log(file)
            return false
          },
        beforeFile(file){
            console.log(file.type)
            const isJPG = file.type === 'image/jpeg';
            const isGIF = file.type === 'image/gif';
            const isPNG = file.type === 'image/png';
            const isBMP = file.type === 'image/bmp';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isGIF && !isPNG && !isBMP) {
               this.$message.error('上传图片必须是JPG/GIF/PNG/BMP 格式!');
               return false
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
               return false
             }
             var json = file.name.split(".")
             var file_name =json[0];
            this.fileName = file_name
            this.nameData.File_Name = this.fileName 
          },
    //       getMineList(){
    //       this.$http.get('/yongxu/Personal/Display_Information',{params:{
    //           User_Id:localStorage.getItem('userId')
    //       }}).then((res)=>{
    //             this.name = res.data.Staff_Name
    //       })
    //   },
        getMineList(){
          this.$http.get('/yongxu/Personal/Display_Information',{params:{
              User_Id:localStorage.getItem('userId')
          }}).then((res)=>{
              //console.log(res)
                this.name = res.data.Staff_Name
                this.Id = res.data.Id
                this.honor = res.data.Honor
                this.pic = res.data.Avatar_Path
                this.fileName = res.data.Avatar_Path
                this.tel = res.data.Contact_Information
                this.value = res.data.Position_Id
                this.number = res.data.Occupation_Number
                this.teach = res.data.Education
                //console.log(this.teach)
                this.email = res.data.Contact_Mailbox
                this.job = res.data.Work_History
                this.grade = res.data.Achievement
                this.job1 = res.data.Social_Duty
                this.jobTextare = res.data.practice_Areas
          })
      },
      getJobList(){
             this.$http.get('/yongxu/Personal/Position').then((res)=>{
                this.options = res.data
          })
          
      }
    },
    mounted(){
        this.getMineList()
        this.getJobList()
        
    }
}
</script>
<style>
@import '../../assets/sass/main.css';
</style>

<style>
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
    justify-content: space-between;
}
.mine-bottom{
    flex-direction: row;
    justify-content: flex-start;
}
.mine-bottom-left{
    flex-direction: column;
    width: 41%;
    padding-bottom: 100px;
}
.mine-bottom-left-div{
    margin-top: 20px;
}
.mine-bottom-left-div p{
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
}
.ql-editor{
   
}
.mine-bottom-left-div{
    min-height: 400px;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .avatar-uploader{
      width: 148px;
    height: 178px;
}
.el-upload{
     width: 148px;
    height: 178px;
}
</style>


