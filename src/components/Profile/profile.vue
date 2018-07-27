<template>
  <div class="profile_father">
    <div class="profile">
      <img src="" v-lazy="Img2" class="profile_img2"/>
      <div class="profile_content">
        <div class="profile_head">
          <img src="" v-lazy="Img1" class="head_img">
        </div>
        <div class="profile_message">
          <!--<span class="profile_admin">项目经理</span>-->
          <!--<span class="profile_phone">13297781171</span>-->
          <div class="profile_admin">项目经理</div>
          <div class="profile_phone">13297781171</div>
        </div>
      </div>
    </div>
    <div class="profile_body">
      <div class="profile_friend" @click="company">
        <img src="" v-lazy="Img1" class="profile_img"/>
        <span class="profile_friend_friend">我的企业</span>
        <div class="profile_back"> <img src="" v-lazy="Img3"></div>
      </div>
      <div class="profile_address" @click="project">
        <img src="" v-lazy="Img1" class="address_img"/>
        <span class="profile_addres">我的项目</span>
        <div class="profile_back"> <img src="" v-lazy="Img3"></div>
      </div>

      <div class="profile_collect" @click="collection">
        <img src="" v-lazy="Img1" class="collect_img"/>
        <span class="profile_collectt">我的收藏</span>
        <div class="profile_back"> <img src="" v-lazy="Img3"></div>
      </div>
      <!--<router-link to='/Set'>-->
        <div class="profile_set"  @click="set">
          <img src="" v-lazy="Img1" class="set_img"/>
          <span class="profile_sett">设置</span>
          <div class="profile_back"> <img src="" v-lazy="Img3"></div>
        </div>
      <!--</router-link>-->

    </div>


  </div>
</template>

<script>
  export default {
    data(){
      return{
        Img1:'/static/images/book.png',
        Img2:'/static/images/bgr-mycenter.jpg',
        Img3:'/static/images/back.png'
      }
    },
    methods:{
      set(){
        // this.$router.push({name:'typeList',params: {foreignMall:this.foreignMall}})
        this.$router.push({name:'setIndex'});
      },
      project(){
        this.$router.push({name:'Project'});
      },
      collection(){
        this.$router.push({name:'Collection'});
      },
      company(){
        this.$router.push({name:' Company'});
      }



    }



  };
</script>
<style lang="scss" scoped>
  .profile_father{
    height: 25.0rem;
    width: 100%;
    /*position: relative;*/
  }
  .profile_content{
    z-index: 20;
    /*margin-left: 154px;*/
    margin-left: 70px;
    display: flex;
  }
  .profile_body{
   /*margin-top: 10px;*/
    /*top: 10px;*/

  }
  .profile{
    top:0px;
    /*width:500px;*/
    /*height:150px;*/
    display:flex;
    align-items:center;
    justify-content:center;
    /*background: green;*/
    //border: solid 1px red;
    //position: relative;
  }
  h1{
    text-align: center;
    line-height:25.0rem;
  }
  .profile_head{
    width:3.75rem;
    height:3.75rem;
    border: solid 0.062rem greenyellow;
    z-index: 11;
    border-radius:2.188rem;
    margin-left:  -12.438rem;
    margin-right:10px;
    display:flex;
    align-items:center;
    justify-content:center;

  }
  /*.profile_body{*/
    /*top: 0px;*/
    /**/
  /*}*/
  .profile_message{
    z-index: 60;
    margin-left:-3px;
    margin-top: 23px;
    /*position: relative;*/
  }
  .profile_admin{
    z-index: 40;
    margin-top:0.312rem;
    color: red;
    margin-left: 6px;
  }
  .profile_phone{
    z-index: 50;
    margin-top:0.25rem;
    color: red;
    left:23%;
    display: block;
    position: absolute;

  }

  .profile_img2{
    top: 0px;
    display: block;
    position: absolute;
    width:100%;
    height:auto;

  }
  .head_img{
    width:100%;
    height:auto;
  }
  .profile_friend{
    height: 3.875rem;
    display: flex;
    border: solid 1px red;
    margin-top: 5.232rem;
    /*margin-top: 7%;*/
    //position: relative;

  }
  .profile_address{
    height: 3.875rem;
    display: flex;
    border: solid 0.062rem red;
    margin-top: 0px;

  }
  .profile_collect{
    height: 3.875rem;
    display: flex;
    border: solid 0.062rem red;
    margin-top: 0.625rem;

  }
  .profile_set{
    height: 3.875rem;
    display: flex;
    border: solid 0.062rem red;
    margin-top: 0.625rem;

  }
  .profile_img{
    /*display: block;*/
    /*left:15px;*/
    width: 2.75rem;
    height: 2.75rem;
    /*flex: 1;*/
  }
  .address_img{
    /*display: block;*/
    /*left:15px;*/
    width: 2.75rem;
    height: 2.75rem;
    margin-top: 0.812rem;
    /*flex: 1;*/
  }
  .collect_img{
    /*display: block;*/
    /*left:15px;*/
    width: 2.75rem;
    height: 2.75rem;
    margin-top: 0.812rem;
    /*flex: 1;*/
  }
  .set_img{
    /*display: block;*/
    /*left:15px;*/
    width:  2.75rem;
    height:  2.75rem;
    margin-top: 0.812rem;
    /*flex: 1;*/
  }
  .profile_friend_friend{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 0.75rem;
    display:block;
   // margin-left:0.625rem;

  }
  .profile_addres{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 1.312rem;
    display: block;
   // margin-left:0.625rem;
  }
  .profile_collectt{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 1.312rem;
    display: block;
    //margin-left:0.625rem;

  }
  .profile_sett{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 1.312rem;
    display: block;
   // margin-left:0.625rem;

  }
  .profile_back{
      width: 1.25rem;
      height: 1.25rem;
      margin-top: 0.938rem;
     border: solid 0.062rem red;
     position: absolute;
     right: 0.625rem;

      }



</style>
