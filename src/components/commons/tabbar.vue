<template>
	<div id="tabbar">

		<!--<ul>-->
			<!--<li v-for="(item,key,index) in tabbarNames" @click="toRoute(item),selectBar(index)" :class="{active:selectIndex == index}">-->
        <!--{{key}}-->
      <!--</li>-->
      <!--&lt;!&ndash;<li><router-link to="/Home">消息</router-link></li>&ndash;&gt;-->
      <!--&lt;!&ndash;<li><router-link to="/Contacts">联系人</router-link></li>&ndash;&gt;-->
      <!--&lt;!&ndash;<li><router-link to="/Profile">我的</router-link></li>&ndash;&gt;-->

		<!--</ul>-->

    <!--这里的router-link 的属性需要设置为 active-class="active", 然后在script部分的data添加 active=false;-->
    <!--这样切换页面或者组件router才能缓存不变-->
    <ul>
      <router-link to='/home' active-class="active"><img src="" v-lazy="Img1"><li class="tabbarHome router-link-active" >消息</li></router-link>
      <router-link to='/Contacts' active-class="active"><img src="" v-lazy="Img1"><li class="tabbarHome router-link-active">联系人</li></router-link>
      <router-link to='/Profile'  active-class="active"><img src="" v-lazy="Img1"><li class="tabbarHome router-link-active">我的</li></router-link>

    </ul>
	</div>
</template>

<script type="text/javascript">
	export default {
    data() {
      return {
        // tabbarNames: {
        //   "消息": "/home",
        //   "联系人": "/Contacts",
        //   "我的": "/Profile"
        // },
        // Img1:'/static/images/b.gif',
        active: false,
        Img1:'/static/images/book.png',


      }
    },
    	methods: {
    	// 	toRoute(routePath){
    	// 		this.$router.push(routePath);
    	// 	},
    	// 	selectBar(index){
    	// 		this.$store.dispatch('UPDATE_TABBAR_SELECTED_INDEX',index);
        //
    	// 	}
    	// },
    	// computed: {
    	// 	selectIndex(){
    	// 		return this.$store.getters.GET_TABBAR_SELECTED_INDEX;
    	// 	}
    	 },
    created: function() {
      console.log("the hook of created is done!");
    },
    mounted: function() {
      console.log("the hook of mounted is done!");
    },
    activated: function() {
      console.log("the hook of activated is done!");
    },
    deactivated: function() {
      console.log("the hook of deactivated is done!");
    }

  }
</script>

<style lang="scss" scoped>
	 /*#tabbar {*/
	 	/*width:100%;*/
	 	/*position: fixed;*/
	 	/*bottom: 0;*/
	 	/*background: #ECECEC;*/
	 	/*height:44px;*/
	 	/*ul {*/
	 		/*display: flex;*/
      /*list-style: none;*/
	 		/*li{*/

	 			/*flex-grow: 1;*/
	 			/*line-height: 44px;*/
	 			/*text-align: center;*/
	 		/*}*/
	 		/*.active {*/
	 			/*color:red*/
	 		/*}*/
	 	/*}*/
	 /*}*/
   #tabbar{
    //position: relative;
     height:44px;
     width:100%;
     background:rgb(230,230,230);
    position:fixed;
     bottom:0px;
     ul{
       display:flex;
       a{
         flex:2;
         display: block;
         /*display:flex;*/
         justify-content:center;
         height:44px;
         line-height:20px;
         text-decoration: none;//去掉下划线
        // list-style-type:none;

       }
     }
   }
   .tabbarHome{
     display: block;
   }
   .admin{
     position: absolute;
     left: 40px;
   }
  img{
    width: 24%;
    height: 50%;
  }
   /*.router-link-active {*/
     /*text-decoration: none;*/
   /*}*/
  .active{
    color: red;
  }
</style>
