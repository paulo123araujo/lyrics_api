import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import List from '../pages/List'
import Search from '../pages/Search'
import Lyrics from '../pages/Lyrics'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/list" component={List} />
      <Route path="/lyrics/:artist/:song" children={<Lyrics />} />
      <Redirect from="*" to="/list" />
    </Switch>
  </BrowserRouter>
)