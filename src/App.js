import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import ROUTES from './routes'


class AuthRoute extends  Component {
  render () {
      let {component: Component, ...rest} = this.props
      // 是否登录
      if (!rest.auth) {
          return <Redirect to='/login' />
      }
      return <Route {...rest}  component={Component}/>
  }
}

const MyRoute = () => (
  <Router>
    <Switch>
      {ROUTES.map(route => {
          if (route.auth) {
            return <AuthRoute key={route.path} {...route}></AuthRoute>
          }
          return <Route key={route.path} {...route}></Route>
        })}
    </Switch>
  </Router>
)

export default MyRoute