<template>
  <div class="recommend">
    <div class="recommend_one">
        <div class="recommend_two">
          <!--<span class="recommend_four">APP下载源码</span>-->
          <div class="recommend_three">

          </div>
        </div>
    </div>

    <div class="share">
       <button class="share_button">点击分享</button>
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
  .recommend{
    width: 100%;
    height:25.0rem;
  }
.recommend_one{
  width: 100%;
  height: 420px;
  border: solid 1px red;
  display: flex;//flex布局
  justify-content: center;//使子项目水平居中
  align-items: center;//使子项目垂直居中
}
.recommend_two{
  width: 335px;
  height: 300px;
  border: solid 1px red;
  display: flex;//flex布局
  justify-content: center;//使子项目水平居中
  align-items: center;//使子项目垂直居中
}
  .recommend_three{
    width: 280px;
    height: 200px;
    border: solid 1px red;
  }
.recommend_four{
  /*width: 335px;*/
  /*height: 30px;*/
  /*border: solid 1px red;*/
  //margin-top: -272px;
}
.share{
  width: 100%;
  height: 30px;
  border: solid 1px red;
 display: flex;
}
  .share_button{
    flex: 1;
    width: 20rem;
    height: 50px;
    background:#4ba9e9;
    border-radius: 12px;
  }





</style>
