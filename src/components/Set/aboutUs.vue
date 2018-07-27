<template>
  <div class="aboutUs">
     <div class="about_content">
        <div class="about_img">
          <img src="" v-lazy="Img1" class="about_imgg">
        </div>
     </div>
    <div class="about_version">
      <span>当前版本：设备不支持</span>
    </div>
    <div class="about_contentt">
      建云信融是一套针对国内工程行业，以工程项目的过程协作为基础，以提高协作方便性、效率为目的的一个互联网平台
      使用和服务对象以项目方为主体，关联到跨企业的工程各方，包括甲方、监理方、设计方、劳务方、分包商、材料商等。
      业务范围包含合同以及“四流”数据的管理，现场形象视频、节点及回款进度管理、档案管理、项目收发件管理、现场收货、
      报量、打卡的管理等等。
    </div>

    <div class="about_foot">
       <ul>
         <router-link to='agreement'><li>服务协议</li></router-link>
         <router-link to='privatee'> <li>银饰政策</li></router-link>
       </ul>
    </div>



  </div>

</template>

<script>

  export default {
    name: 'App',
    components: {

    },
    data(){
      return{
        Img1:'/static/images/book.png',

      }
    },
  }
</script>

<style lang="scss" scoped>
  .aboutUs{
    width: 100%;
    height:25.0rem;
  }
  .about_content{
    width: 100%;
    height: 140px;
    border: solid 1px red;
    display: flex;//flex布局
    justify-content: center;//使子项目水平居中
    align-items: center;//使子项目垂直居中
  }
  .about_img{
    width: 80px;
    height:80px;
    border: solid 1px red;
    //margin: 0 auto;
  }
  .about_version{
    border: solid 1px red;
    width: 100%;
    height: 40px;

  }
.about_imgg{
  width:100%;
  height:auto;
}
  .about_contentt{
    width: 100%;
    height: 20rem;
    border:solid 1px red;
  }
.about_foot{
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 10rem;
  ul{
    display: flex;
    margin-left: 28px;
    a{
      flex:2;
      padding-left: 0px;
      color: blue;
      font-size: 18px;

    }
  }

}



</style>
