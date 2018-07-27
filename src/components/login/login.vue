<template>
  <div class="login">
    <!--<div class="login_father">-->
      <!--<div class="login_header">-->
        <!--<img src="" v-lazy="login" class="phone_img"/>-->
      <!--</div>-->
    <!--</div>-->
    <div class="login_head">
      <h1>登录</h1>
    </div>
    <div class="phone">
      <div class="phone_set">
        <label class="phone_size">手机号</label>
        <input  type="text" placeholder="请输入手机号" class="login_phone" maxlength="11" id="certCode" ref="user" value="" name="certCode"/>
      </div>
      <div class="password_set">
        <label class="password_size">密码</label>
        <input placeholder="请输入密码" class="login_password" maxlength="11" type="password" required="" id="pwd" name="pwd" ref="pwd" value=""/>
      </div>
    </div>
    <div class="login_reg">
      <button class="login_log" @click="loginAction()">登录</button>
    </div>
    <div class="test">

      <div class="reg">注册账号</div>
      <div class="reg_passworld">找回密码</div>

    </div>
    <div class="other">
      <span>使用其它方式登录</span>
    </div>
    <div class="other_login">
      <div class="login_weixin">
        <img src="" v-lazy="weixin" class="weixin_img">
      </div>
      <div class="login_qq">
        <img src="" v-lazy="qq" class="qq_img">
      </div>
    </div>





  </div>

</template>
<script type="text/javascript">
  export default {
    data(){
      return{
        // login:'../../static/images/logo.png',
        // weixin:'../../static/images/weix.png',
        // qq:'../../static/images/qq.png',
        login:'/static/images/logo.png',
        weixin:'/static/images/weix.png',
        qq:'/static/images/qq.png',
        loginParams:{
          certCode:"",
          pwd:"",
        }
      }
    },
    methods:{
      loginAction(){
        // this.loginParams.certCode = this.$refs.user.value;
        // this.loginParams.pwd = this.$refs.pwd.value;
        // let $this = this;
        // this.$http.post("/api/Home",{params:this.loginParams}).then(function (response) {
        //   var rs = response.data;
        //   console.log(rs);
        //   if(rs.code === 0){
        //     //登录成功
        //     // var userInfo = rs.result.userInfo;
        //     // var senduserInfo = {}
        //     $this.$router.push('/Profile')//跳转到我的页面
        //
        //   }
        //
        //
        // }).catch(function (error) {
        //   console.info(error);
        // })
        let $this = this;
        $this.$router.push('/Profile')//跳转到我的页面

      }



    }





  }

</script>

<style lang="scss" scoped>
  .login{
    //background-color: #efeff4;
    height: 25.0rem;
    width: 100%;
  }
  .login_father{
    display: flex;
    width: 100%;
    height: 110px;
    border: solid 1px red;
    right: 0;
    left: 0;
    top: 0;
  }
  .login_head{
    position: fixed;
    /*z-index: 10;*/
    right: 0;
    left: 0;
    top: 0;
    height: 2.75rem;
    padding-right: 0.625rem;
    padding-left: 0.625rem;
    border-bottom: 0;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0 0 1px rgba(0,0,0,.85);
    box-shadow: 0 0 1px rgba(0,0,0,.85);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    line-height: 2.75rem;
  }
  .login_header{
    display: flex;
    width:80px;
    height: 80px;
    /*margin-top: 40px;*/
    border: solid 1px red;
    //让一个div在其父div中水平居中margin-left: auto;margin-right: auto;
    margin-left: auto;
    margin-right: auto;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .login_phone{
    /*border: none;*/
    outline:medium;//清除input默认样式
    //border:0px;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-bottom-style: #666666;
    margin-left: -26px;
    font-size: 16px;
    margin-right: 29px;
  }
  .login_password{
    /*border: none;*/
    outline:medium;//清除input默认样式
    //border:0px;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-bottom-style: #666666;
    margin-left: -26px;
    font-size: 16px;
    margin-right: 29px;
  }
  .phone_set{
    display: flex;
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
    margin-top: 80px;
    // margin-top: -0.875rem;
  }
  .password_set{
    display: flex;
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
    // margin-top: -0.875rem;
  }
  .login_reg{
    display: flex;
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
    margin-top: 2px;
  }
  .phone_img{
    width:100%;
    height:auto;
  }
  .phone_size{
    font-size:16px;
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: 12px;
    flex: 1;

  }
  .password_size{
    font-size:16px;
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: 12px;
    flex:1;
  }
  .login_log{
    /*width: 330px;*/
    flex: 1;
    width: 20rem;
    height: 50px;
    background:#4ba9e9;
    border-radius: 12px;

  }
  .reg{
    margin-left: 15px;
    flex: 1;
    /*float: left;*/

  }
  .reg_passworld{
    /*float: right;*/
    flex: 1;
    margin-right: 44px;
    text-align: right;
    font-size: 16px;
  }
  .test{
    display: flex;
    margin-top: 8px;
    height: 3.875rem;
    width:100%;
    font-size: 16px;
    border: solid 1px red;

  }
  .other{
    /*display: flex;*/
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
    /*margin-top: 0px;*/
    margin-top: -15px;
    font-size: 16px;
  }
  .other_login{
    /*display: flex;*/
    height: 70px;
    border: solid 1px red;
    width: 100%;
    margin-top: -18px;
    font-size: 16px;
  }
  .login_weixin{

    width:60px;
    height: 60px;
    /*margin-top: 40px;*/
    border: solid 1px red;
    //让一个div在其父div中水平居中margin-left: auto;margin-right: auto;
    float: left;
    //flex: 1;
    margin-left:50px ;
    border-radius:2.188rem;

  }
  .login_qq{
    width:60px;
    height: 60px;
    float: right;
    /*margin-top: 40px;*/
    border: solid 1px red;
    margin-right:50px ;
    border-radius:2.188rem;
    /*display:flex;*/
    /*align-items:center;*/
    /*justify-content:center;*/
  }
  .weixin_img{
    width:100%;
    height:auto;
  }
  .qq_img{
    width:100%;
    height:auto;
  }
</style>
