<template>
  <div class="card-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
      <div class="text item">
        card content
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import '~@/styles/var.less';
.card-container {
  width: 200px;
  .box-card {
    width: 100%;
    .text {
      font-size: 14px;
      color: @words;
    }
    .item {
      margin-bottom: 18px;
    }
  }
}
</style>