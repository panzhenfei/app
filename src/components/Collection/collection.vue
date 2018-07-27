<template>
  <div class="collection">
    <div>
      <div class="collection_header" @click="pushBack">
        <img src="" v-lazy="Img3" class="back_img"/>
        <span class="back">返回</span>
      </div>
      <h1 class="collection_font">搜藏</h1>
    </div>
    <div>
      <div class="collection_item">
         <div class="collectiona">
           <img src="" v-lazy="Img1" class="collection_img"/>
           <!--//在这里填充数据和内容-->
         </div>

        <!--<span class="contacts_friend_friend">我的好友</span>-->
        <div class="collection_mes">
          <div class="collection_mess">
            <ul class="item_one">
              <li>测试2</li>
              <li>121212<span>2121212-2-4</span></li>
              <li>北1232sdfdsfsd人弄</li>
            </ul>
          </div>


        </div>


      </div>






    </div>







  </div>

</template>

<script>

  export default {
    name: 'App',
    data(){
      return{
        // back:'/static/images/back.png',
        Img3:'/static/images/back.png',
        Img1:'/static/images/book.png',



      }
    },
    components: {

    },
    methods:{
      pushBack(){
        this.$router.go(-1);//返回上一层
      }
    },



  }
</script>

<style lang="scss" scoped>
  .collection{
    height: 25.0rem;
    width: 100%;
  }
  .collectiona{
    width: 85px;
    height: 85px;
  }
  .collection_header{
    height: 44px;
    display: flex;
    border: solid 1px red;
    margin-top:0rem;
    background-color: #f7f7f7;
  }
  .back_img{
    width: 2.75rem;
    height: 2.75rem;
  }
  .collection_font{
    display: block;
    margin-top: -45px;
    color: #000000;
    font-weight: 400;
    line-height: 44px;
  }
  .back{
    margin-top: 0.75rem;
    display:block;
    color: #4ba9e9;
  }
  .collection_item{
    height: 82px;
    display: flex;
    border: solid 1px red;
    //margin-top: 5.232rem;
    /*margin-top: 7%;*/
    //position: relative;
  }
  .collection_img{
    /*display: block;*/
    /*left:15px;*/
    width: 2.75rem;
    height: 2.75rem;
    margin-top: 11px;
    /*flex: 1;*/
  }
  .contacts_friend_friend{
    /*flex: 6;*/
    /*background-color: #f7f7f7;*/
    margin-top: 0.75rem;
  }
  .item_one{
    text-align: left;
    display: block;
    margin-left: 5px;
  }
  .collection_mes{
    width: 100%;
  }

</style>
