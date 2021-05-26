<template>
  <div class="home-container">
    <Layout>
      <template #left>
        <Aside :isAdmin="false"/>
      </template>
      <template #right>
        <Crumb />
        <router-view></router-view>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import Aside from '@/components/Aside/index.vue'
import Crumb from '@/components/Crumb'
export default {
  components:{
    Aside,
    Crumb,
    Layout
  },
  computed:{
  
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>