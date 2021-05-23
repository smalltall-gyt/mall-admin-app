<template>
  <div class="register-container">
    <form action="">
      <div class="form-item username-container">
        <div>
          <label for="username"><span>*</span>用户名:</label>
          <input type="text" placeholder="Username" id="username">
        </div>
        <span class="prompt-msg">{{usernameMsg}}</span>
      </div>
      <div class="email-container form-item">
        <div>
          <label for="email"><span>*</span>邮箱:</label>
          <input
            type="text"
            name=""
            id="email"
            placeholder="Email"
            @blur="checkEmail"
          />
        </div>
        <span class="prompt-msg">{{ emailMsg }}</span>
      </div>
      <div class="pwd-container form-item">
        <div>
          <label for="pwd"><span>*</span>密码:</label>
          <input type="password" id="pwd" placeholder="Password" />
        </div>
        <span class="prompt-msg">{{ pwdMsg }}</span>
      </div>
      <div class="code-container form-item">
        <div>
          <label for="code"><span>*</span>验证码:</label>
          <input type="text" id="code" placeholder="Code" />
        </div>
        <span class="prompt-msg">{{ codeMsg }}</span>
      </div>
      <div class="form-item">
        <button class="login-btn">注册</button>
        <button class="register-btn">获取验证码</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      emailMsg:'',
      pwdMsg:'',
      codeMsg:'',
      usernameMsg:''
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
    },
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.register-container {
  width: 450px;
  height: 300px;
  margin: 100px auto;
  border: 1px solid #ccc;
  background-color: #fff;
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
        display: inline-block;
        margin-right: 10px;
        width: 80px;
        text-align: right;
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
        color: @danger;
      }
      .login-btn,
      .register-btn {
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