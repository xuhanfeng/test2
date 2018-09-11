import Vue from 'vue'
import Router from 'vue-router'
import tab from '@/components/tab/tab'
import singer from '@/components/singer/singer'
import recommon from '@/components/recommon/recommon'
import search from '@/components/search/search'
import sing from '@/components/sing/sing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tab',
      name: 'tab',
      component: tab,
      children:[
          {
            path:'/tab/recommon',
            name:'recommon',
            component:recommon
          },
           {
            path:'/tab/singer',
            name:'singer',
            component:singer
          },
           {
            path:'/tab/sing',
            name:'sing',
            component:sing
          },
           {
            path:'/tab/search',
            name:'search',
            component:search
          }
      ]
    },
  ]
})
