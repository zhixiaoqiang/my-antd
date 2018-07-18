import React from 'react'
import Bundle from 'utils/bundle'
const _import_page = file => <Bundle load={() => import(`containers/${file}`)}></Bundle>
export default [
  {
    path: '/',
    exact: true,
    auth: true, 
    component: props => _import_page('home')
  },
  {
    path: '/home1',
    component: props => _import_page('home1')
  },
  {
    path: '*',
    component: props => <div>NOT FOUND</div>
  }
]