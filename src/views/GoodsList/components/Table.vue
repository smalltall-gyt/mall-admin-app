<template>
  <div class="table-container">
    <template>
      <el-table
        :data="tableData"
        style="width: 100%"
        :highlight-current-row="true"
        empty-text="无"
      >
        <el-table-column prop="id" label="id" width="75px"> </el-table-column>
        <el-table-column prop="title" label="标题" width="220px">
        </el-table-column>
        <el-table-column prop="desc" label="描述" width="180px">
        </el-table-column>
        <el-table-column
          prop="categoryName"
          label="类目"
          width="80px"
        ></el-table-column>
        <el-table-column prop="price" label="预售价格"> </el-table-column>
        <el-table-column prop="price_off" label="折扣价格"> </el-table-column>
        <el-table-column prop="tags" label="标签"> </el-table-column>
        <el-table-column prop="inventory" label="限制购买数"> </el-table-column>
        <el-table-column prop="status" label="上架状态"></el-table-column>
        <el-table-column label="操作" width="200px">
          <template #default="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      const flag = prompt(`确定删除${row.id}:${row.title}这个商品?`,true);
      console.log(flag);
      if(flag){
        //确认删除
        this.$emit('deleteProduct',row.id);
      }else{
        return;
      }
    },
  },
};
</script>

<style lang="less">
.table-container {
  .cell {
    font-size: 12px;
  }
  .el-table {
    padding: 0 10px;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .el-table__body-wrapper {
    overflow-x: hidden;
  }
  button {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 12px;
  }
}
</style>