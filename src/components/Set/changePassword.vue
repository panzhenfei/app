<template>
  <div class="changee">
    <!--//这里本来为头的-->
    <div class="change_one">
      <div class="change_sett">
        <label class="change_sizee">旧密码</label>
        <input  type="text" placeholder="请输入旧密码" class="login_changee" maxlength="11" id="certCode" ref="user" value="" name="certCode"/>
        <a class="rgpassword_siz" type="button">明文码</a>
      </div>
      <div class="rgpassword_sett">
        <label class="rgpassword_sizee">新密码</label>
        <input placeholder="请输入新密码" class="login_rgpasswordd" maxlength="11" type="rgpassword" required="" id="pwd" name="pwd" ref="pwd" value=""/>
        <a class="rgpassword_siz" type="button">明文码</a>
      </div>
      <div class="rgpassword_settt">
        <label class="rgpassword_sizeee">确认新密码</label>
        <input placeholder="再次输入新密码" class="login_rgpassworddd" maxlength="11" type="rgpassword" required="" id="pwd" name="pwd" ref="pwd" value=""/>
        <a class="rgpassword_sizz" type="button">明文码</a>
      </div>




      <div class="finish_reg">
        <button class="finish_log">修改密码</button>
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
  .changee{
    width: 100%;
    height:25.0rem;
  }

  .change_sett{
    display: flex;
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
    // margin-top: -0.875rem;
  }
  .change_sizee{
    font-size:16px;
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: 12px;
    flex: 1;

  }
  .login_changee{
    /*border: none;*/
    outline:medium;//清除input默认样式
    //border:0px;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-bottom-style: #666666;
    margin-left: 2px;
    font-size: 16px;
    margin-right: 29px;
  }
  .rgpassword_sett{
    display: flex;
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
    // margin-top: -0.875rem;
  }
  .rgpassword_settt{
    display: flex;
    height: 3.875rem;
    border: solid 1px red;
    width: 100%;
    // margin-top: -0.875rem;
  }
  .rgpassword_sizee{
    font-size:16px;
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: 18px;
    flex:1;
  }
  .rgpassword_sizeee{
    font-size:16px;
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: 18px;
    flex:1;
  }
  .rgpassword_siz{
    font-size:16px;
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: 12px;
    flex:1;
  }
  .rgpassword_sizz{
    font-size:16px;
    color: #333333;
    /*margin-left: 30px;*/
    margin-top: 12px;
    flex:1;
  }
  .login_rgpasswordd{
    /*border: none;*/
    outline:medium;//清除input默认样式
    //border:0px;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-bottom-style: #666666;
    margin-left: 2px;
    font-size: 16px;
    margin-right: 8px;
    margin-top: -1px;
  }
  .login_rgpassworddd{
    /*border: none;*/
    outline:medium;//清除input默认样式
    //border:0px;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-bottom-style: #666666;
    margin-left: 2px;
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
    margin-top: 20px;

  }





</style>
