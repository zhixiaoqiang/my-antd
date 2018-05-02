import React from 'react'
import Bundle from 'utils/bundle'

export default [
  {
    path: '/',
    page (props) {
      return <Bundle {...props} load={() => import('containers/home')}></Bundle>
    }
  },
  {
    path: '/home1',
    page (props) {
      return <Bundle {...props} load={() => import('containers/home1')}></Bundle>
    }
  }
]