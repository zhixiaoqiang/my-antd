import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import ROUTES from './routes'


const MyRoute = () => (
  <Router>
    <div>
      {ROUTES.map(route => {
          return <Route exact={true} key={route.path} path={route.path} component={route.page}></Route>
        })}
    </div>
  </Router>
)

export default MyRoute