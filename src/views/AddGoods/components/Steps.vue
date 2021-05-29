<template>
  <div class="steps-container">
    <el-steps :active="active" align-center>
      <el-step
        title="填写商品基本信息"
        description=""
      ></el-step>
      <el-step
        title="填写商品销售信息"
        description=""
      ></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  props:{
    active:{
      type:Number,
      default:1
    }
  }
};
</script>

<style lang="less" scoped>
  .steps-container {
    padding: 10px 0;
    padding-top: 20px;
    background-color: #fff;
    border-top: 1px solid rgba(216, 216, 216, 0.5);
  }
</style>