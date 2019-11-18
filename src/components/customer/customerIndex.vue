 <template>
    <div id="case" class="case"> 
         <div class="flex">
                <p>所在位置：</p>
                <p>案件管理</p>
                <p><i class="el-icon-arrow-right"></i></p>
                <P v-for="(v,i) in arr" :key="i+'a'" v-show="$store.state.customer.child_id  == i">
                    {{v.Item_Name}}
                </P>
            </div>
            <ul class="flex_ul">
            <router-link  tag='li'   v-for="(v,i) in arr" :key="i"  :to="'/index/customerIndex/'+v.Item_Path" class="flex_li" active-class="linkClass" @click.native="handleClick(i)">
            <p>{{v.Item_Name}}</p>
            <span></span>
            </router-link>
            </ul>
          <!-- </transition-group> -->
            <div class="flex case-child" >  
            </div>
            <div class="showTab">
            <ul class="showTab-ul">
              
              <li class="showTab-li">
                <!-- <transition mode="out-in"> -->
                <router-view></router-view>
                <!-- </transition> -->
                 </li>
              </ul>
            </div>
    </div>
</template>
<script>
import store from '../../vuex/store'
import mycustomer from './mycustomer'
import componycustomer from './componycustomer'
  export default {
    data() {
      return {
        child:0,
        child_cur:0,
        activeName: 'name0',
        index:0,
        cur:2,
        arr:[], 
        input23: '',
        title_show:0,
        tableData: [],
        tableDataShouQuan:[],
        value: '',
        menu_i:0,
          }
    },    
    methods: {
      handleClick(tab) {
       this.$store.commit('changeCustomerChild',tab)
      },
      changeLi(i,url){
        this.$http.get('/yongxu/Base/getUserJudge',{params:{userid:localStorage.getItem('userId'),url:url}}).then((res)=>{
          if(res.data == true){
              this.cur = i

          }else{
              this.$message({
                message:'没有权限',
                type:'warning'
                }); 
                return false
          }
        })  
      },
      getChildMenu(){
        this.$http.get('/yongxu/Base/User_Two_Menu',{params:{
          Menu_Id:3,
          User_Id:localStorage.getItem('userId')
        }}).then((res)=>{
          console.log(res)
          this.arr = res.data
          console.log(this.arr)
           var menuArr = []
          for(var i =0 ;i<this.arr.length;i++){
            menuArr[i] ='/index/customerIndex/'+this.arr[i].Item_Path
          }
          console.log(this.$store.state.customer.child_id)
          this.$router.push({path:'/index/customerIndex/'+this.arr[this.$store.state.customer.child_id].Item_Path}) 
        })
      },
     getActiveMenu(){
        var menuArr = []
        for(var i =0 ;i<this.arr.length;i++){
            menuArr[i] ='/index/customerIndex/'+this.arr[i].Item_Path
        }
        var i =menuArr.indexOf(this.$route.path)
      
        
        this.activeName = 'name'+i
      
     },
      searchData(){
        this.child = 1
      },
    },
    mounted(){
      this.getChildMenu()
         
    },
    activated() {
     this.getChildMenu()
    },
    watch:{
        
    },
    components:{
     componycustomer,
     mycustomer
    },
  };
</script>
<style>
@import '../../assets/sass/main.css';
.flex_ul{
  width: 100%;
  display: flex;
  flex: row;
  justify-content: center;
  height: 40px;
  line-height: 40px;
}
.flex_li{
  display: flex;
  color: #333333;
  font-size: 14px;
  width:90px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.flex_li p{
   cursor: pointer;
}

.linkClass{
      color: #7E2C2E;
}
.linkClass p {
      color: #7E2C2E;
      display: flex;
}
.linkClass  span{
  display: block;
  width: 70px;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 3px;
  background: #7E2C2E;
}
.v-enter,.v-leave-to{
         opacity:  0;/*透明度*/
         transform: translateX(150px);
     }
      /*入场(离场)动画的时间段   */
     .v-enter-active,.v-leave-active{
         transition: all 0.8s ease;

     }
     .my-enter,.my-leave-to{
         opacity:  0;/*透明度*/
         transform: translateY(70px);
     }
     .my-enter-active,.my-leave-active{
         transition: all 0.8s ease;

     }
</style>