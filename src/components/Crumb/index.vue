<template>
  <div class="crumb-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: item.path }" v-for="(item,index) in crumbList" :key="index"><a href="#">{{item.name}}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props:{
    crumbList:{
      type:Array,
      require:true
    }
  }
};
</script>

<style lang="less" scoped>
  .crumb-container {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
  }
</style>