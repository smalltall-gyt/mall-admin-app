<template>
  <div class="login-container">
    <form action="" @submit.prevent="handleSubmit">
      <div class="email-container form-item">
        <div>
          <label for="email"><span>*</span>邮箱:</label>
          <input type="text" name="" id="email" placeholder="Email" @blur="checkEmail">
        </div>
        <span class="prompt-msg">{{emailMsg}}</span>
      </div>
      <div class="pwd-container form-item">
        <div>
          <label for=""><span>*</span>密码:</label>
          <input type="password" id="pwd" placeholder="Password">
        </div>
        <span class="prompt-msg">{{pwdMsg}}</span>
      </div>
      <div class="form-item">
        <button class="login-btn">登录</button>
        <button class="register-btn">注册</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      emailMsg:'',
      pwdMsg:''
    }
  },
  methods:{
    checkEmail($event){
      const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      if(emailReg.test($event.target.value)){
        this.emailMsg = ''
      }else{
        this.emailMsg = '邮箱格式错误'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/styles/var.less';
  .login-container {
    width: 450px;
    height: 260px;
    border: 1px solid #ccc;
    margin: 100px auto;
    form {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-content: center;
      div.form-item {
        width: 100%;
        height: 30px;
        text-align: center;
        margin-bottom: 20px;
        label {
          margin-right: 20px;
          span {
            color: @danger;
            margin-right: 5px;
          }
        }
        input {
          border: 1px solid #ccc;
          padding: 2px 5px;
          border-radius: 3px;
          &:focus {
            border: 1px solid rgb(97, 247, 227);
          }
        }
        span.prompt-msg {
          display: inline-block;
          width: 200px;
          margin-left: 100px;
          text-align: left;
          color:@danger;
        }
        .login-btn,.register-btn {
          border-radius: 5px;
          border: none;
          padding: 5px 15px;
          margin-right: 5px;
        }
        .login-btn {
          color: #fff;
          background-color: rgb(31, 204, 74);
        }
      }
    }
  }
</style>