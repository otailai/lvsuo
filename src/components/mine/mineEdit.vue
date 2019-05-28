<template>
    <div class="mine case">
      <div class="flex save"><span><i class="el-icon-printer"></i></span></div>
        <div class="mine-top flex">
            <div class="pic">
                   <div class="mine-top-img">
                    <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove" :limit="1">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
            </div>
            </div>
         
            <div class="mine-top-form flex">
                <input type="text" class="common-input" />
                <input type="text" class="common-input" />
                 <el-select v-model="value1" placeholder="请选择" style="width:200px">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                    </el-select>

                <input type="text" class="common-input" />
                <input type="text" class="common-input" />
              
            </div>
        </div>
        
        
        
        <div class="mine-bottom flex">
            <div class="mine-bottom-left flex">
                <div class="mine-bottom-left-div">
                    <p>职业领域:</p>
                     <input type="text" class="common-input w-all" />
                </div>

                 <div class="mine-bottom-left-div">
                    <p>职业领域1:</p>
                    <textarea name="" id="" cols="49" rows="6" class="textarea" v-model="textarea1">
                    
                    </textarea>
                </div>
                <div class="mine-bottom-left-div">
                    <p>职业领域:</p>
                    <textarea name="" id="" cols="49" rows="6" class="textarea" v-model="textarea"></textarea>
                </div>
                <div class="mine-bottom-left-div">
                    <p>职业领域:</p>
                    <textarea name="" id="" cols="49" rows="6" class="textarea" v-model="textarea"></textarea>
                </div>
                <div class="mine-bottom-left-div">
                    <p>职业领域:</p>
                    <textarea name="" id="" cols="49" rows="6" class="textarea" v-model="textarea"></textarea>
                </div>
            </div>
            <div class="mine-bottom-right flex">
                  <div class="mine-bottom-left-div">
                    <p>职业领域:</p>
                    <textarea name="" id="" cols="40" rows="8" class="textarea" v-model="textarea"></textarea>
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
               options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
            value1:'选项1',
        }
    },
    methods:{
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      getcontent(){
          var content = this.textarea.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;');
         console.log(content)
      }
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
    justify-content: space-between;
}
.mine-bottom{
    flex-direction: row;
    justify-content: flex-start;
}
.mine-bottom-left{
    flex-direction: column;
    width: 41%;
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
</style>


