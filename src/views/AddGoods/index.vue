<template>
  <div class="add-goods-container">
    <Steps :active="currentSteps" />
    <Form1
      v-if="currentSteps === 1"
      @nextStep="nextStep"
      :ruleForm="productBasicMsg"
    />
    <Form2
      v-else-if="currentSteps === 2"
      @prevStep="prevStep"
      :ruleForm="productBasicMsg"
      @addProduct="addProduct"
      @removeImage="removeImage"
      @addImage="addImage"
    />
  </div>
</template>

<script>
import Steps from "./components/Steps";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import { addProducts, getDetailProduct, editProduct } from "@/api/getHomeData";
export default {
  components: {
    Steps,
    Form1,
    Form2,
  },
  data() {
    return {
      currentSteps: 1,
      productBasicMsg: {
        title: "",
        desc: "",
        category: "",
        c_item: [],
        tags: [],
        price: "",
        price_off: "",
        unit: "",
        images: [],
        inventory: "",
        status: false, //是否上架
      },
    };
  },
  methods: {
    //下一步
    nextStep(basicMsg) {
      this.currentSteps++;
      this.productBasicMsg = basicMsg;
    },
    //上一步
    prevStep() {
      this.currentSteps--;
    },
    //添加商品
    async addProduct() {
      let params = {};
      if (this.productBasicMsg.status) {
        params = {
          ...this.productBasicMsg,
          status: 1,
        };
      } else {
        params = {
          ...this.productBasicMsg,
          status: 0,
        };
      }
      console.log(params);
      if (this.$route.params.id) {
        const res = await editProduct(params)
        if(res.status === "success"){
          this.$showMessage({msg:'修改成功'},()=>{
            this.$router.push({
              name:'goodsList'
            })
          })
        }
      } else {
        const res = await addProducts(params);
        if (res.status === "success") {
          this.$showMessage({ msg: "添加成功" }, () => {
            this.$router.push({
              name: "goodsList",
            });
          });
        }
      }
    },
    //删除上传的图片
    removeImage(file) {
      this.productBasicMsg.images = this.productBasicMsg.images.filter(
        (item) => {
          const url = file?.response?.data?.url || file.url;
          return item !== url;
        }
      );
    },
    //上传图片
    addImage(res) {
      this.productBasicMsg.images.push(res.data.url);
    },
  },
  async created() {
    if (this.$route.params.id) {
      const res = await getDetailProduct(this.$route.params.id);
      this.productBasicMsg = res.data;
      if (this.productBasicMsg.status === 1) {
        this.productBasicMsg.status = true;
      } else {
        this.productBasicMsg.status = false;
      }
      console.log(res);
    }
  },
};
</script>

<style>
</style>