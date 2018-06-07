<template>
  <div class="container bgF">
    <topComponent title='登录' :showLeft='false'>
      <span class="back" @click='goCancel' slot="left"></span>
    </topComponent>
    <div class="content">
      <h2 class="logoIcon">{{appName}}</h2>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">密码登录</mt-tab-item>
        <mt-tab-item id="2">短信登陆</mt-tab-item>
      </mt-navbar>
      <mt-tab-container  v-model="selected">
        <mt-tab-container-item id="1">
        <ul class="formCom form-login form-mini">
          <li class="icon-clear">
            <label>
              <input type="number" placeholder="请输入手机号" v-model.number='name'>
              <i @click='name = ""'></i>
            </label>
          </li>
          <li :class='[{"icon-eye1":showPwd},{"icon-eye2":!showPwd}]'>
            <label>
              <input :type="showPwd?'password':'text'" placeholder="请输入6-12位密码" v-model.trim='pwd'>
              <i @click='showPwd = !showPwd'></i>
            </label>
          </li>
        </ul> 
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul class="formCom form-login form-mini">
            <li class="icon-clear">
              <label>
                <input type="number" placeholder="请输入手机号" v-model.number='name'>
                <i @click='name = ""'></i>
              </label>
            </li>
            <li>
              <canvasCode @codeHasChange='sendCode'></canvasCode>
            </li>
            <li :class='[{"icon-eye1":showPwd},{"icon-eye2":!showPwd}]'>
              <label>
                <input type='text' placeholder="请输入验证码" v-model.trim='pwd'>
                <i @click='showPwd = !showPwd'></i>
              </label>
            </li>

          </ul> 
        </mt-tab-container-item>
      </mt-tab-container>
      <div class="forgetWarp">
        <span class="fr col6" @click="$router.push('/forget')">忘记密码？</span>
      </div>
      <div class="btnWarp">
        <span class="subBtn" @click='logIn'>登录</span>
      </div>
       <div class="btnWarp">
        <span class="subBtn" @click="$router.push('/reg')">注册</span>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        pwd: '',
        code: '',
        showPwd: true,  //开关--密码可见
        canvas: {}  ,    //存放canvas DOM节点
        selected: '1' 
      }
    },
    methods: {
      logIn() {
        //先做一些简单的判断再提交ajax
        console.log()
        if (/^[1][3578][0-9]{9}$/.test(this.name) === false) this.$dialog('帐号不正确');
        else if (/^[\d\D]{6,12}$/.test(this.pwd) === false) this.$dialog('密码不正确');
        else if (this.code.toUpperCase() !== this.canvasCode.codeNums.toUpperCase()) this.$dialog('验证码不正确');
        else {
          //先跳到借款首页暂代，后期ajax替换
          this.$router.push('/loan')
        }
      },
      goCancel() {
        //根据情景不一样，跳转的页面也会不同，暂定跳到我的借款首页
        //...省略
        this.$router.push('/loan')
      },
      sendCode(val) {
        this.code = val
      }
    }
  }
</script>
