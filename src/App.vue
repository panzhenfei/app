<template>
   <div id="app">
     <!--<tabbar></tabbar>-->
     <!--<keep-alive>-->
     <!--将整个路由页面一切缓存下来，也就是将 <router-view> 进行缓存-->
     <!--<router-view></router-view>-->
     <!--</keep-alive>-->
        <!--动画效果-->
     <!--<transition name="transitionRouter">-->
           <!--<router-view></router-view>-->
     <!--</transition>-->
           <!--<keep-alive>-->
             <!--&lt;!&ndash;将tabbar进行缓存&ndash;&gt;-->
             <!--<tabbar></tabbar>-->
           <!--</keep-alive>-->
       <router-view></router-view>
     <keep-alive>
       <!--将tabbar进行缓存-->
       <tabbar></tabbar>
     </keep-alive>
  </div>
</template>

<script>
  import tabbar from '@/components/commons/tabbar'
export default {
  name: 'App',
    components: {
      tabbar
    },
  created(){
    console.log("刷新,我就会重新执行");
  },
  watch: {
    '$route'(to,from){
      if (to.path=='/home') {
        this.$router.push(this.$store.getters.GET_LAST_SELECTED_PATH);

      }
    }
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

<style>
  @import url('./assets/reset.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 40px;*/
}
  /*.transitionRouter-enter-active,*/
  /*.transitionRouter-leave-active {*/
    /*transition: all 0.4s;*/
  /*}*/

  /*.transitionRouter-enter,*/
  /*.transitionRouter-leave{*/
    /*transform: translate3d(100%, 0, 0);*/
  /*}*/
</style>
