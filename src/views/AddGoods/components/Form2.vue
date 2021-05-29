<template>
  <div class="form2-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品售价" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="商品折扣价" prop="price_off">
        <el-input v-model="ruleForm.price_off"></el-input>
      </el-form-item>
      <el-form-item label="商品库存" prop="inventory">
        <el-input v-model="ruleForm.inventory"></el-input>
      </el-form-item>
      <el-form-item label="计量单位" prop="unit">
        <el-input v-model="ruleForm.unit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="ruleForm.status">是否上架</el-checkbox>
      </el-form-item>
      <el-form-item label="商品相册" prop="images">
        <el-upload
        class="avatar-uploader"
          :action="`https://mallapi.duyiedu.com/upload/images?appkey=${userInfo.appkey}`"
          list-type="picture-card"
          name="avatar"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :auto-upload="true"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
          :file-list="fileList"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="prev">上一页</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >完成</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    ruleForm: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created(){
    if(this.ruleForm.images.length > 0){
      this.fileList = this.ruleForm.images.map((item,index)=>{
        return {
          name:`image-${index}.jpg`,
          url:item
        }
      })
    }
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      imageUrl: "",
      fileList: [],
      rules: {
        price: [{ required: true, message: "请输入商品价格", trigger: "blur" }],
        price_off: [
          { required: true, message: "请输入商品折扣价格", trigger: "blur" },
        ],
        inventory: [
          { required: true, message: "请输入商品库存量", trigger: "blur" },
        ],
        unit: [
          { required: true, message: "请输入商品计量单位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("addProduct");
        } else {
          this.$showMessage({ msg: "请填写完整的信息", type: "error" });
          return false;
        }
      });
    },
    //图片上传成功调用
    handleSuccess(res, file) {
      this.$emit('addImage',res)
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 图片上传校验
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 点击上一步
    prev() {
      this.$emit("prevStep");
    },
    // 图片删除
    handleRemove(file, fileList) {
      this.$emit('removeImage',file);
      
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
  computed: {
    ...mapState("loginUser", ["userInfo"]),
  },
};
</script>

<style lang="less">
.form2-container {
  width: 600px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  .el-select {
    display: block;
    margin-bottom: 10px;
  }
  .avatar-uploader {
    display: flex;
  }
  .el-upload--picture-card {
    width: 90px;
    height: 90px;
    line-height: 90px;
  }
  .el-upload-list__item {
    width: 90px;
    height: 90px;
  }
}
</style>