import Router from 'vue-router'

import leftDown from 'components/left-down/left-down'
import investmentIndex from './views/investment/index'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'investmentIndex',path: '/investment/index', component: investmentIndex },

  ]
})
