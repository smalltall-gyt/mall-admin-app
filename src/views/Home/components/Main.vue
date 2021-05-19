<template>
  <div class="main-container">
    <Crumb :crumbList="crumbList"/>
    <div class="card-container">
      <Card />
      <Card />
      <Card />
    </div>
    
  </div>
</template>

<script>
import Crumb from '@/components/Crumb'
import Card from '@/components/Card'
export default {
  components:{
    Crumb,
    Card
  },
  data(){
    return {
      crumbList:[{name:'首页',path:'/'},{name:'统计',path:'/home'}]
    }
  }
}
</script>

<style lang="less" scoped>
  .main-container {
    width: 100%;
    height: 100%;
    overflow: scroll;
    .card-container {
      display: flex;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>