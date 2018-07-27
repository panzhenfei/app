
<template>
  <div>
    <!--父页面部分-->
    <div class="reg_passw" @click="setting">
      <span class="reg_pass">账号设置</span>
      <div class="reg_back"> <img src="" v-lazy="Img3"></div>
    </div>

    <div class="set">
      <span class="reg_pass">清除缓存</span>
      <div class="reg_back"> <img src="" v-lazy="Img3"></div>
    </div>
    <div class="set" @click="recommend">
      <span class="reg_pass">推荐给好友</span>
      <div class="reg_back"> <img src="" v-lazy="Img3"></div>
    </div>
    <div class="set" @click="about">
      <span class="reg_pass">关于我们</span>
      <div class="reg_back"> <img src="" v-lazy="Img3"></div>
    </div>
    <div class="set">
      <span class="reg_pass">退出登录</span>
      <div class="reg_back"> <img src="" v-lazy="Img3"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Img3: "/static/images/back.png"
      };
    },
    methods: {
      setting() {
        this.$router.push({ name: "Setting" });
        //this.$router.push({path: '/Set/Setting'});
      },
      about(){
        this.$router.push({ name: "aboutUs" });
      },
      recommend(){
        this.$router.push({ name: "recommend" });
      }

    }
  };
</script>
<style >
  .reg_back{
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.938rem;
    border: solid 0.062rem red;
    position: absolute;
    right: 0.625rem;
  }
  .reg_passw{
    height: 3.875rem;
    display: flex;
    border: solid 0.062rem red;
    margin-top: 0px;

  }
  .set{
    height: 3.875rem;
    display: flex;
    border: solid 0.062rem red;
    margin-top: 9px;

  }
  .reg_pass{
    margin-top: 1.312rem;
    display: block;
    margin-left: 8px;
  }

</style>
