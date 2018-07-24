import React from 'react'
import Bundle from 'utils/bundle'
const _import_page = (file, title) => <Bundle load={() => import(`containers/${file}`)} title={title}></Bundle>

let routes = [
  {
    path: '/',
    exact: true,
    auth: true,
    title: '首页',
    component: 'home'
  },
  {
    path: '/home1',
    component: 'home'
  },
  {
    path: '*',
    component: props => <div>NOT FOUND</div>
  }
]

routes = routes.map(item => {
  return {
    ...item,
    component: item.path !== '*' ? props => _import_page(item.component, item.title) : item.component
  }
})

export default routes