<template>
  <div class="crumb-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: item.path }" v-for="(item,index) in crumbList" :key="index"><a href="#">{{item.name}}</a></el-breadcrumb-item>
    </el-breadcrumb>
    <div class="user-info" @click="collapse = !collapse">
      <span>{{userInfo.username}}</span>
      <Icon type="arrowDown"/>
      <ul v-show="collapse">
        <li class="active" @click.stop="logout">退出</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import {mapState} from 'vuex'
export default {
  props:{
    crumbList:{
      type:Array,
      require:true
    }
  },
  components:{
    Icon
  },
  data(){
    return {
      collapse:false
    }
  },
  methods:{
    logout(){
      const flag = this.$store.dispatch('loginUser/logout');
      if(flag){
        this.$router.push({
          name:'login'
        })
      }
    }
  },
  computed:{
    ...mapState('loginUser',['userInfo'])
  }
};
</script>

<style lang="less" scoped>
  .crumb-container {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    justify-content: space-between;
    .user-info {
      position: relative;
      display: flex;
      align-items: center;
      margin-right: 10px;
      cursor: pointer;
      span {
        font-size: 14px;
        margin-right: 5px;
      }
      ul {
        position: absolute;
        width: 100px;
        top: 35px;
        right:-10px;
        border: 1px solid rgb(236, 236, 236);
        li {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-bottom: 1px solid rgb(236, 236, 236);
          &.active {
            background-color: rgb(236, 236, 236);
          }
        }
      }
    }
  }
</style>