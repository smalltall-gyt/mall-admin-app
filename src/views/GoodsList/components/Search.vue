<template>
  <div class="search-container">
    <div class="search-keywords item">
      <label for="">搜索关键字:</label>
      <input type="text" placeholder="input placeholder" v-model="keywords" />
    </div>
    <div class="goods-type item">
      <label for="">商品类目:</label>
      <div class="block">
        <el-cascader
          placeholder="试试搜索：指南"
          :options="options"
          filterable
        ></el-cascader>
      </div>
    </div>
    <div class="item">
      <button>搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    options:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      keywords: "",
    };
  },
};
</script>

<style lang="less">
@import '~@/styles/var.less';
.search-container {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  div.item {
    margin-right: 30px;
    button {
      padding: 7px;
      width: 60px;
      border: none;
      background-color: rgb(38, 168, 38);
      color: #fff;
      border-radius: 5px;
    }
  }
  label {
    font-size: 14px;
    margin-right: 5px;
  }
  input {
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    &::placeholder {
      color: #ccc;
    }
  }
  .goods-type {
    display: flex;
    align-items: center;
  }
}
</style>