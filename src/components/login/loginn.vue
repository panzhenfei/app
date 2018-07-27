<template>
  <div class="login">
    <div class="login_father">
      <div class="login_header">
        <img src="" v-lazy="login" class="phone_img"/>
      </div>
    </div>
    <div class="phone">
      <div class="phone_set">
        <label class="phone_size">手机号</label>
        <input placeholder="请输入手机号" class="login_phone" maxlength="11"/>
      </div>
      <div class="password_set">
        <label class="password_size">密码</label>
        <input placeholder="请输入密码" class="login_password" maxlength="11"/>
      </div>
    </div>
    <div class="login_reg">
      <button class="login_log">登录</button>
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
  import Vue from 'vue'
  import Adaptive from '../../playform/Adaptive.js'

  export default {
    data(){
      return{
        login:'../../static/images/logo.png',
        weixin:'../../static/images/weix.png',
        qq:'../../static/images/qq.png',
      }
    }
  }

</script>

<style lang="scss" scoped>
  @function px2rem($px) {
    $rem:37.5px;
    @return ($px / $rem) + rem;
  }
  .login{
    //background-color: #efeff4;
    height: 25.0rem;
    width: 100%;
  }
  .login_father{
    display: flex;
    width: 100%;
    height: px2rem(110px);
    border: solid px2rem(1px) red;
    right: 0;
    left: 0;
    top: 0;
  }
  .login_header{
    display: flex;
    width:px2rem(80px);
    height: px2rem(80px);
    /*margin-top: 40px;*/
    border: solid px2rem(1px) red;
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
    margin-left: px2rem(35px);
    font-size: px2rem(16px);
  }
  .login_password{
    /*border: none;*/
    outline:medium;//清除input默认样式
    //border:0px;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-bottom-style: #666666;
    margin-left: px2rem(35px);
    font-size: px2rem(16px);
  }
  .phone_set{
    display: flex;
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
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
    margin-top: px2rem(2px);
  }
  .phone_img{
    width:100%;
    height:auto;
  }
  .phone_size{
    font-size:px2rem(16px);
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: px2rem(12px);
    flex: 1;

  }
  .password_size{
    font-size:px2rem(16px);
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: px2rem(12px);
    flex:1;
  }
  .login_log{
    /*width: 330px;*/
    flex: 1;
    width: 20rem;
    height: px2rem(50px);
    background:#4ba9e9;
    border-radius: px2rem(12px);

  }
  .reg{
    margin-left: px2rem(44px);
    flex: 1;
    /*float: left;*/

  }
  .reg_passworld{
    /*float: right;*/
    flex: 1;
    margin-right: px2rem(44px);
    text-align: right;
    font-size: px2rem(16px);
  }
  .test{
    display: flex;
    margin-top: px2rem(8px);
    height: 3.875rem;
    width:100%;
    font-size: px2rem(16px);
    border: solid px2rem(1px) red;

  }
  .other{
    /*display: flex;*/
    height: 3.875rem;
    border: solid px2rem(1px) red;
    width: 100%;
    margin-top: px2rem(0px);
    font-size: px2rem(16px);
  }
  .other_login{
    /*display: flex;*/
    height: px2rem(70px);
    border: solid 1px red;
    width: 100%;
    margin-top: px2rem(-11px);
    font-size: px2rem(16px);
  }
  .login_weixin{

    width:px2rem(60px);
    height: px2rem(60px);
    /*margin-top: 40px;*/
    border: solid px2rem(1px) red;
    //让一个div在其父div中水平居中margin-left: auto;margin-right: auto;
    float: left;
    //flex: 1;
    margin-left:px2rem(50px) ;
    border-radius:2.188rem;

  }
  .login_qq{
    width:px2rem(60px);
    height: px2rem(60px);
    float: right;
    /*margin-top: 40px;*/
    border: solid px2rem(1px) red;
    margin-right:px2rem(50px) ;
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
