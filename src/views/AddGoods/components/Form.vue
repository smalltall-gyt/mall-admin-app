<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="副标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
       <el-form-item label="商品描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="商品类目">
        <el-select v-model="form.region1" placeholder="选择类目">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <el-select v-model="form.region2" placeholder="选择类目">
          <el-option label="区域一" value="shanghai1"></el-option>
          <el-option label="区域二" value="beijing1"></el-option>
        </el-select>
      </el-form-item>
     <el-form-item label="副标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region1: "",
        region2:"",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less">
  .form-container {
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