<template>
  <div class="form1-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="副标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="desc">
        <el-input v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="商品类目" prop="category">
        <el-select v-model="ruleForm.category" placeholder="选择类目" @change="handleChange">
          <el-option :label="item.name" v-for="(item) in categoryList" :key="item.id" :value="item.id"></el-option>
        </el-select>
        <el-select v-model="ruleForm.c_item" placeholder="选择所属子类目">
          <el-option :label="item" :value="item" v-for="(item) in categoryItems" :key="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品标签" prop="tags">
        <el-select
          v-model="ruleForm.tags"
          multiple
          placeholder="请选择"
          :allow-create="true"
          :filterable="true"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >下一步</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getAllCatrgory} from '@/api/getHomeData'
export default {
  props:{
    ruleForm:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      rules: {
        title:[{required:true,trigger:'blur',message:'请输入商品副标题'}],
        desc:[{required:true,trigger:'blur',message:'请输入商品描述'}],
        category:[{required:true,trigger:'blur',message:'请选择商品分类'}],
        tags:[{type:'array',required:true,trigger:'blur',message:'请选择标签'}]
      },
      options: [
        {
          value: "最迟，明日送达",
          label: "最迟，明日送达",
        },
      ],
      categoryList:[],//存储所有分类
      categoryItems:[],//存储每个分类的子类
    };
  },
  created(){
    this.getAllCatrgory();
  },
  methods: {
    async getAllCatrgory(){
      const res = await getAllCatrgory();
      this.categoryList = res.data.data
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('nextStep',this.ruleForm)
          console.log(this.ruleForm);
        } else {
          this.$showMessage({msg:'请填写完整的信息',type:'error'})
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //选取类别的时候触发
    handleChange(id){
      const current = this.categoryList.find((item)=>{
        return item.id === id
      })
      this.categoryItems = current.c_items;
    },
  },
};
</script>

<style lang="less">
.form1-container {
  width: 600px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  .el-select {
    display: block;
    margin-bottom: 10px;
  }
}
</style>