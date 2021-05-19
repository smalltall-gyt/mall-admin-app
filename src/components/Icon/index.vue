<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const icons = {
  add:'icon-Add',
  email:'icon-email',
  home:'icon-Home',
  list:'icon-list-01',
  arrowDown:'icon-arrow-down'
}
  


export default {
  props:{
    type:{
      type:String,
      require:true
    }
  },
  computed:{
    fontClass(){
      return icons[this.type]
    }
  }
}
</script>

<style>
  @import '//at.alicdn.com/t/font_2554021_1n9oplyj5cyj.css';
  .iconfont {
    color: inherit;
    font-size: inherit;
  }
</style>