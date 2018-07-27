<template>
  <div class="third">

    <div class="third_body">
      <div class="third_friend">
        <img src="" v-lazy="Img1" class="third_img"/>
        <span class="third_friend_friend">微信</span>
        <div class="third_back">
          <label class="switch">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
      </div>
      <div class="third_address">
        <img src="" v-lazy="Img1" class="address_img"/>
        <span class="third_addres">QQ</span>
        <div class="third_back">
          <label class="switch">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
      </div>
    </div>



  </div>

</template>

<script>

  export default {
    data(){
      return{
        Img1:'/static/images/book.png',

      }
    },
    name: 'App',
    components: {

    },
  }
</script>

<style lang="scss" scoped>
  .third{
    height: 25.0rem;
    width: 100%;
  }
  .third_friend{
    height: 3.875rem;
    display: flex;
    border: solid 1px red;
    margin-top:0.232rem;
    /*margin-top: 7%;*/
    //position: relative;

  }
  .third_img{
    /*display: block;*/
    /*left:15px;*/
    width: 2.75rem;
    height: 2.75rem;
    /*flex: 1;*/
  }
  .third_friend_friend{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 0.75rem;
    display:block;
    // margin-left:0.625rem;

  }
  .third_back{
    width: 4.25rem;
    height: 2.25rem;
    margin-top: 0.938rem;
    border: solid 0.062rem red;
    position: absolute;
    right: 0.625rem;

  }
  .third_address{
    height: 3.875rem;
    display: flex;
    border: solid 0.062rem red;
    margin-top: 0px;

  }
  .address_img{
    /*display: block;*/
    /*left:15px;*/
    width: 2.75rem;
    height: 2.75rem;
    margin-top: 0.812rem;
    /*flex: 1;*/
  }
  .third_addres{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 1.312rem;
    display: block;
    // margin-left:0.625rem;
  }
  .switch{
    width: 68px;
    height: 35px;
    border-radius:30px;
    overflow: hidden;
    vertical-align:middle;
    position:relative;
    display: inline-block;
    background:#ccc;
    box-shadow: 0 0 1px red;
  }
  .switch input{
    visibility: hidden;
  }
  .switch span{
    position:absolute;
    top:0;
    left:0;
    border-radius: 50%;
    background:#fff;
    width:50%;
    height:100%;
    transition:all linear 0.2s;
  }
  .switch span::before{
    position: absolute;
    top:0;
    left:-100%;
    content:'';
    width:200%;
    height:100%;
    border-radius: 30px;
    background:red;
  }
  .switch span::after{
    content:'';
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    border-radius: 50%;
    background:#fff;
  }
  .switch input:checked +span{
    transform:translateX(100%);
  }









</style>
