<template>
  <div class="home-container">
    <Main />
  </div>
</template>

<script>
import Aside from '@/components/Aside/index.vue'
import Main from './components/Main.vue'
export default {
  components:{
    Main
  },
  data(){
    return {
    }
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