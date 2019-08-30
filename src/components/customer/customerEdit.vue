<template>
    <div class="caseAdd">
            <div class="add-top flex p-l">
                <p>所在位置：</p>
                <router-link to='/index/caseIndex' tag="a">客户管理</router-link>
                <p><i class="el-icon-arrow-right"></i></p>
                <p>客户详情</p>
            </div>
            
             <div class="add-content flex">
                                <div class="add-p flex">
                                    <span @click="closeBox()" class="flex">
                                <i class="el-icon-close" ref="icon_right"></i>
                                    </span>
                                </div>
                 
                 <div class="add-userinfo flex">
                        <p class="add-userinfo-p">客户基本信息</p>
                        <div class="flex add-userinfo-index">
                        <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title">客户编号</p>
                        <p>{{Customer_Number}}</p>
                        </div>
                        <div class="flex"><p class="title">客户名称(中)</p><p>{{Customer_Name_Zh}}</p></div>
                        <div class="flex"><p class="title">省/市地区</p><p>{{City}}</p></div>
                        <div class="flex"><p class="title">详细地址</p><p>{{Detailed_Address}}</p></div>
                        </div>
                <div class="add-userinfo-left flex">
                        <div class="flex"><p class="title">客户类型</p> 
                        <p>{{Customer_Type}}</p>
                        </div>
                        <div class="flex" v-show="Customer_Type_Id== 4"><p class="title">所属行业</p>
                        <p>{{industry}}</p>
                        </div>
                        <div class="flex" v-show="Customer_Type_Id== 4"><p class="title">职务</p>
                        <p>{{Position}}</p>
                        </div>
                        <div class="flex"><p class="title">联系方式</p>
                        <p>{{Contact_Party}}</p>
                        </div>
                        <div class="flex"><p class="title">是否常年客户</p>
                        <p>{{Identification}}</p>
                        </div>
                         <div class="flex"><p class="title">承办律师姓名</p>
                         <p v-for="(v,i)  in laywerNameArr" :key="i" style="margin-right:10px">{{v}}</p>
                       
                        </div>
                     
                        
                        
                </div>
                   
                    </div>
                 </div>
                  </div>
    </div>
           
</template>
<script>

export default {
    data(){
        return{
            Customer_Number:'',
            Customer_Name_Zh:'',
            City:'',
            Detailed_Address:'',
            Customer_Type:'',
            industry:'',
            Position:'',
            Contact_Party:'',
            Identification:'',
            Customer_Type_Id:'',
            Position:'',
            Customer:'',
            laywerNameArr:[],
        }
    },
    inject:["reload"],
    methods:{
        getCaseEdit(){
            // console.log(this.$route.params.id)
            this.$http.get('/yongxu/Customer/Get_Customer_Details',{params:{
                Id:this.$route.params.id,
            }}).then((res)=>{
               // console.log(res)
                    this.Contact_Party = res.data.Contact_Party
                    this.Detailed_Address =res.data.Detailed_Address
                    this.Customer_Type =res.data.Value
                    this.Customer_Name_Zh = res.data.Customer_Name_Zh
                    this.City =res.data.City
                    this.Customer_Number = res.data.Customer_Number
                    this.Identification = res.data.Identification
                    this.industry = res.data.Customer
                    this.Position = res.data.Position
                    this.Customer_Type_Id = res.data.Customer_Type
            })
        },
            getLaywer(){
                 this.$http.get('/yongxu/Customer/Show_All_Lawyers',{params:{
                   Id:this.$route.params.id,
                 }}).then((res)=>{
                  this.laywerNameArr = res.data
                 })
            },
            closeBox(){
                this.$router.go(-1);//返回上一层
            }
    },
    mounted(){
        this.getCaseEdit()
        this.getLaywer()
       
    },
    components:{
      
    },
}
</script>

<style lang="scss">
@import '../../assets/sass/caseAdd.scss';
.caseAdd .add-content .add-lawyer-parent .add-lawyer .add-lawyer-index .flex {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    width: 300px;
    height: 30px;
}
.caseAdd .add-content .add-Pay .add-Pay-index .add-Pay-index-child .flex:first-child{
       margin-top: 0px !important;
}
.caseAdd .add-content .add-Pay .add-Pay-index .add-Pay-index-child .flex {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
     margin-top: 10px;
}
.edit{
    margin: 20px auto;
    webkit-box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.3);
    padding-bottom:30px;
}
.edit-table{
    flex-direction: column;
    width: 92%;
    margin: auto;
}
.edit-table .edit-title{
    font-size: 18px;
    font-weight: 600;
}
.el-table--border td{
    border-right: none;
}
.el-table--border th{
    border-right: none;
}
.edit-title-line{
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;
}
.dialogFormVisible{
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
.dialogFormVisivleInput{
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .dialogFormVisivleInput_right input{
    width: 300px;
    height: 30px;
    margin-left: 30px;
  }
  .dialogFormVisivleFile{
    justify-content: center;
    margin-top: 25px;
    width: 80%;
  }
   .dialogFormVisivleFooter{
    flex-direction: row;
    justify-content: center;
    margin-top: 25px;
  }
  .serve_content{
        border: 1px solid #ccc;
    margin-left: 7px;
    margin-top: 10px;
}
.textarea{
    // width: 240;
    // min-height: 150px;
    // border: 1px solid #ccc;
}
</style>

