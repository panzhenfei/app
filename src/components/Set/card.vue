<template>
  <div class="carde">
    <!--//这里本来为头的-->
    <div class="card_one">

      <div class="card_sett">
        <label class="card_sizee">姓名</label>
        <input  type="text" placeholder="请输入您的真实姓名" class="login_carde" maxlength="11" id="certCode" ref="user" value="" name="certCode"/>
      </div>
      <div class="password_sett">
        <label class="password_sizee">身份证号码</label>
        <input placeholder="请输入您的身份证号码" class="login_passwordd" maxlength="11" type="password" required="" id="pwd" name="pwd" ref="pwd" value=""/>
      </div>
      <div class="finish_reg">
        <button class="finish_log">完成</button>
      </div>



    </div>



  </div>

</template>

<script>

  export default {
    name: 'App',
    components: {

    },
  }
</script>
<style lang="scss" scoped>
  .carde{
    width: 100%;
    height:25.0rem;
  }
  /*.card_content{*/
    /*width: 100%;*/
    /*height: 80px;*/
    /*border: solid 1px red;*/
  /*}*/
  .card_sett{
    display: flex;
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
    // margin-top: -0.875rem;
  }
  .card_sizee{
    font-size:16px;
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: 12px;
    flex: 1;

  }
  .login_carde{
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
  .password_sett{
    display: flex;
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
    // margin-top: -0.875rem;
  }
  .password_sizee{
    font-size:16px;
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: 18px;
    flex:1;
  }
  /*.password_siz{*/
    /*font-size:16px;*/
    /*color: #333333;*/
    /*!*margin-left: 30px;*!*/
    /*margin-top: 12px;*/
    /*flex:1;*/
  /*}*/
  .login_passwordd{
    /*border: none;*/
    outline:medium;//清除input默认样式
    //border:0px;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-bottom-style: #666666;
    margin-left: -26px;
    font-size: 16px;
    margin-right: 8px;
    margin-top: -1px;
  }
  .finish_reg{
    display: flex;
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
    margin-top: 2px;
  }
  .finish_log{
    /*width: 330px;*/
    flex: 1;
    width: 20rem;
    height: 50px;
    background:#4ba9e9;
    border-radius: 12px;
    margin-top: 40px;

  }





</style>
