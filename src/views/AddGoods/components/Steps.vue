<template>
  <div class="steps-container">
    <el-steps :active="1" align-center>
      <el-step
        title="步骤1"
        description=""
      ></el-step>
      <el-step
        title="步骤2"
        description=""
      ></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
  .steps-container {
    padding: 10px 0;
    padding-top: 20px;
    background-color: #fff;
    border-top: 1px solid rgba(216, 216, 216, 0.5);
  }
</style>