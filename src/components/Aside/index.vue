<template>
  <div class="aside-container">
    <template v-if="userInfo && userInfo.role === 'admin'">
      <el-menu 
        :default-active="$route.path"
        router
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#fff"
        >
        <el-submenu index="1">
          <template slot="title">
            <Icon type="1"/>
            <span>首页</span>
          </template>
          <el-menu-item index="/home">
            <template>
              <Icon type="home"/>
              <span>统计</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
           <template slot="title">
            <Icon type="email"/>
            <span>商品</span>
          </template>
          <el-menu-item index="/goods/list">
            <template>
              <Icon type="list" />
              <span>商品列表</span>
            </template>
          </el-menu-item>
           <el-menu-item index="/goods/add">
            <template>
              <Icon type="add" />
              <span>添加商品</span>
            </template>
          </el-menu-item>
           <el-menu-item index="/goods/manager">
            <template>
              <span>商品类目管理</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </template>
     <template v-else>
       <el-menu 
        :default-active="$route.path"
        router
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#fff"
        >
        <el-submenu index="1">
          <template slot="title">
            <Icon type="home"/>
            <span>首页</span>
          </template>
          <el-menu-item index="/home">
            <template>
              <Icon type="home"/>
              <span>统计</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
           <template slot="title">
            <Icon type="email"/>
            <span>商品</span>
          </template>
          <el-menu-item index="/goods/list">
            <template>
              <Icon type="list" />
              <span>商品列表</span>
            </template>
          </el-menu-item>
           <el-menu-item index="/goods/add">
            <template>
              <Icon type="add" />
              <span>添加商品</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </template>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import {mapState} from 'vuex'
export default {
  props:{
    isAdmin:{
      type:Boolean,
      require:true
    }
  },
  components:{
    Icon
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

  },
  computed:{
    ...mapState('loginUser',['userInfo'])
  }
};
</script>

<style lang="less">
@import '~@/styles/var.less';
.aside-container {
  width: 100%;
  height: 100%;
  .el-menu {
    width: 100%;
    height: 100%;
    .iconfont {
      color: #fff;
      margin-right: 10px;
    }
  }
  .el-menu-item {
    display: flex;
    align-items: center;
  }
  .el-menu-item.is-active {
    background-color: @success !important;
  }
}
</style>