<template>
  <div class="pagination-container">
    <ul>
      <template v-if="maxPage <= 5">
        <li @click="prev">&lt;</li>
        <li v-for="(item) in maxPage" :key="item" :class="{active:currentPage===item}" @click="changePage(item)">{{item}}</li>
        <li @click="next">&gt;</li>
      </template>
      <template v-else>
        <template v-if="currentPage <= 4">
          <li @click="prev">&lt;</li>
          <li v-for="(i) in 5" :key="i" :class="{active:currentPage === i}" @click="changePage(i)">{{i}}</li>
          <li @click="next5">...</li>
          <li :class="{active:currentPage === maxPage}" @click="changePage(maxPage)">{{maxPage}}</li>
          <li @click="next">&gt;</li>
        </template>
        <template v-else-if="currentPage >= 5 && currentPage <= maxPage - 4">
          <li @click="prev">&lt;</li>
          <li @click="prev5">...</li>
          <li v-for="(i) in 5" :key="i+currentPage-3" :class="{active:currentPage===i+currentPage-3}" @click="changePage(i+currentPage-3)">{{i+currentPage-3}}</li>
          <li @click="next5">...</li>
          <li @click="next">&gt;</li>
        </template>
        <template v-else>
          <li @click="prev">&lt;</li>
          <li :class="{active:currentPage === 1}" @click="changePage(1)">1</li>
          <li @click="prev5">...</li>
          <li v-for="i in 6" :key="maxPage - 6 + i" :class="{active:currentPage===maxPage-6+i}" @click="changePage(maxPage-6+i)">{{maxPage - 6 + i}}</li>
          <li @click="next">&gt;</li>
        </template>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    maxPage: {
      type: Number,
      default: 10,
    },
  },
  methods:{
    prev(){
      this.$emit('prev')
    },
    next(){
      this.$emit('next')
    },
    changePage(page){
      this.$emit('changePage',page)
    },
    next5(){
      this.$emit('next5')
    },
    prev5(){
      this.$emit('prev5')
    }
  }
};
</script>

<style lang="less" scoped>
  .pagination-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    ul {
      display: flex;
      li {
        width: 32px;
        height: 32px;
        font-size: 14px;
        line-height: 32px;
        text-align: center;
        margin-right: 10px;
        background-color: rgba(222,222, 222, .5);
        cursor: pointer;
        &.active {
          color: #fff;
          background-color: rgb(16, 154, 247);
        }
      }
    }
  }
</style>