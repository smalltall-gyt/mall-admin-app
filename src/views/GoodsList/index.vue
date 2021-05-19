<template>
  <div class="goods-list-container">
    <Crumb :crumbList="crumbList"/>
    <Search />
    <Table :tableData="tableData"/>
  </div>
</template>

<script>
import Crumb from '@/components/Crumb'
import Search from './components/Search'
import Table from './components/Table'
import {getAllProducts} from '@/api/getHomeData'
export default {
  components:{
    Crumb,
    Search,
    Table
  },
  data(){
    return {
      crumbList:[{name:'商品',path:'/goods'},{name:'商品列表',path:'/goods/list'}],
      tableData:[],
    }
  },
  created(){
    this.getAllProducts();
  },
  methods:{
    async getAllProducts(){
      const data = await getAllProducts();
      this.tableData = data.data.data
      console.log(this.tableData);
    }
  }
}
</script>

<style lang="less" scoped>
  .goods-list-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>