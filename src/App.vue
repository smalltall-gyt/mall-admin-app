<template>
  <div id="app">
    <Layout>
      <template #left>
        <Aside :isAdmin="false"/>
      </template>
      <template #right>
        <router-view></router-view>
      </template>
    </Layout>
    
  </div>
</template>
<script>
import Layout from '@/components/Layout'
import Aside from '@/components/Aside'
export default {
  components:{
    Layout,
    Aside
  }
}
</script>
<style lang="less">
  @import '~@/styles/normalize.less';
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .aside-container {
    width: 160px;
    height: 100vh;
  }
</style>
