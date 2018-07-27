<template>

  <div class="set_content">
      <div>
        <!--<div class="set_header" @click="pushBack">-->
        <div class="set_header" @click="pushBack">
          <img src="" v-lazy="Img3" class="back_img"/>
          <span class="back">返回</span>
        </div>
        <h1 class="set_font">设置</h1>
      </div>
    <router-view></router-view>
    <setIndex></setIndex>

  </div>


</template>

<script>
  import setIndex from '@/components/Set/setIndex'
  export default {
    data(){
      return{
        // back:'/static/images/back.png',
        Img3:'/static/images/back.png'

      }
    },
    methods:{
      pushBack(){
        this.$router.go(-1);//返回上一层
      },
      setting(){
        this.$router.push({name:'Setting'});
      // this.$router.push({path: '/Set/Setting'});
      }
    }


  }
</script>

<style lang="scss" scoped>
  .set_content{
    width: 100%;
    height:25.0rem;
  }
  /*.set_header{*/
    /*position: fixed;*/
    /*!*z-index: 10;*!*/
    /*right: 0;*/
    /*left: 0;*/
    /*top: 0;*/
    /*height: 2.75rem;*/
    /*padding-right: 0.625rem;*/
    /*padding-left: 0.625rem;*/
    /*border-bottom: 0;*/
    /*background-color: #f7f7f7;*/
    /*-webkit-box-shadow: 0 0 1px rgba(0,0,0,.85);*/
    /*box-shadow: 0 0 1px rgba(0,0,0,.85);*/
    /*-webkit-backface-visibility: hidden;*/
    /*backface-visibility: hidden;*/
    /*line-height: 2.75rem;*/
  /*}*/
.set_header{
  height: 44px;
  display: flex;
  border: solid 1px red;
  margin-top:0rem;
  background-color: #f7f7f7;
  /*-webkit-box-shadow: 0 0 1px rgba(0,0,0,.85);*/
  /*box-shadow: 0 0 1px rgba(0,0,0,.85);*/
  /*-webkit-backface-visibility: hidden;*/

}
.back_img{
  width: 2.75rem;
  height: 2.75rem;
}
  .back{
    margin-top: 0.75rem;
    display:block;
    color: #4ba9e9;
  }
  .set_font{
    display: block;
    margin-top: -45px;
    color: #000000;
    font-weight: 400;
    line-height: 44px;

  }
  .reg_login{
    height: 3.875rem;
    display: flex;
    border: solid 1px red;
    margin-top: 0rem;
    /*margin-top: 7%;*/
    //position: relative;
  }
  .reg_loginfont{
    margin-top: 0.75rem;
    display:block;
    margin-left: 8px;
  }
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
