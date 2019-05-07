import React from 'react'
import { BrowserRouter, Route, IndexRoute, hashHistory, Switch } from 'react-router-dom'
import FormTest from './react/FormTest'
import Redux from './react/Redux'
import Mobx from './react/Mobx'
import Home from './react/Home'

export default () => (
  <BrowserRouter history={hashHistory}>
    <Switch>
      <Route path="/form" component={FormTest}/>
      <Route path="/redux" component={Redux}/>
      <Route path="/mobx" component={Mobx}/>
      <Route path="/" component={Home}/>
    </Switch>
  </BrowserRouter>  
)