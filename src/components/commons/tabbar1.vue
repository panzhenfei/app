<template>
	<div id="tabbar">

		<ul>

			<li v-for="(item,key,index) in tabbarNames" @click="toRoute(item),selectBar(index)" :class="{active:selectIndex == index}">
        {{key}}
      </li>
      <!--<li><router-link to="/Home">消息</router-link></li>-->
      <!--<li><router-link to="/Contacts">联系人</router-link></li>-->
      <!--<li><router-link to="/Profile">我的</router-link></li>-->

		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
    data() {
      return {
        tabbarNames: {
          "消息": "/home",
          "联系人": "/Contacts",
          "我的": "/Profile"
        },


      }
    },
    	methods: {
    		toRoute(routePath){
    			this.$router.push(routePath);
    		},
    		selectBar(index){
    			this.$store.dispatch('UPDATE_TABBAR_SELECTED_INDEX',index);

    		}
    	},
    	computed: {
    		selectIndex(){
    			return this.$store.getters.GET_TABBAR_SELECTED_INDEX;
    		}
    	}

  }
</script>

<style lang="scss" scoped>
	 #tabbar {
	 	width:100%;
	 	position: fixed;
	 	bottom: 0;
	 	background: #ECECEC;
	 	height:44px;
	 	ul {
	 		display: flex;
      list-style: none;
	 		li{

	 			flex-grow: 1;
	 			line-height: 44px;
	 			text-align: center;
	 		}
	 		.active {
	 			color:red
	 		}
	 	}
	 }
</style>
