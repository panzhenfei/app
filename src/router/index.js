import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home/Home'
// import Profile from '@/components/Profile/Profile'
//import Login from '@/components/Login/Login'
const Login = resolve => require(['@/components/Login/Login'], resolve)
const Home = resolve => require(['@/components/Home/Home'], resolve)
const Profile = resolve => require(['@/components/Profile/Profile'], resolve)
const Contacts = resolve => require(['@/components/Contacts/Contacts'], resolve)
const Set = resolve => require(['@/components/Set/Set'], resolve)
const Project = resolve => require(['@/components/Project/Project'], resolve)
const Collection = resolve => require(['@/components/Collection/Collection'], resolve)
const Company = resolve => require(['@/components/Company/Company'], resolve)
const Setting = resolve => require(['@/components/Set/setting'], resolve)
const setIndex = resolve => require(['@/components/Set/setIndex'], resolve)
const Phone = resolve => require(['@/components/Set/phone'], resolve)
const Card = resolve => require(['@/components/Set/card'], resolve)
const changePassword = resolve => require(['@/components/Set/changePassword'], resolve)
const Third = resolve => require(['@/components/Set/third'], resolve)
const aboutUs = resolve => require(['@/components/Set/aboutUs'], resolve)
const privatee = resolve => require(['@/components/Set/privatee'], resolve)
const agreement = resolve => require(['@/components/Set/agreement'], resolve)
const recommend = resolve => require(['@/components/Set/recommend'], resolve)



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Home',
      // name: 'Home',
      // component: Home,
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta: {
        keepAlive: true
      },
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Set',
      name: 'Set',
      component: Set,
      children:[
        {
          path:'setIndex',
          name: 'setIndex',
          component: setIndex,
        },{
          path: 'Setting',
          name: 'Setting',
          component: Setting,
        },{
          path: 'Phone',
          name: 'Phone',
          component: Phone,
        },
        {
          path: 'Card',
          name: 'Card',
          component: Card,
        },
        {
          path: 'changePassword',
          name: 'changePassword',
          component: changePassword,
        },
        {
          path: 'Third',
          name: 'Third',
          component: Third,
        },
        {
          path: 'aboutUs',
          name: 'aboutUs',
          component: aboutUs,
        },
        {
          path: 'privatee',
          name: 'privatee',
          component: privatee,
        },
        {
          path: 'agreement',
          name: 'agreement',
          component: agreement,
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend,
        },




      ]
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting,
    },

    {
      path: '/Project',
      name: 'Project',
      component: Project,
    },
    {
      path: '/Collection',
      name: 'Collection',
      component:Collection,
    },
    {
      path: '/Company',
      name: 'Company',
      component:Company,
    },




  ]
})
