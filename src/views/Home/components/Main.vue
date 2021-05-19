<template>
  <div class="main-container">
    <div class="card-container">
      <Card />
      <Card />
      <Card />
    </div>
    
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  components:{
    Card
  },
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