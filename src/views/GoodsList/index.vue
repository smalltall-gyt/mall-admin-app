<template>
  <div class="goods-list-container">
    <Search />
    <Table :tableData="tableData"/>
    <Pagination :currentPage="currentPage" 
                :maxPage="maxPage" 
                @prev="handlePrev"
                @next="handleNext"
                @changePage="changePage"
                @next5="handleNext5"
                @prev5="handlePrev5"
    />
  </div>
</template>

<script>
import Search from './components/Search'
import Table from './components/Table'
import Pagination from '@/components/Pagination'
import {getAllProducts} from '@/api/getHomeData'
export default {
  components:{
    Search,
    Table,
    Pagination
  },
  data(){
    return {
      tableData:[],
      currentPage:1,
      size:12,
      total:0
    }
  },
  created(){
    this.getAllProducts();
  },
  computed:{
    maxPage(){
      return Math.ceil(this.total / this.size)
    }
  },
  methods:{
    async getAllProducts(){
      const data = await getAllProducts({page:this.currentPage,size:this.size});
      this.total = data.data.total;
      this.tableData = data.data.data
    },
    //上一页
    handlePrev(){
      this.currentPage--;
      if(this.currentPage < 1){
        this.currentPage = 1;
      }
      this.getAllProducts();
    },
    //下一页
    handleNext(){
      this.currentPage++;
      if(this.currentPage > this.maxPage){
        this.currentPage = this.maxPage;
      }
      this.getAllProducts();
    },
    //跳转到指定页
    changePage(page){
      this.currentPage = page;
      this.getAllProducts();
    },
    //下5页
    handleNext5(){
      this.currentPage+=5;
      if(this.currentPage > this.maxPage){
        this.currentPage = this.maxPage
      }
      this.getAllProducts();
    },
    //前5页
    handlePrev5(){
      this.currentPage -= 5;
      if(this.currentPage < 1){
        this.currentPage = 1;
      }
      this.getAllProducts();
    }
  }
}
</script>

<style lang="less" scoped>
  .goods-list-container {
    width: 100%;
    height: 100%;
  }
</style>