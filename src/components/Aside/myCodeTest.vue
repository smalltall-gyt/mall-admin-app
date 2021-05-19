<template>
  <div class="test">
    <ul class="parent">
      <li
        v-for="(parent, index) in menuList"
        :key="parent.id"
        class="parent-item"
      >
        <div>
          {{ parent.name }}
          <Icon
            type="arrowDown"
            v-if="parent.children"
            @click.native="handleClick(parent, index)"
          />
        </div>
        <ul class="children" ref="list">
          <li v-for="children in parent.children" :key="children.id">
            {{ children.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "MyCodeTest",
  components: {
    Icon,
  },
  props: {
    menuList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(item, index) {
      this.$emit("showList", item, () => {
        const list = this.$refs.list[index];
        if (item.showChildrenList) {  
          const allLi = list.getElementsByTagName("li");
          const liheight = allLi[0].clientHeight;
          list.style.height = liheight * allLi.length + "px";
        }else{
          list.style.height = 0
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.test {
  width: 100%;
  height: 100%;
  background-color: rgb(26, 27, 26);
  color: #fff;
  ul.parent {
    li.parent-item {
      div {
        position: relative;
        display: flex;
        align-items: center;
        padding: 10px 15px;
        .icon-container {
          position: absolute;
          right: 10px;
          cursor: pointer;
        }
      }
      ul.children {
        height: 0;
        overflow: hidden;
        transition: all 0.3s ease-out;
        li {
          padding-left: 30px;
          height: 40px;
          line-height: 40px;
          cursor: pointer;
          box-sizing: border-box;
          &.active {
            background-color: lawngreen;
          }
        }
      }
    }
  }
}
</style>