<template>
  <div class="goods-list-container">
    <Search :options="allCategoryComputed" @search="handleSearch"/>
    <Table :tableData="tableDataComputed"/>
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
import {getAllProducts,getAllCatrgory} from '@/api/getHomeData'
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
      size:5,
      total:0,
      allCategory:[],
      props:{},
    }
  },
  async created(){
    await this.getAllCatrgory();
    this.getAllProducts();
    
  },
  computed:{
    maxPage(){
      return Math.ceil(this.total / this.size)
    },
    allCategoryComputed(){ 
      function getArr(arr,newArr){
        arr.forEach((item)=>{
          const obj = {};
          obj.label = item.name || item;
          obj.value = item.id || item;
          newArr.push(obj);
          if(item.c_items && item.c_items.length > 0){
            obj.children = [];
            getArr(item.c_items,obj.children)
          }
        })
        return newArr;
      }
      const newArr = getArr(this.allCategory,[])
      return newArr
    },
    tableDataComputed(){
      return this.tableData.map((item)=>{
        if(item.status === 1){
          item.status = '已上架'
        }else{
          item.status = '未上架'
        }
        const category = this.allCategory.find((c)=>{
          return c.id === item.category
        })
        const categoryName = category.name;
        return {
          ...item,
          categoryName,
        }
      })
    }
  },
  methods:{
    //分页获取商品数据
    async getAllProducts(){
      const data = await getAllProducts({page:this.currentPage,size:this.size,...this.props});
      this.total = data.data.total;
      this.tableData = data.data.data
    },
    //获取所有分类
    async getAllCatrgory(){
     const res =  await getAllCatrgory();
     this.allCategory = res.data.data;
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
    },
    //点击搜索 
    handleSearch(props){
      this.props = props
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