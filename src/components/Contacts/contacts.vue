<template>
  <div class="contacts_father">
    <div class="contacts">
      <h1>联系人</h1>
    </div>
    <div class="contacts_friend">
      <img src="" v-lazy="Img1" class="contacts_img"/>
      <span class="contacts_friend_friend">我的好友</span>
    </div>
    <div class="contacts_address">
      <img src="" v-lazy="Img1" class="address_img"/>
      <span class="contacts_addres">联系人</span>
    </div>
    <div>
      <div class="contacts_test" @click="open=!open">
        {{ open ? '' : '' }}
        <img src="" v-lazy="Img1" class="address_img"/>
        <span class="contacts_project">测试工程</span>
      </div>
      <div class="contacts_invite" v-show="!open">
        <img src="" v-lazy="Img2" class="invite_img"/>
        <span class="contacts_addres">{{title}}</span>
        <slot></slot>
      </div>
      <div class="contacts_invite" v-show="!open">
        <img src="" v-lazy="Img2" class="invite_img"/>
        <span class="contacts_addres">{{title}}</span>
        <slot></slot>
      </div>
      <div class="contacts_invite" v-show="!open">
        <img src="" v-lazy="Img2" class="invite_img"/>
        <span class="contacts_addres">{{title}}</span>
        <slot></slot>
      </div>
    </div>
    <div class="contact_friend" @click="company">
      <img src="" v-lazy="Img1" class="contact_img"/>
      <span class="contact_friend_friend">我的企业</span>
      <div class="contact_back"> <img src="" v-lazy="Img1"></div>
    </div>







  </div>
</template>

<script>
  export default {
    data(){
      return{
        Img1:'/static/images/book.png',
        Img2:'/static/images/ico_second.gif',
        Img3:'/static/images/back.png',
        open:true,
        title:'邀请加入其它方'

      }
    },
    methods:{


    }



  };
</script>
<style lang="scss" scoped>
  /*.ceshi{*/
    /*width:100px;*/
    /*height:100px;*/
    /*border: solid 1px red;*/
  /*}*/
  /*.ceshi1{*/
    /*width:100px;*/
    /*height:100px;*/
    /*border: solid 1px blue;*/
  /*}*/
  /*.ceshi2{*/
    /*width:100px;*/
    /*height:100px;*/
    /*border: solid 1px greenyellow;*/
  /*}*/

  .contacts_father{
    //background-color: #efeff4;
    height: 25.0rem;
    width: 100%;
  }
  .contacts{
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
  }
  h1{
    text-align: center;
    line-height:2.75rem;
  }
  .contacts_friend{
    height: 3.875rem;
    display: flex;
    border: solid 1px red;
    margin-top: 2.8rem;

  }
  .contacts_address{
    height: 3.875rem;
    display: flex;
    border: solid 0.062rem red;
    margin-top: 0.75rem;

  }
  .contacts_invite{
    height: 3.875rem;
    display: flex;
    border: solid 0.062rem red;
    margin-top: 0rem;

  }
  .contacts_test{
    height: 3.875rem;
    display: flex;
    border: solid 0.062rem red;
    margin-top: 0.75rem;

  }
  .contacts_img{
    /*display: block;*/
    /*left:15px;*/
    width: 2.75rem;
    height: 2.75rem;
    /*flex: 1;*/
  }
  .address_img{
    /*display: block;*/
    /*left:15px;*/
    width:  2.75rem;
    height:  2.75rem;
    margin-top: 0.812rem;
    /*flex: 1;*/
  }
  .invite_img{
    /*display: block;*/
    margin-left: 22px;
    width:  2.75rem;
    height:  2.75rem;
    margin-top: 0.812rem;
    /*flex: 1;*/
  }
  .contacts_friend_friend{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 0.75rem;

  }
  .contacts_addres{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 1.312rem;
    display: block;
  }
  .contacts_project{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 1.312rem;
    display: block;

  }
  .contact_friend{
    height: 3.875rem;
    display: flex;
    border: solid 1px red;
    margin-top: 1rem;
    /*margin-top: 7%;*/
    //position: relative;

  }
  .contact_img{
    /*display: block;*/
    /*left:15px;*/
    width: 2.75rem;
    height: 2.75rem;
    /*flex: 1;*/
  }
  .contact_friend_friend{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 0.75rem;
    display:block;
    // margin-left:0.625rem;

  }
  .contact_back{
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.938rem;
    border: solid 0.062rem red;
    position: absolute;
    right: 0.625rem;

  }



</style>
