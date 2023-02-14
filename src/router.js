import { createRouter, createWebHashHistory } from 'vue-router'

import CalculatorMain from './views/CalculatorMain.vue'
import HomeMain from './views/HomeMain.vue'
import AboutMain from './views/AboutMain.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: CalculatorMain,
      path: '/CalculatorMain'
    },
    {
      component: HomeMain,
      path: '/'
    },
    {
      component: AboutMain,
      path: '/About/:OneParameter/:TwoParameters'
    }
  ]
})
