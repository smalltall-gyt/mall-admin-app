<template>
  <div class="goods-list-container">

    <Search />
    <Table :tableData="tableData"/>
  </div>
</template>

<script>
import Search from './components/Search'
import Table from './components/Table'
import {getAllProducts} from '@/api/getHomeData'
export default {
  components:{
    Search,
    Table
  },
  data(){
    return {
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